import type { VercelRequest, VercelResponse } from '@vercel/node';
import { supabaseService } from '../../_utils';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { blogPostId } = req.query;
  if (!blogPostId || typeof blogPostId !== 'string') {
    return res.status(400).json({ error: 'Blog post ID is required' });
  }

  try {
    await supabaseService.incrementViews(blogPostId);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error incrementing views:', error);
    res.status(500).json({ error: 'Failed to record view' });
  }
}
