import type { VercelRequest, VercelResponse } from '@vercel/node';
import { insertMessageSchema } from '../shared/schema';
import { fromZodError } from 'zod-validation-error';
import { storage, sendEmail, formatContactEmail } from './_utils';

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
    const validatedData = insertMessageSchema.safeParse(req.body);
    
    if (!validatedData.success) {
      const validationError = fromZodError(validatedData.error);
      return res.status(400).json({ message: validationError.message });
    }
    
    const messageData = validatedData.data;
    
    // Store the contact message
    const savedMessage = await storage.saveMessage(messageData);
    
    // Send email notification
    const emailContent = formatContactEmail({
      name: messageData.name,
      email: messageData.email,
      subject: messageData.subject,
      message: messageData.message
    });
    
    const emailSent = await sendEmail({
      to: "parthbhodia08@gmail.com",
      from: "noreply@replit.com", // Using Replit's verified sender
      subject: emailContent.subject,
      text: emailContent.text,
      html: emailContent.html
    });
    
    if (emailSent) {
      console.log("Contact form email sent successfully");
    }
    
    return res.status(201).json({ 
      success: true, 
      message: "Message sent successfully" 
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return res.status(500).json({ message: "Failed to send message" });
  }
} 