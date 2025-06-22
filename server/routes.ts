import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertChatHistorySchema, insertMessageSchema, insertHeartSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { sendEmail, formatContactEmail } from "./email";
import { generatePlaceholder } from "./api/placeholder";

export async function registerRoutes(app: Express): Promise<Server> {
  // Placeholder image API endpoint
  app.get("/api/placeholder/:width/:height", generatePlaceholder);
  
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

  // Heart endpoints
  app.get("/api/heart/:sessionId", async (req, res) => {
    try {
      const { sessionId } = req.params;
      const heart = await storage.getHeart(sessionId);
      return res.json({ isLiked: heart?.isLiked || false });
    } catch (error) {
      console.error("Get heart error:", error);
      return res.status(500).json({ message: "Failed to get heart status" });
    }
  });

  app.post("/api/heart", async (req, res) => {
    try {
      const validatedData = insertHeartSchema.safeParse(req.body);
      
      if (!validatedData.success) {
        const validationError = fromZodError(validatedData.error);
        return res.status(400).json({ message: validationError.message });
      }
      
      const heartData = validatedData.data;
      const savedHeart = await storage.upsertHeart(heartData);
      
      return res.json({ 
        success: true, 
        isLiked: savedHeart.isLiked 
      });
    } catch (error) {
      console.error("Heart API error:", error);
      return res.status(500).json({ message: "Failed to update heart" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

// Comprehensive bot responses based on Parth Bhodia's resume
function getBotResponse(message: string): string {
  const lowerMsg = message.toLowerCase();
  
  if (lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('hey')) {
    return "Hello! I'm here to help you learn about Parth Bhodia. How can I assist you today?";
  } else if (lowerMsg.includes('name')) {
    return "This is Parth Bhodia's portfolio. He's a Software Developer with over 5 years of experience based in Jersey City, NJ.";
  } else if (lowerMsg.includes('skill') || lowerMsg.includes('tech') || lowerMsg.includes('technology')) {
    return "Parth specializes in JavaScript, TypeScript, Vue.js, React, Node.js, Python, AWS, and Java (Spring Boot). He's proficient with HTML, CSS, SASS, SCSS, REST APIs, and GraphQL. His cloud experience includes AWS services like Amplify, Cognito, API Gateway, and Lambda.";
  } else if (lowerMsg.includes('project')) {
    return "Parth has worked on impressive projects including: a ChatBOT with GPT and Pinecone that reduced information retrieval time by 50%, CMS systems for 100K+ users, AWS authentication systems, GIS visualization frameworks with Elastic Search, and award-winning applications like Nutri AI Scan. You can see all projects in the Projects section.";
  } else if (lowerMsg.includes('contact') || lowerMsg.includes('hire') || lowerMsg.includes('available')) {
    return "You can contact Parth through the contact form on this page, or directly via email at parthbhodia08@gmail.com or phone +1 443-929-4371. He's currently available for software development opportunities.";
  } else if (lowerMsg.includes('experience') || lowerMsg.includes('work')) {
    return "Parth has 5+ years of experience. Currently a Fullstack Developer at Eccalon LLC (May 2022-Present), previously Research Assistant at UMBC (2022), and Software Developer at Tata Communications Ltd (2018-2021). He's led development for 10,000+ user systems and increased APAC revenue by 36% through automation.";
  } else if (lowerMsg.includes('education') || lowerMsg.includes('degree') || lowerMsg.includes('study') || lowerMsg.includes('graduation')) {
    return "Parth holds a Master's in Computer Science from University of Maryland, Baltimore County (Aug 2021 - May 2023) and a Bachelor's in Information Technology from University of Mumbai (Aug 2014 - May 2018). He graduated in May 2023.";
  } else if (lowerMsg.includes('location') || lowerMsg.includes('based') || lowerMsg.includes('from') || lowerMsg.includes('where')) {
    return "Parth is based in Jersey City, NJ, United States. He works both remotely and on-site as needed.";
  } else if (lowerMsg.includes('visa') || lowerMsg.includes('status') || lowerMsg.includes('work authorization') || lowerMsg.includes('opt') || lowerMsg.includes('f1')) {
    return "Parth is currently on F1 OPT status, which allows him to work in the United States. He graduated in May 2023.";
  } else if (lowerMsg.includes('frontend') || lowerMsg.includes('front-end') || lowerMsg.includes('front end')) {
    return "For frontend development, Parth is expert in Vue.js, React, JavaScript, TypeScript, HTML5, CSS3, SASS, SCSS, and HTMX. He's built dynamic user interfaces without full page reloads and responsive designs.";
  } else if (lowerMsg.includes('backend') || lowerMsg.includes('back-end') || lowerMsg.includes('back end')) {
    return "Parth's backend expertise includes Node.js, Python, Java (Spring Boot), PostgreSQL, MongoDB, REST APIs, GraphQL, AWS Lambda, and RabbitMQ. He's designed systems for 100K+ users.";
  } else if (lowerMsg.includes('aws') || lowerMsg.includes('cloud')) {
    return "Parth has extensive AWS experience with Amplify, Cognito, API Gateway, Lambda Services, and database management. He's built secure authentication systems and dynamic content generation functions.";
  } else if (lowerMsg.includes('certification') || lowerMsg.includes('course')) {
    return "Parth has completed Data Science: Machine Learning from Harvard University and Advanced Software Engineering with Kafka and H2 from JP Morgan Chase.";
  } else if (lowerMsg.includes('award') || lowerMsg.includes('achievement') || lowerMsg.includes('recognition')) {
    return "Parth won 2nd place at CBIC Entrepreneurship at UMBC out of 25+ teams for his Nutri AI Scan project. He also increased APAC region revenue by 36% through automation at Tata Communications.";
  } else if (lowerMsg.includes('database') || lowerMsg.includes('db')) {
    return "Parth works with PostgreSQL, MongoDB, Vector databases (Pinecone), Elastic Search, and H2. He's designed schemas for large-scale systems with 100K+ users.";
  } else if (lowerMsg.includes('ai') || lowerMsg.includes('machine learning') || lowerMsg.includes('ml')) {
    return "Parth has AI/ML experience with GPT integration, vector databases (Pinecone), OCR technology, and TensorFlow. He built a ChatBOT that improved decision-making speed and an award-winning food scanning app.";
  } else if (lowerMsg.includes('thank') || lowerMsg.includes('thanks')) {
    return "You're welcome! Feel free to ask more about Parth's experience, projects, or skills.";
  } else if (lowerMsg.includes('bye') || lowerMsg.includes('goodbye')) {
    return "Goodbye! Feel free to chat again if you have more questions about Parth Bhodia.";
  } else {
    return "I can help you learn about Parth Bhodia's skills, experience, projects, education, visa status, or contact information. What would you like to know?";
  }
}
