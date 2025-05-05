// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
var MemStorage = class {
  users;
  messages;
  chats;
  userCurrentId;
  messageCurrentId;
  chatCurrentId;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.messages = /* @__PURE__ */ new Map();
    this.chats = /* @__PURE__ */ new Map();
    this.userCurrentId = 1;
    this.messageCurrentId = 1;
    this.chatCurrentId = 1;
  }
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = this.userCurrentId++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  async saveMessage(insertMessage) {
    const id = this.messageCurrentId++;
    const createdAt = /* @__PURE__ */ new Date();
    const subject = insertMessage.subject === void 0 ? null : insertMessage.subject;
    const message = { ...insertMessage, subject, id, createdAt };
    this.messages.set(id, message);
    return message;
  }
  async saveChatHistory(insertChat) {
    const id = this.chatCurrentId++;
    const createdAt = /* @__PURE__ */ new Date();
    const chat = { ...insertChat, id, createdAt };
    this.chats.set(id, chat);
    return chat;
  }
};
var storage = new MemStorage();

// shared/schema.ts
import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true
});
var messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow()
});
var insertMessageSchema = createInsertSchema(messages).pick({
  name: true,
  email: true,
  subject: true,
  message: true
});
var chatHistory = pgTable("chat_history", {
  id: serial("id").primaryKey(),
  message: text("message").notNull(),
  response: text("response").notNull(),
  createdAt: timestamp("created_at").defaultNow()
});
var insertChatHistorySchema = createInsertSchema(chatHistory).pick({
  message: true,
  response: true
});

// server/routes.ts
import { fromZodError } from "zod-validation-error";
async function registerRoutes(app2) {
  app2.post("/api/chat", async (req, res) => {
    try {
      const { message } = req.body;
      if (!message) {
        return res.status(400).json({ message: "Message is required" });
      }
      const botResponse = getBotResponse(message);
      try {
        const chatHistoryData = insertChatHistorySchema.parse({
          message,
          response: botResponse
        });
        await storage.saveChatHistory(chatHistoryData);
      } catch (err) {
        console.error("Failed to save chat history:", err);
      }
      return res.json({ response: botResponse });
    } catch (error) {
      console.error("Chat API error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertMessageSchema.safeParse(req.body);
      if (!validatedData.success) {
        const validationError = fromZodError(validatedData.error);
        return res.status(400).json({ message: validationError.message });
      }
      const messageData = validatedData.data;
      const savedMessage = await storage.saveMessage(messageData);
      return res.status(201).json({
        success: true,
        message: "Message sent successfully"
      });
    } catch (error) {
      console.error("Contact API error:", error);
      return res.status(500).json({ message: "Failed to send message" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}
function getBotResponse(message) {
  const lowerMsg = message.toLowerCase();
  if (lowerMsg.includes("hello") || lowerMsg.includes("hi") || lowerMsg.includes("hey")) {
    return "Hello! How can I help you today?";
  } else if (lowerMsg.includes("skill") || lowerMsg.includes("tech") || lowerMsg.includes("technology")) {
    return "Alex specializes in Vue.js, Node.js, JavaScript, HTML/CSS, and responsive design. He's also experienced with MongoDB, Express, and various frontend frameworks.";
  } else if (lowerMsg.includes("project")) {
    return "Alex has worked on various projects including e-commerce platforms, task management apps, marketing dashboards, and content management systems. You can see them in the Projects section.";
  } else if (lowerMsg.includes("contact") || lowerMsg.includes("hire") || lowerMsg.includes("available")) {
    return "You can contact Alex through the contact form on this page, or directly via email at hello@alexchen.dev. He's currently available for freelance projects and collaboration opportunities.";
  } else if (lowerMsg.includes("experience") || lowerMsg.includes("work")) {
    return "Alex has over 5 years of experience in web development, working with startups and established companies across various industries including e-commerce, finance, and education.";
  } else if (lowerMsg.includes("education") || lowerMsg.includes("degree") || lowerMsg.includes("study")) {
    return "Alex holds a Bachelor's degree in Computer Science and continues to expand his knowledge through online courses and professional development.";
  } else if (lowerMsg.includes("location") || lowerMsg.includes("based") || lowerMsg.includes("from")) {
    return "Alex is based in San Francisco, California, but works remotely with clients worldwide.";
  } else if (lowerMsg.includes("frontend") || lowerMsg.includes("front-end") || lowerMsg.includes("front end")) {
    return "For frontend development, Alex is proficient in Vue.js, React, HTML5, CSS3, JavaScript/TypeScript, and various UI frameworks.";
  } else if (lowerMsg.includes("backend") || lowerMsg.includes("back-end") || lowerMsg.includes("back end")) {
    return "Alex's backend skills include Node.js, Express, MongoDB, PostgreSQL, RESTful APIs, and GraphQL.";
  } else if (lowerMsg.includes("design") || lowerMsg.includes("ui") || lowerMsg.includes("ux")) {
    return "Alex has a good eye for design and UX with skills in Figma, responsive design principles, and creating user-friendly interfaces.";
  } else if (lowerMsg.includes("thank") || lowerMsg.includes("thanks")) {
    return "You're welcome! Feel free to ask if you have any other questions.";
  } else if (lowerMsg.includes("bye") || lowerMsg.includes("goodbye")) {
    return "Goodbye! Feel free to chat again if you have more questions.";
  } else {
    return "I'm not sure I understand. Could you ask about Alex's skills, projects, experience, or how to contact him?";
  }
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2, { dirname as dirname2 } from "path";
import { fileURLToPath as fileURLToPath2 } from "url";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path, { dirname } from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = dirname(__filename);
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    themePlugin(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets")
    }
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var __filename2 = fileURLToPath2(import.meta.url);
var __dirname2 = dirname2(__filename2);
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        __dirname2,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(__dirname2, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
