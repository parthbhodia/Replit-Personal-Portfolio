import { 
  users, type User, type InsertUser, 
  messages, type Message, type InsertMessage,
  chatHistory, type ChatHistory, type InsertChatHistory,
  hearts, type Heart, type InsertHeart,
  views, type View, type InsertView
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  saveMessage(message: InsertMessage): Promise<Message>;
  saveChatHistory(chat: InsertChatHistory): Promise<ChatHistory>;
  getHeart(sessionId: string, blogPostId: string): Promise<Heart | undefined>;
  upsertHeart(heart: InsertHeart): Promise<Heart>;
  addView(view: InsertView): Promise<View>;
  getViewCount(page: string): Promise<number>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private messages: Map<number, Message>;
  private chats: Map<number, ChatHistory>;
  private hearts: Map<string, Heart>;
  private views: Map<number, View>;
  private userCurrentId: number;
  private messageCurrentId: number;
  private chatCurrentId: number;
  private heartCurrentId: number;
  private viewCurrentId: number;

  constructor() {
    this.users = new Map();
    this.messages = new Map();
    this.chats = new Map();
    this.hearts = new Map();
    this.views = new Map();
    this.userCurrentId = 1;
    this.messageCurrentId = 1;
    this.chatCurrentId = 1;
    this.heartCurrentId = 1;
    this.viewCurrentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async saveMessage(insertMessage: InsertMessage): Promise<Message> {
    const id = this.messageCurrentId++;
    const createdAt = new Date();
    // Ensure subject is not undefined (null is acceptable)
    const subject = insertMessage.subject === undefined ? null : insertMessage.subject;
    const message: Message = { ...insertMessage, subject, id, createdAt };
    this.messages.set(id, message);
    return message;
  }

  async saveChatHistory(insertChat: InsertChatHistory): Promise<ChatHistory> {
    const id = this.chatCurrentId++;
    const createdAt = new Date();
    const chat: ChatHistory = { ...insertChat, id, createdAt };
    this.chats.set(id, chat);
    return chat;
  }

  async getHeart(sessionId: string, blogPostId: string): Promise<Heart | undefined> {
    const key = `${sessionId}-${blogPostId}`;
    return this.hearts.get(key);
  }

  async upsertHeart(insertHeart: InsertHeart): Promise<Heart> {
    const key = `${insertHeart.sessionId}-${insertHeart.blogPostId}`;
    const existing = this.hearts.get(key);
    if (existing) {
      const updated: Heart = {
        ...existing,
        isLiked: insertHeart.isLiked ?? false,
        updatedAt: new Date(),
      };
      this.hearts.set(key, updated);
      return updated;
    } else {
      const id = this.heartCurrentId++;
      const now = new Date();
      const heart: Heart = {
        id,
        sessionId: insertHeart.sessionId,
        blogPostId: insertHeart.blogPostId,
        isLiked: insertHeart.isLiked ?? false,
        createdAt: now,
        updatedAt: now,
      };
      this.hearts.set(key, heart);
      return heart;
    }
  }

  async addView(insertView: InsertView): Promise<View> {
    const id = this.viewCurrentId++;
    const view: View = {
      id,
      sessionId: insertView.sessionId,
      page: insertView.page,
      createdAt: new Date(),
    };
    this.views.set(id, view);
    return view;
  }

  async getViewCount(page: string): Promise<number> {
    let count = 0;
    for (const view of this.views.values()) {
      if (view.page === page) {
        count++;
      }
    }
    return count;
  }
}

export const storage = new MemStorage();
