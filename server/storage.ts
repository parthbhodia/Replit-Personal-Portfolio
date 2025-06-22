import { 
  users, type User, type InsertUser, 
  messages, type Message, type InsertMessage,
  chatHistory, type ChatHistory, type InsertChatHistory
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  saveMessage(message: InsertMessage): Promise<Message>;
  saveChatHistory(chat: InsertChatHistory): Promise<ChatHistory>;
  getHeart(sessionId: string): Promise<Heart | undefined>;
  upsertHeart(heart: InsertHeart): Promise<Heart>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private messages: Map<number, Message>;
  private chats: Map<number, ChatHistory>;
  private hearts: Map<string, Heart>;
  private userCurrentId: number;
  private messageCurrentId: number;
  private chatCurrentId: number;
  private heartCurrentId: number;

  constructor() {
    this.users = new Map();
    this.messages = new Map();
    this.chats = new Map();
    this.hearts = new Map();
    this.userCurrentId = 1;
    this.messageCurrentId = 1;
    this.chatCurrentId = 1;
    this.heartCurrentId = 1;
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

  async getHeart(sessionId: string): Promise<Heart | undefined> {
    return this.hearts.get(sessionId);
  }

  async upsertHeart(insertHeart: InsertHeart): Promise<Heart> {
    const existing = this.hearts.get(insertHeart.sessionId);
    if (existing) {
      const updated: Heart = {
        ...existing,
        isLiked: insertHeart.isLiked,
        updatedAt: new Date(),
      };
      this.hearts.set(insertHeart.sessionId, updated);
      return updated;
    } else {
      const id = this.heartCurrentId++;
      const now = new Date();
      const heart: Heart = {
        ...insertHeart,
        id,
        createdAt: now,
        updatedAt: now,
      };
      this.hearts.set(insertHeart.sessionId, heart);
      return heart;
    }
  }
}

export const storage = new MemStorage();
