import type { VercelRequest, VercelResponse } from '@vercel/node';
import { supabaseService } from '../../_utils';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { blogPostId } = req.query;
    const { userFingerprint } = req.body;
    
    if (!blogPostId || typeof blogPostId !== 'string') {
      return res.status(400).json({ error: 'Blog post ID is required' });
    }
    
    if (!userFingerprint) {
      return res.status(400).json({ message: 'User fingerprint is required' });
    }
    
    const result = await supabaseService.toggleHeart(blogPostId, userFingerprint);
    
    return res.status(200).json({
      success: true,
      isLiked: result.isLiked,
      totalHearts: result.totalHearts
    });
  } catch (error) {
    console.error('Toggle heart error:', error);
    return res.status(500).json({ message: 'Failed to toggle heart' });
  }
} 