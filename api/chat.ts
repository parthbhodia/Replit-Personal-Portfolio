import type { VercelRequest, VercelResponse } from '@vercel/node';
import { insertChatHistorySchema } from '../shared/schema';
import { storage, getBotResponse } from './_utils';

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
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ message: "Message is required" });
    }

    // Process the message and get a response
    const botResponse = getBotResponse(message);
    
    // Save the chat history
    try {
      const chatHistoryData = insertChatHistorySchema.parse({
        message,
        response: botResponse,
      });
      await storage.saveChatHistory(chatHistoryData);
    } catch (err) {
      console.error("Failed to save chat history:", err);
      // Continue even if saving fails
    }
    
    return res.status(200).json({ response: botResponse });
  } catch (error) {
    console.error("Chat API error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
} 