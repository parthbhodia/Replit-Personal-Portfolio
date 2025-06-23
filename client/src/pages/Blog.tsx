import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Calendar, Clock, ArrowRight, Home, User, Share2, MessageCircle } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';
import HeartButton from '../components/HeartButton';
import ViewCounter from '../components/ViewCounter';
import CommentSection from '../components/CommentSection';
import ShareButton from '../components/ShareButton';
import { useSEO } from '../hooks/useSEO';
import { Menu, X } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import type { ChatMessage } from '../types';

interface BlogPost {
  id: string; // UUID
  slug: string; // URL-friendly slug
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: '550e8400-e29b-41d4-a716-446655440001',
    slug: 'aws-architecture-scalable-applications',
    title: 'Building Scalable Applications with AWS Architecture',
    excerpt: 'Explore how to design and implement robust, scalable applications using AWS services including Lambda, API Gateway, RDS, and S3.',
    content: `
# Building Scalable Applications with AWS Architecture

## Introduction

In today's rapidly evolving digital landscape, building scalable applications is crucial for business success. Amazon Web Services (AWS) provides a comprehensive suite of tools and services that enable developers to create robust, scalable applications with ease.

## Core AWS Services for Scalability

### 1. AWS Lambda - Serverless Computing
AWS Lambda allows you to run code without provisioning or managing servers. This serverless approach automatically scales your application based on demand.

**Benefits:**
- Automatic scaling
- Pay-per-use pricing model
- Zero server management
- Built-in fault tolerance

### 2. Amazon API Gateway
API Gateway acts as a front door for applications to access data, business logic, or functionality from backend services.

**Key Features:**
- Traffic management
- Authorization and access control
- Monitoring and analytics
- Request/response transformation

### 3. Amazon RDS - Managed Database Service
RDS simplifies database administration tasks while providing high availability and security.

**Advantages:**
- Automated backups
- Multi-AZ deployments
- Read replicas for scaling
- Automated patching

### 4. Amazon S3 - Object Storage
S3 provides secure, durable, and highly scalable object storage for any amount of data.

## Architecture Diagram

\`\`\`
[Client] → [CloudFront] → [API Gateway] → [Lambda] → [RDS/DynamoDB]
                                      ↓
                                    [S3]
\`\`\`

## Best Practices

1. **Use Auto Scaling Groups** for EC2 instances
2. **Implement caching** with ElastiCache
3. **Monitor with CloudWatch** for performance insights
4. **Use IAM roles** for secure access management
5. **Design for failure** with multiple availability zones

## Implementation Example

Here's a basic serverless architecture setup:

\`\`\`javascript
// Lambda function example
exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
            message: 'Hello from Lambda!',
            data: processRequest(event)
        }),
    };
    return response;
};
\`\`\`

## Conclusion

AWS provides the tools necessary to build applications that can handle millions of users while maintaining high performance and availability. The key is to leverage managed services, implement proper monitoring, and design with scalability in mind from the beginning.
    `,
    date: '2025-01-15',
    readTime: '8 min read',
    category: 'Cloud Architecture',
    image: '/blog-aws.jpg',
    tags: ['AWS', 'Serverless', 'Scalability', 'Lambda', 'API Gateway']
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440002',
    slug: 'generative-ai-modern-development',
    title: 'Integrating Generative AI into Modern Development Workflows',
    excerpt: 'Learn how to leverage AI tools like GPT, Copilot, and Claude to enhance productivity and code quality in software development.',
    content: `
# Integrating Generative AI into Modern Development Workflows

## The AI Revolution in Software Development

Generative AI has transformed how we approach software development, offering unprecedented assistance in coding, debugging, and architectural decisions.

## Key AI Tools for Developers

### 1. GitHub Copilot
An AI pair programmer that suggests code completions and entire functions.

**Use Cases:**
- Code completion and suggestions
- Function generation from comments
- Test case creation
- Documentation writing

### 2. ChatGPT/Claude for Development
Large language models excel at explaining complex concepts and solving programming challenges.

**Applications:**
- Code review and optimization
- Architecture planning
- Bug fixing assistance
- Learning new technologies

### 3. AI-Powered Code Analysis
Tools like DeepCode and CodeGuru provide intelligent code analysis.

## AI Integration Architecture

\`\`\`
[Developer] → [AI Assistant] → [IDE] → [Version Control]
                     ↓
              [Code Analysis] → [Automated Testing]
                     ↓
              [Deployment Pipeline]
\`\`\`

## Best Practices for AI-Assisted Development

### 1. Code Quality Assurance
- Always review AI-generated code
- Implement comprehensive testing
- Use static analysis tools
- Maintain coding standards

### 2. Security Considerations
- Validate AI suggestions for security vulnerabilities
- Avoid exposing sensitive data to AI models
- Implement proper access controls
- Regular security audits

### 3. Productivity Enhancement
- Use AI for boilerplate code generation
- Leverage AI for documentation
- Automate repetitive tasks
- Focus on complex problem-solving

## Implementation Example

\`\`\`python
# AI-assisted API development
from openai import OpenAI
import asyncio

class AICodeAssistant:
    def __init__(self, api_key):
        self.client = OpenAI(api_key=api_key)

    async def generate_function(self, description):
        response = await self.client.chat.completions.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "You are a senior software engineer."},
                {"role": "user", "content": f"Generate a Python function that {description}"}
            ]
        )
        return response.choices[0].message.content

# Usage example
assistant = AICodeAssistant("your-api-key")
code = await assistant.generate_function("validates email addresses using regex")
\`\`\`

## Future Outlook

The integration of AI in development workflows will continue to evolve, with emerging trends including:

- Automated code refactoring
- Intelligent bug prediction
- AI-driven architectural decisions
- Natural language to code translation

## Conclusion

Generative AI is not replacing developers but augmenting their capabilities. The key is to use these tools strategically while maintaining code quality, security, and human oversight in the development process.
    `,
    date: '2025-01-12',
    readTime: '10 min read',
    category: 'Artificial Intelligence',
    image: '/blog-ai.jpg',
    tags: ['AI', 'GPT', 'Machine Learning', 'Development', 'Productivity']
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440003',
    slug: 'microservices-vs-macroservices',
    title: 'Microservices vs Macroservices: Choosing the Right Architecture',
    excerpt: 'A comprehensive comparison of microservices and macroservices architectures, including when to use each approach and implementation strategies.',
    content: `
# Microservices vs Macroservices: Choosing the Right Architecture

## Introduction

The debate between microservices and macroservices (also known as modular monoliths) continues to shape modern software architecture decisions. Understanding when to use each approach is crucial for building successful applications.

## Understanding the Architectures

### Microservices Architecture
A collection of loosely coupled, independently deployable services that communicate over well-defined APIs.

**Characteristics:**
- Single responsibility per service
- Independent deployment
- Technology diversity
- Distributed data management

### Macroservices/Modular Monolith
A single deployable unit with well-defined internal module boundaries and clear separation of concerns.

**Characteristics:**
- Modular internal structure
- Single deployment unit
- Shared database
- In-process communication

## Architecture Comparison

### Microservices Architecture Diagram
\`\`\`
[API Gateway] → [Auth Service] → [Database A]
              → [User Service] → [Database B]
              → [Order Service] → [Database C]
              → [Payment Service] → [Database D]
\`\`\`

### Macroservices Architecture Diagram
\`\`\`
[API Layer]
     ↓
[Business Logic Layer]
├── Auth Module
├── User Module
├── Order Module
└── Payment Module
     ↓
[Shared Database]
\`\`\`

## Detailed Comparison

| Aspect | Microservices | Macroservices |
|--------|---------------|---------------|
| **Complexity** | High operational complexity | Lower operational complexity |
| **Scalability** | Independent scaling per service | Scale entire application |
| **Development Speed** | Slower initial setup, faster feature development | Faster initial setup |
| **Team Structure** | Requires multiple specialized teams | Can work with smaller teams |
| **Technology Stack** | Multiple technologies possible | Single technology stack |
| **Data Consistency** | Eventual consistency | Strong consistency |
| **Testing** | Complex integration testing | Simpler testing strategy |
| **Monitoring** | Distributed tracing required | Centralized monitoring |

## When to Choose Microservices

### Ideal Scenarios:
1. **Large, complex applications** with distinct business domains
2. **Multiple development teams** working independently
3. **Different scalability requirements** for different components
4. **Technology diversity** needs across services
5. **High availability requirements** with fault isolation

### Example Use Case:
E-commerce platform with separate teams for user management, inventory, orders, payments, and recommendations.

\`\`\`javascript
// Microservice example - Order Service
class OrderService {
    async createOrder(orderData) {
        // Validate order
        const validation = await this.userService.validateUser(orderData.userId);

        // Check inventory
        const inventory = await this.inventoryService.checkAvailability(orderData.items);

        // Process payment
        const payment = await this.paymentService.processPayment(orderData.payment);

        // Create order
        return await this.orderRepository.create({
            ...orderData,
            status: 'confirmed'
        });
    }
}
\`\`\`

## When to Choose Macroservices

### Ideal Scenarios:
1. **Small to medium applications** with clear module boundaries
2. **Limited development team** size
3. **Simple deployment requirements**
4. **Strong consistency needs**
5. **Rapid prototyping and development**

### Example Use Case:
Content management system with modules for authentication, content creation, user management, and analytics.

\`\`\`javascript
// Macroservice example - Modular structure
class ApplicationService {
    constructor() {
        this.authModule = new AuthModule();
        this.userModule = new UserModule();
        this.contentModule = new ContentModule();
        this.analyticsModule = new AnalyticsModule();
    }

    async createContent(userId, contentData) {
        // All modules can share the same database transaction
        const transaction = await this.database.beginTransaction();

        try {
            const user = await this.userModule.getUser(userId, transaction);
            const content = await this.contentModule.create(contentData, transaction);
            await this.analyticsModule.trackContentCreation(userId, content.id, transaction);

            await transaction.commit();
            return content;
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    }
}
\`\`\`

## Migration Strategies

### From Monolith to Microservices
1. **Identify service boundaries** using Domain-Driven Design
2. **Extract services incrementally** (Strangler Fig pattern)
3. **Implement API contracts** between services
4. **Set up monitoring and logging**
5. **Establish CI/CD pipelines** for each service

### From Microservices to Macroservices
1. **Identify tightly coupled services**
2. **Merge related services** into modules
3. **Consolidate databases** where appropriate
4. **Simplify communication patterns**
5. **Reduce operational overhead**

## Best Practices

### For Microservices:
- Implement proper service discovery
- Use circuit breakers for resilience
- Establish comprehensive monitoring
- Design for failure scenarios
- Maintain service contracts

### For Macroservices:
- Maintain clear module boundaries
- Implement proper dependency injection
- Use feature flags for gradual rollouts
- Establish module interfaces
- Keep modules loosely coupled

## Conclusion

The choice between microservices and macroservices depends on your specific context, team size, application complexity, and organizational needs. Start with a macroservice approach for simplicity, and consider migrating to microservices when complexity and scale justify the additional operational overhead.

Remember: Architecture should serve your business goals, not the other way around.
    `,
    date: '2025-01-10',
    readTime: '12 min read',
    category: 'Software Architecture',
    image: '/blog-architecture.jpg',
    tags: ['Microservices', 'Architecture', 'Monolith', 'Design Patterns', 'Scalability']
  }
];

interface BlogProps {
  slug?: string; // Actually receives the UUID from router params
}

export default function Blog({ slug }: BlogProps = {}) {
  // SEO optimization for blog pages
  useSEO({
    title: slug 
      ? 'Blog Post - Parth Bhodia | Software Development Insights'
      : 'Blog - Parth Bhodia | Software Development & Tech Insights',
    description: slug
      ? 'Read the latest software development insights and technical articles by Parth Bhodia, Full Stack Developer.'
      : 'Explore technical articles, tutorials, and insights on software development, Vue.js, React, Node.js, Python, AWS, and more by Parth Bhodia.',
    keywords: 'Parth Bhodia Blog, Software Development Blog, Tech Articles, Vue.js Tutorial, React Tips, Node.js Guide, Python Programming, AWS Tutorial, Web Development Blog',
    url: slug ? `https://parthbhodia.com/blog/${slug}` : 'https://parthbhodia.com/blog',
    type: slug ? 'article' : 'website'
  });
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [userFingerprint, setUserFingerprint] = useState<string>('');
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { text: "Hi! I'm Parth's AI assistant. Feel free to ask about any of his blog posts or technical expertise!", isUser: false, timestamp: new Date() }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const toggleChatbot = () => setChatbotOpen(!chatbotOpen);

  // Fetch blog posts from Supabase
  const { data: blogPosts = [], isLoading } = useQuery({
    queryKey: ['/api/blog/posts'],
    select: (data) => data.map((post: any) => ({
      id: post.id,
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      date: post.date,
      readTime: post.read_time,
      category: post.category,
      image: post.image,
      tags: post.tags
    }))
  });

  // Use UUID from props or URL
  const currentId = slug || (() => {
    const currentPath = window.location.pathname;
    const idMatch = currentPath.match(/\/blog\/([^\/]+)/);
    return idMatch ? idMatch[1] : null;
  })();

  // Generate user fingerprint and handle URL routing
  useEffect(() => {
    const generateFingerprint = () => {
      const fingerprint = `fp-${Math.random().toString(36).substr(2, 9)}-${Date.now()}`;
      return fingerprint;
    };

    let fp = localStorage.getItem('userFingerprint');
    if (!fp) {
      fp = generateFingerprint();
      localStorage.setItem('userFingerprint', fp);
    }
    setUserFingerprint(fp);

    // Handle URL routing for direct blog post access
    if (currentId && !selectedPost) {
      const post = blogPosts.find(p => p.id === currentId);
      if (post) {
        setSelectedPost(post);
      }
    }
  }, [currentId, selectedPost, blogPosts]);

  // Show loading state while fetching blog posts
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Navigation */}
        <nav className="bg-white/90 dark:bg-black/90 backdrop-blur-sm sticky top-0 z-50 shadow-md">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="text-xl font-bold bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600 text-transparent bg-clip-text">
                Parth Bhodia
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6">
                <a href="/#companies" className="font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Companies</a>
                <a href="/#about" className="font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors">About</a>
                <Link href="/skills" className="font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Skills</Link>
                <a href="/#projects" className="font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Projects</a>
                <span className="font-medium text-purple-600 dark:text-purple-400">Blog</span>
                <a href="/#contact" className="font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Contact</a>
                <ThemeToggle />
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center space-x-4">
                <ThemeToggle />
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation Drawer */}
            {isMobileMenuOpen && (
              <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-col space-y-4 pt-4">
                  <a 
                    href="/#companies" 
                    className="font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Companies
                  </a>
                  <a 
                    href="/#about" 
                    className="font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </a>
                  <Link 
                    href="/skills" 
                    className="font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Skills
                  </Link>
                  <a 
                    href="/#projects" 
                    className="font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Projects
                  </a>
                  <a 
                    href="/#contact" 
                    className="font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </a>
                  <span className="font-medium text-purple-600 dark:text-purple-400">
                    Blog
                  </span>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Blog Post Content */}
        <article className="pt-8 pb-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <header className="mb-8">
              <Link
                href="/blog"
                className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-6"
              >
                ← Back to Blog
              </Link>

              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
                  {selectedPost.category}
                </span>
              </div>

              <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                {selectedPost.title}
              </h1>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(selectedPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{selectedPost.readTime}</span>
                  </div>
                  <ViewCounter blogPostId={selectedPost.id} />
                </div>
                <HeartButton blogPostId={selectedPost.id} size={24} />
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {selectedPost.tags.map((tag, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            </header>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: selectedPost.content.replace(/\n/g, '<br />').replace(/```([^`]+)```/g, '<pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto"><code>$1</code></pre>').replace(/`([^`]+)`/g, '<code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">$1</code>') }} />
            </div>

            {/* Social engagement section */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center space-x-6">
                  <HeartButton 
                    blogPostId={selectedPost.id} 
                    className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    size={20}
                  />
                  <ViewCounter 
                    blogPostId={selectedPost.id} 
                    className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800"
                    size={16}
                  />
                </div>

                <div className="flex items-center space-x-4">
                  <ShareButton 
                    title={selectedPost.title}
                    excerpt={selectedPost.excerpt}
                    url={window.location.href}
                    className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  />
                </div>
              </div>

              <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
                <p>Enjoyed this post? Share your thoughts or connect with me!</p>
              </div>
            </div>

            {/* Comments Section */}
            {userFingerprint && (
              <CommentSection 
                blogPostId={selectedPost.id} 
                userFingerprint={userFingerprint}
              />
            )}
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation */}
      <nav className="bg-white/90 dark:bg-black/90 backdrop-blur-sm sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600 text-transparent bg-clip-text">
              Parth Bhodia
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#companies" className="font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Companies</a>
              <a href="#about" className="font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors">About</a>
              <Link href="/skills" className="font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Skills</Link>
              <a href="#projects" className="font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Projects</a>
              <span className="font-medium text-purple-600 dark:text-purple-400">Blog</span>
              <a href="#contact" className="font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Contact</a>
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Drawer */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col space-y-4 pt-4">
                <a 
                  href="#companies" 
                  className="font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Companies
                </a>
                <a 
                  href="#about" 
                  className="font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
                <Link 
                  href="/skills" 
                  className="font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Skills
                </Link>
                <a 
                  href="#projects" 
                  className="font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Projects
                </a>
                <a 
                  href="#contact" 
                  className="font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <span className="font-medium text-purple-600 dark:text-purple-400">
                  Blog
                </span>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Blog Header */}
      <section className="pt-16 pb-12 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-600 text-transparent bg-clip-text">
              Tech Blog
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Insights on cloud architecture, AI integration, and modern software development practices
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div 
                  className="h-48 bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center cursor-pointer"
                  onClick={() => {
                    setSelectedPost(post);
                    window.history.pushState({}, '', `/blog/${post.id}`);
                  }}
                >
                  <div className="text-white text-center p-4">
                    <div className="text-6xl mb-2">
                      {post.category === 'Cloud Architecture' && '☁️'}
                      {post.category === 'Artificial Intelligence' && '🤖'}
                      {post.category === 'Software Architecture' && '🏗️'}
                    </div>
                    <p className="text-sm opacity-90">{post.category}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>

                  <h2 
                    className="text-xl font-bold mb-3 text-gray-900 dark:text-white cursor-pointer hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    onClick={() => {
                      setSelectedPost(post);
                      window.history.pushState({}, '', `/blog/${post.id}`);
                    }}
                  >
                    {post.title}
                  </h2>

                  <p 
                    className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 cursor-pointer"
                    onClick={() => {
                      setSelectedPost(post);
                      window.history.pushState({}, '', `/blog/${post.id}`);
                    }}
                  >
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <ViewCounter blogPostId={post.id} />
                      <div onClick={(e) => e.stopPropagation()}>
                        <HeartButton blogPostId={post.id} size={20} />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button 
                    className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium"
                    onClick={() => {
                      setSelectedPost(post);
                      window.history.pushState({}, '', `/blog/${post.id}`);
                    }}
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* About Section */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600 text-transparent bg-clip-text">
                Parth Bhodia
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Full Stack Software Developer specializing in cloud architecture, AI integration, and modern web technologies. 
                Passionate about building scalable solutions that make a difference.
              </p>
              <div className="flex space-x-4">
                <a href="https://linkedin.com/in/parthbhodia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors">
                  <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                  </svg>
                </a>
                <a href="https://github.com/parthbhodia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors">
                  <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center">
                    <span className="mr-2">→</span> Home
                  </a>
                </li>
                <li>
                  <a href="/#about" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center">
                    <span className="mr-2">→</span> About Me
                  </a>
                </li>
                <li>
                  <a href="/skills" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center">
                    <span className="mr-2">→</span> Skills
                  </a>
                </li>
                <li>
                  <a href="/#projects" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center">
                    <span className="mr-2">→</span> Portfolio Projects
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center">
                    <span className="mr-2">→</span> Tech Blog
                  </a>
                </li>
                <li>
                  <a href="/#contact" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center">
                    <span className="mr-2">→</span> Get In Touch
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Stay Updated</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Get notified about new blog posts and projects.
              </p>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-l-md focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800/30 bg-white/80 backdrop-blur-sm"
                />
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white rounded-r-md hover:from-purple-600 hover:to-purple-700 dark:hover:from-purple-500 dark:hover:to-purple-600 transition-all"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 dark:border-gray-800 my-8"></div>

          {/* Copyright & Credits */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-2 mb-2">
              <span>Made with ❤️ by Parth Bhodia</span>
            </div>
            <p>© {new Date().getFullYear()} Parth Bhodia. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <a href="mailto:parthbhodia08@gmail.com" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Contact</a>
              <span className="text-gray-300 dark:text-gray-700">•</span>
              <a href="https://linkedin.com/in/parthbhodia" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Chat Bot Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button 
          onClick={toggleChatbot}
          className="w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white rounded-full shadow-lg flex items-center justify-center hover:from-purple-600 hover:to-purple-700 dark:hover:from-purple-500 dark:hover:to-purple-600 transition-all transform hover:scale-110"
        >
          <span className="text-xl">{!chatbotOpen ? '💬' : '✕'}</span>
        </button>
      </div>

      {/* Chatbot Modal */}
      {chatbotOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 flex flex-col z-50">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white">Chat with Parth's AI Assistant</h3>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {chatMessages.map((message, index) => (
              <div key={index} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs px-3 py-2 rounded-lg ${
                  message.isUser 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                }`}>
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <form onSubmit={(e) => {
              e.preventDefault();
              if (chatInput.trim()) {
                const userMessage: ChatMessage = {
                  text: chatInput,
                  isUser: true,
                  timestamp: new Date()
                };
                setChatMessages(prev => [...prev, userMessage]);
                setChatInput('');
                setIsTyping(true);

                // Simulate AI response
                setTimeout(() => {
                  setIsTyping(false);
                  const responses = [
                    "Parth writes about cloud architecture, AI integration, and modern development practices. Which topic interests you most?",
                    "His latest posts cover AWS scalability, Vue.js best practices, and Python automation. Would you like me to explain any of these?",
                    "Parth has experience with microservices, serverless architecture, and full-stack development. What would you like to know?",
                    "Feel free to ask about any specific blog post or technical topic you'd like to learn more about!",
                    "Parth's expertise spans React, Vue.js, Node.js, Python, and cloud technologies. How can I help you explore these topics?"
                  ];
                  const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                  setChatMessages(prev => [...prev, {
                    text: randomResponse,
                    isUser: false,
                    timestamp: new Date()
                  }]);
                }, 1000);
              }
            }} className="flex">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask about the blog posts..."
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-l-md focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white text-sm"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-r-md transition-colors"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}