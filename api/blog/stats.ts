import type { VercelRequest, VercelResponse } from '@vercel/node';
import { supabaseService } from '../_utils';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const stats = await supabaseService.getAllBlogStats();
    res.status(200).json(stats);
  } catch (error) {
    console.error('Error fetching blog stats:', error);
    res.status(500).json({ error: 'Failed to fetch blog stats' });
  }
}
