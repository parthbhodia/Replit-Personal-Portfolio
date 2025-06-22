import { useState } from 'react';
import { Link } from 'wouter';
import { Calendar, Clock, ArrowRight, Home, User, Share2, MessageCircle } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';
import HeartButton from '../components/HeartButton';
import ViewCounter from '../components/ViewCounter';
import { Menu, X } from 'lucide-react';

interface BlogPost {
  id: string;
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
    id: 'aws-architecture-scalable-applications',
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
    id: 'generative-ai-modern-development',
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
    id: 'microservices-vs-macroservices',
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

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link href="/" className="flex items-center space-x-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300">
                  <Home className="h-5 w-5" />
                  <span>Home</span>
                </Link>
                <span className="text-gray-400">/</span>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300"
                >
                  Blog
                </button>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </nav>

        {/* Blog Post Content */}
        <article className="pt-20 pb-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <header className="mb-8">
              <button
                onClick={() => setSelectedPost(null)}
                className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 mb-6"
              >
                ← Back to Blog
              </button>
              
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium">
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
                  <button 
                    onClick={async () => {
                      try {
                        if (navigator.share) {
                          await navigator.share({
                            title: selectedPost.title,
                            text: selectedPost.excerpt,
                            url: window.location.href,
                          });
                        } else {
                          await navigator.clipboard.writeText(window.location.href);
                        }
                      } catch (error) {
                        // User canceled share or clipboard failed - silently ignore
                        if (error.name !== 'AbortError') {
                          console.log('Share failed, copying to clipboard as fallback');
                          try {
                            await navigator.clipboard.writeText(window.location.href);
                          } catch (clipboardError) {
                            // Fallback for browsers that don't support clipboard API
                            const textArea = document.createElement('textarea');
                            textArea.value = window.location.href;
                            document.body.appendChild(textArea);
                            textArea.select();
                            document.execCommand('copy');
                            document.body.removeChild(textArea);
                          }
                        }
                      }
                    }}
                    className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Share2 size={16} />
                    <span className="text-sm font-medium">Share</span>
                  </button>
                  
                  <button 
                    onClick={() => {
                      const subject = `Re: ${selectedPost.title}`;
                      const body = `I read your blog post "${selectedPost.title}" and wanted to share my thoughts...`;
                      window.location.href = `mailto:parthbhodia08@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                    }}
                    className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <MessageCircle size={16} />
                    <span className="text-sm font-medium">Comment</span>
                  </button>
                </div>
              </div>
              
              <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
                <p>Enjoyed this post? Share your thoughts or connect with me!</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 flex items-center justify-center text-sm text-white font-bold">
                  PB
                </div>
                <span className="text-xl font-semibold bg-gradient-to-r from-green-600 to-green-800 dark:from-green-400 dark:to-green-600 text-transparent bg-clip-text">
                  Parth Bhodia
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6">
                <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  Home
                </Link>
                <Link href="/skills" className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  Skills
                </Link>
                <span className="text-green-600 dark:text-green-400 font-medium">
                  Blog
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <ThemeToggle />
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  Home
                </Link>
                <Link href="/skills" className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  Skills
                </Link>
                <span className="text-green-600 dark:text-green-400 font-medium">
                  Blog
                </span>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Blog Header */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-600 to-green-800 dark:from-green-400 dark:to-green-600 text-transparent bg-clip-text">
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
                  className="h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center cursor-pointer"
                  onClick={() => setSelectedPost(post)}
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
                    <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  
                  <h2 
                    className="text-xl font-bold mb-3 text-gray-900 dark:text-white cursor-pointer hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    onClick={() => setSelectedPost(post)}
                  >
                    {post.title}
                  </h2>
                  
                  <p 
                    className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 cursor-pointer"
                    onClick={() => setSelectedPost(post)}
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
                    className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium"
                    onClick={() => setSelectedPost(post)}
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
    </div>
  );
}