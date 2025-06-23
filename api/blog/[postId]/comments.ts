import type { VercelRequest, VercelResponse } from '@vercel/node';
import { supabaseService } from '../../_utils';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { postId } = req.query;
  
  if (!postId || typeof postId !== 'string') {
    return res.status(400).json({ error: 'Post ID is required' });
  }

  // GET - Fetch comments
  if (req.method === 'GET') {
    try {
      const comments = await supabaseService.getComments(postId);
      res.status(200).json(comments);
    } catch (error) {
      console.error('Error fetching comments:', error);
      res.status(500).json({ error: 'Failed to fetch comments' });
    }
  }
  // POST - Add comment
  else if (req.method === 'POST') {
    try {
      const { parentId, authorName, authorEmail, content, userFingerprint } = req.body;
      
      if (!authorName || !authorEmail || !content || !userFingerprint) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      const comment = await supabaseService.addComment({
        blogPostId: postId,
        parentId,
        authorName,
        authorEmail,
        content,
        userFingerprint
      });

      if (!comment) {
        return res.status(500).json({ error: 'Failed to add comment' });
      }

      res.status(201).json(comment);
    } catch (error) {
      console.error('Error adding comment:', error);
      res.status(500).json({ error: 'Failed to add comment' });
    }
  }
  // Method not allowed
  else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
} 