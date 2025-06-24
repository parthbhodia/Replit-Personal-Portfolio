import type { VercelRequest, VercelResponse } from '@vercel/node';
import { supabaseService } from '../../../_utils';

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

  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed', allowedMethods: ['GET'] });
  }

  try {
    const { blogPostId, userFingerprint } = req.query;
    
    if (!blogPostId || typeof blogPostId !== 'string') {
      return res.status(400).json({ error: 'Blog post ID is required' });
    }
    
    if (!userFingerprint || typeof userFingerprint !== 'string') {
      return res.status(400).json({ error: 'User fingerprint is required' });
    }
    
    const interaction = await supabaseService.getUserInteraction(userFingerprint, blogPostId);
    
    return res.status(200).json({
      hasLiked: interaction?.has_liked || false,
      hasViewed: interaction?.has_viewed || false
    });
  } catch (error) {
    console.error('Get user interaction error:', error);
    return res.status(500).json({ message: 'Failed to get user interaction', error: error instanceof Error ? error.message : 'Unknown error' });
  }
} 