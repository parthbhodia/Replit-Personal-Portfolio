import { createClient } from '@supabase/supabase-js';
import { MailService } from '@sendgrid/mail';
import { 
  insertChatHistorySchema, insertMessageSchema 
} from "../shared/schema";
import { fromZodError } from "zod-validation-error";

// Supabase configuration
const SUPABASE_URL = process.env.SUPABASE_URL || 'https://tphxfdxopxrohdjiugal.supabase.co';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwaHhmZHhvcHhyb2hkaml1Z2FsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA1NzI5ODgsImV4cCI6MjA2NjE0ODk4OH0.09vyrEzymys5q4tONt5I3iy7jtI-gvP3fmrFhaFW12Y';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// SendGrid configuration
if (!process.env.SENDGRID_API_KEY) {
  console.warn("SENDGRID_API_KEY environment variable not set - emails will not be sent");
}

const mailService = new MailService();
if (process.env.SENDGRID_API_KEY) {
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
}

// Types
export interface BlogStatsSupabase {
  id: number;
  blog_post_id: string;
  hearts: number;
  views: number;
  created_at: string;
  updated_at: string;
}

export interface UserInteractionSupabase {
  id: number;
  user_fingerprint: string;
  blog_post_id: string;
  has_liked: boolean;
  has_viewed: boolean;
  created_at: string;
  updated_at: string;
}

export interface CommentSupabase {
  id: number;
  blog_post_id: string;
  parent_id: number | null;
  author_name: string;
  author_email: string;
  content: string;
  user_fingerprint: string;
  created_at: string;
  updated_at: string;
}

export interface BlogPostSupabase {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  read_time: string;
  category: string;
  image: string;
  tags: string[];
  created_at: string;
  updated_at: string;
}

// Supabase Service Class
export class SupabaseService {
  async getAllBlogPosts(): Promise<BlogPostSupabase[]> {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('date', { ascending: false });

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      return [];
    }
  }

  async getBlogPost(id: string): Promise<BlogPostSupabase | null> {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching blog post:', error);
      return null;
    }
  }

  async getBlogStats(blogPostId: string): Promise<BlogStatsSupabase | null> {
    try {
      const { data, error } = await supabase
        .from('blog_stats')
        .select('*')
        .eq('blog_post_id', blogPostId)
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error('Error fetching blog stats:', error);
        return {
          id: 0,
          blog_post_id: blogPostId,
          hearts: 0,
          views: 0,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        };
      }

      return data || {
        id: 0,
        blog_post_id: blogPostId,
        hearts: 0,
        views: 0,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
    } catch (error) {
      console.error('Supabase connection error:', error);
      return {
        id: 0,
        blog_post_id: blogPostId,
        hearts: 0,
        views: 0,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
    }
  }

  async incrementViews(blogPostId: string): Promise<void> {
    try {
      const stats = await this.getBlogStats(blogPostId);
      
      if (stats && stats.id > 0) {
        await supabase
          .from('blog_stats')
          .update({ 
            views: stats.views + 1,
            updated_at: new Date().toISOString()
          })
          .eq('blog_post_id', blogPostId);
      } else {
        await supabase
          .from('blog_stats')
          .insert({
            blog_post_id: blogPostId,
            views: 1,
            hearts: 0
          });
      }
    } catch (error) {
      console.error('Error incrementing views:', error);
    }
  }

  async toggleHeart(blogPostId: string, userFingerprint: string): Promise<{ isLiked: boolean; totalHearts: number }> {
    try {
      const { data: interaction } = await supabase
        .from('user_interactions')
        .select('*')
        .eq('user_fingerprint', userFingerprint)
        .eq('blog_post_id', blogPostId)
        .single();

      const wasLiked = interaction?.has_liked || false;
      const newLikedState = !wasLiked;

      if (interaction) {
        await supabase
          .from('user_interactions')
          .update({
            has_liked: newLikedState,
            updated_at: new Date().toISOString()
          })
          .eq('id', interaction.id);
      } else {
        await supabase
          .from('user_interactions')
          .insert({
            user_fingerprint: userFingerprint,
            blog_post_id: blogPostId,
            has_liked: newLikedState,
            has_viewed: false
          });
      }

      const stats = await this.getBlogStats(blogPostId);
      const currentHearts = stats?.hearts || 0;
      const newHearts = newLikedState ? currentHearts + 1 : Math.max(0, currentHearts - 1);

      if (stats && stats.id > 0) {
        await supabase
          .from('blog_stats')
          .update({
            hearts: newHearts,
            updated_at: new Date().toISOString()
          })
          .eq('blog_post_id', blogPostId);
      } else {
        await supabase
          .from('blog_stats')
          .insert({
            blog_post_id: blogPostId,
            hearts: newHearts,
            views: 0
          });
      }

      return {
        isLiked: newLikedState,
        totalHearts: newHearts
      };
    } catch (error) {
      console.error('Error toggling heart:', error);
      return {
        isLiked: false,
        totalHearts: 0
      };
    }
  }

  async getUserInteraction(userFingerprint: string, blogPostId: string): Promise<UserInteractionSupabase | null> {
    try {
      const { data, error } = await supabase
        .from('user_interactions')
        .select('*')
        .eq('user_fingerprint', userFingerprint)
        .eq('blog_post_id', blogPostId)
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error('Error fetching user interaction:', error);
        return null;
      }

      return data;
    } catch (error) {
      console.error('Error fetching user interaction:', error);
      return null;
    }
  }

  async getComments(blogPostId: string): Promise<CommentSupabase[]> {
    try {
      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .eq('blog_post_id', blogPostId)
        .order('created_at', { ascending: true });

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching comments:', error);
      return [];
    }
  }

  async addComment(comment: {
    blogPostId: string;
    parentId?: number;
    authorName: string;
    authorEmail: string;
    content: string;
    userFingerprint: string;
  }): Promise<CommentSupabase | null> {
    try {
      const { data, error } = await supabase
        .from('comments')
        .insert({
          blog_post_id: comment.blogPostId,
          parent_id: comment.parentId || null,
          author_name: comment.authorName,
          author_email: comment.authorEmail,
          content: comment.content,
          user_fingerprint: comment.userFingerprint
        })
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error adding comment:', error);
      return null;
    }
  }
}

export const supabaseService = new SupabaseService();

// Email Service
interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  if (!process.env.SENDGRID_API_KEY) {
    console.log('Email not sent - SENDGRID_API_KEY not configured');
    return false;
  }

  try {
    await mailService.send({
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text,
      html: params.html,
    });
    console.log('Email sent successfully');
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}

export function formatContactEmail(formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): { subject: string; text: string; html: string } {
  const subject = `Contact Form: ${formData.subject}`;
  
  const text = `
New contact form submission:

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
  `.trim();

  const html = `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #333;">New Contact Form Submission</h2>
  
  <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <p><strong>Name:</strong> ${formData.name}</p>
    <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
    <p><strong>Subject:</strong> ${formData.subject}</p>
  </div>
  
  <div style="background: white; padding: 20px; border-left: 4px solid #007bff; margin: 20px 0;">
    <h3 style="margin-top: 0;">Message:</h3>
    <p style="white-space: pre-wrap;">${formData.message}</p>
  </div>
</div>
  `.trim();

  return { subject, text, html };
}

// Chatbot Response Function
export function getBotResponse(message: string): string {
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

// In-memory storage for local development (fallback)
export class MemStorage {
  private messages: Map<number, any>;
  private chats: Map<number, any>;
  private messageCurrentId: number;
  private chatCurrentId: number;

  constructor() {
    this.messages = new Map();
    this.chats = new Map();
    this.messageCurrentId = 1;
    this.chatCurrentId = 1;
  }

  async saveMessage(insertMessage: any): Promise<any> {
    const id = this.messageCurrentId++;
    const createdAt = new Date();
    const subject = insertMessage.subject || null;
    const message = { ...insertMessage, subject, id, createdAt };
    this.messages.set(id, message);
    return message;
  }

  async saveChatHistory(insertChat: any): Promise<any> {
    const id = this.chatCurrentId++;
    const createdAt = new Date();
    const chat = { ...insertChat, id, createdAt };
    this.chats.set(id, chat);
    return chat;
  }
}

export const storage = new MemStorage(); 