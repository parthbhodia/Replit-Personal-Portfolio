import type { VercelRequest, VercelResponse } from '@vercel/node';
import { supabaseService } from '../../_utils';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set comprehensive CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
  res.setHeader('Access-Control-Max-Age', '86400');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { blogPostId } = req.query;
  
  if (!blogPostId || typeof blogPostId !== 'string') {
    return res.status(400).json({ error: 'Blog post ID is required' });
  }

  try {
    // Route based on the action parameter
    const { action } = req.query;

    switch (action) {
      case 'heart':
        if (req.method !== 'POST') {
          return res.status(405).json({ error: 'Method not allowed', allowedMethods: ['POST'] });
        }
        
        const { userFingerprint } = req.body;
        if (!userFingerprint) {
          return res.status(400).json({ message: 'User fingerprint is required' });
        }
        
        const result = await supabaseService.toggleHeart(blogPostId, userFingerprint);
        return res.status(200).json({
          success: true,
          isLiked: result.isLiked,
          totalHearts: result.totalHearts
        });

      case 'stats':
        if (req.method !== 'GET') {
          return res.status(405).json({ error: 'Method not allowed', allowedMethods: ['GET'] });
        }
        
        const stats = await supabaseService.getBlogStats(blogPostId);
        return res.status(200).json(stats);

      case 'view':
        if (req.method !== 'POST') {
          return res.status(405).json({ error: 'Method not allowed', allowedMethods: ['POST'] });
        }
        
        await supabaseService.incrementViews(blogPostId);
        return res.status(200).json({
          success: true
        });

      default:
        return res.status(400).json({ error: 'Invalid action. Use: heart, stats, or view' });
    }
  } catch (error) {
    console.error('Blog API error:', error);
    return res.status(500).json({ 
      message: 'Internal server error', 
      error: error instanceof Error ? error.message : 'Unknown error' 
    });
  }
} 