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

  const { blogPostId } = req.query;
  
  if (!blogPostId || typeof blogPostId !== 'string') {
    return res.status(400).json({ error: 'Blog post ID is required' });
  }

  // GET - Fetch comments
  if (req.method === 'GET') {
    try {
      const comments = await supabaseService.getComments(blogPostId);
      return res.status(200).json(comments);
    } catch (error) {
      console.error('Get comments error:', error);
      return res.status(500).json({ message: 'Failed to get comments', error: error instanceof Error ? error.message : 'Unknown error' });
    }
  }
  // POST - Add comment
  else if (req.method === 'POST') {
    try {
      const { parentId, authorName, authorEmail, content, userFingerprint } = req.body;
      
      if (!authorName || !authorEmail || !content || !userFingerprint) {
        return res.status(400).json({ error: 'Missing required fields: authorName, authorEmail, content, userFingerprint' });
      }

      const comment = await supabaseService.addComment({
        blogPostId,
        parentId,
        authorName,
        authorEmail,
        content,
        userFingerprint
      });

      if (!comment) {
        return res.status(500).json({ message: 'Failed to add comment' });
      }

      return res.status(201).json(comment);
    } catch (error) {
      console.error('Add comment error:', error);
      return res.status(500).json({ message: 'Failed to add comment', error: error instanceof Error ? error.message : 'Unknown error' });
    }
  }
  // Method not allowed
  else {
    return res.status(405).json({ error: 'Method not allowed', allowedMethods: ['GET', 'POST'] });
  }
} 