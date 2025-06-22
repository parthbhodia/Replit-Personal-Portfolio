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

export const blogStats = pgTable("blog_stats", {
  id: serial("id").primaryKey(),
  blogPostId: text("blog_post_id").notNull().unique(),
  hearts: integer("hearts").default(0).notNull(),
  views: integer("views").default(0).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const userInteractions = pgTable("user_interactions", {
  id: serial("id").primaryKey(),
  userFingerprint: text("user_fingerprint").notNull(),
  blogPostId: text("blog_post_id").notNull(),
  hasLiked: boolean("has_liked").default(false).notNull(),
  hasViewed: boolean("has_viewed").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const comments = pgTable("comments", {
  id: serial("id").primaryKey(),
  blogPostId: text("blog_post_id").notNull(),
  parentId: integer("parent_id"),
  authorName: text("author_name").notNull(),
  authorEmail: text("author_email").notNull(),
  content: text("content").notNull(),
  userFingerprint: text("user_fingerprint").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertBlogStatsSchema = createInsertSchema(blogStats).pick({
  blogPostId: true,
  hearts: true,
  views: true,
});

export const insertUserInteractionSchema = createInsertSchema(userInteractions).pick({
  userFingerprint: true,
  blogPostId: true,
  hasLiked: true,
  hasViewed: true,
});

export const insertCommentSchema = createInsertSchema(comments).pick({
  blogPostId: true,
  parentId: true,
  authorName: true,
  authorEmail: true,
  content: true,
  userFingerprint: true,
});

export type InsertChatHistory = z.infer<typeof insertChatHistorySchema>;
export type ChatHistory = typeof chatHistory.$inferSelect;
export type InsertBlogStats = z.infer<typeof insertBlogStatsSchema>;
export type BlogStats = typeof blogStats.$inferSelect;
export type InsertUserInteraction = z.infer<typeof insertUserInteractionSchema>;
export type UserInteraction = typeof userInteractions.$inferSelect;
export type InsertComment = z.infer<typeof insertCommentSchema>;
export type Comment = typeof comments.$inferSelect;
