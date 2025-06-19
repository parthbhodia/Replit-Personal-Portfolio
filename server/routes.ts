import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertChatHistorySchema, insertMessageSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { sendEmail, formatContactEmail } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Chatbot API endpoint
  app.post("/api/chat", async (req, res) => {
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
      
      return res.json({ response: botResponse });
    } catch (error) {
      console.error("Chat API error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
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
  });

  const httpServer = createServer(app);
  return httpServer;
}

// Simple bot responses based on keywords
function getBotResponse(message: string): string {
  const lowerMsg = message.toLowerCase();
  
  if (lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('hey')) {
    return "Hello! How can I help you today?";
  } else if (lowerMsg.includes('skill') || lowerMsg.includes('tech') || lowerMsg.includes('technology')) {
    return "Alex specializes in Vue.js, Node.js, JavaScript, HTML/CSS, and responsive design. He's also experienced with MongoDB, Express, and various frontend frameworks.";
  } else if (lowerMsg.includes('project')) {
    return "Alex has worked on various projects including e-commerce platforms, task management apps, marketing dashboards, and content management systems. You can see them in the Projects section.";
  } else if (lowerMsg.includes('contact') || lowerMsg.includes('hire') || lowerMsg.includes('available')) {
    return "You can contact Alex through the contact form on this page, or directly via email at hello@alexchen.dev. He's currently available for freelance projects and collaboration opportunities.";
  } else if (lowerMsg.includes('experience') || lowerMsg.includes('work')) {
    return "Alex has over 5 years of experience in web development, working with startups and established companies across various industries including e-commerce, finance, and education.";
  } else if (lowerMsg.includes('education') || lowerMsg.includes('degree') || lowerMsg.includes('study')) {
    return "Alex holds a Bachelor's degree in Computer Science and continues to expand his knowledge through online courses and professional development.";
  } else if (lowerMsg.includes('location') || lowerMsg.includes('based') || lowerMsg.includes('from')) {
    return "Alex is based in San Francisco, California, but works remotely with clients worldwide.";
  } else if (lowerMsg.includes('frontend') || lowerMsg.includes('front-end') || lowerMsg.includes('front end')) {
    return "For frontend development, Alex is proficient in Vue.js, React, HTML5, CSS3, JavaScript/TypeScript, and various UI frameworks.";
  } else if (lowerMsg.includes('backend') || lowerMsg.includes('back-end') || lowerMsg.includes('back end')) {
    return "Alex's backend skills include Node.js, Express, MongoDB, PostgreSQL, RESTful APIs, and GraphQL.";
  } else if (lowerMsg.includes('design') || lowerMsg.includes('ui') || lowerMsg.includes('ux')) {
    return "Alex has a good eye for design and UX with skills in Figma, responsive design principles, and creating user-friendly interfaces.";
  } else if (lowerMsg.includes('thank') || lowerMsg.includes('thanks')) {
    return "You're welcome! Feel free to ask if you have any other questions.";
  } else if (lowerMsg.includes('bye') || lowerMsg.includes('goodbye')) {
    return "Goodbye! Feel free to chat again if you have more questions.";
  } else {
    return "I'm not sure I understand. Could you ask about Alex's skills, projects, experience, or how to contact him?";
  }
}
