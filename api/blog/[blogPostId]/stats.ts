import type { VercelRequest, VercelResponse } from '@vercel/node';
import { supabaseService } from '../../_utils';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { blogPostId } = req.query;
    
    if (!blogPostId || typeof blogPostId !== 'string') {
      return res.status(400).json({ error: 'Blog post ID is required' });
    }

    const stats = await supabaseService.getBlogStats(blogPostId);
    
    return res.status(200).json({
      views: stats?.views || 0,
      hearts: stats?.hearts || 0
    });
  } catch (error) {
    console.error('Get blog stats error:', error);
    return res.status(500).json({ message: 'Failed to get blog stats' });
  }
} 