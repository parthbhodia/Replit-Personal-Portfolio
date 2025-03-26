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
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private messages: Map<number, Message>;
  private chats: Map<number, ChatHistory>;
  private userCurrentId: number;
  private messageCurrentId: number;
  private chatCurrentId: number;

  constructor() {
    this.users = new Map();
    this.messages = new Map();
    this.chats = new Map();
    this.userCurrentId = 1;
    this.messageCurrentId = 1;
    this.chatCurrentId = 1;
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
}

export const storage = new MemStorage();
