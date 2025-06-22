import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow()
});

export const insertMessageSchema = createInsertSchema(messages).pick({
  name: true,
  email: true,
  subject: true,
  message: true,
});

export const chatHistory = pgTable("chat_history", {
  id: serial("id").primaryKey(),
  message: text("message").notNull(),
  response: text("response").notNull(),
  createdAt: timestamp("created_at").defaultNow()
});

export const insertChatHistorySchema = createInsertSchema(chatHistory).pick({
  message: true,
  response: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertMessage = z.infer<typeof insertMessageSchema>;
export type Message = typeof messages.$inferSelect;

export const hearts = pgTable("hearts", {
  id: serial("id").primaryKey(),
  sessionId: text("session_id").notNull(),
  blogPostId: text("blog_post_id").notNull(),
  isLiked: boolean("is_liked").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertHeartSchema = createInsertSchema(hearts).pick({
  sessionId: true,
  blogPostId: true,
  isLiked: true,
});

export const views = pgTable("views", {
  id: serial("id").primaryKey(),
  sessionId: text("session_id").notNull(),
  page: text("page").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertViewSchema = createInsertSchema(views).pick({
  sessionId: true,
  page: true,
});

export type InsertChatHistory = z.infer<typeof insertChatHistorySchema>;
export type ChatHistory = typeof chatHistory.$inferSelect;
export type InsertHeart = z.infer<typeof insertHeartSchema>;
export type Heart = typeof hearts.$inferSelect;
export type InsertView = z.infer<typeof insertViewSchema>;
export type View = typeof views.$inferSelect;
