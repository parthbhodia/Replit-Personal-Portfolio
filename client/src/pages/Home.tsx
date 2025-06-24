import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "../components/ui/dialog";

import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'wouter';
import { format } from 'date-fns';
import { ChatMessage, FormData } from '../types';
import ThreeBackground from '../components/ThreeBackground';
import ThemeToggle from '../components/ThemeToggle';
import Navigation from '../components/Navigation';
import ParallaxSection from '../components/ParallaxSection';
import ParallaxHeader from '../components/ParallaxHeader';
import AnimatedProjectCard from '../components/AnimatedProjectCard';
import TypewriterText from '../components/TypewriterText';
import ScrollProgress from '../components/ScrollProgress';
import ViewCounter from '../components/ViewCounter';
import { useSEO } from '../hooks/useSEO';
import { Menu, X } from 'lucide-react';
import Layout from '../components/Layout';

export default function Home() {
  // SEO optimization for home page
  useSEO({
    title: 'Parth Bhodia - Full Stack Software Developer | Vue.js React Node.js Python AWS Expert',
    description: 'Parth Bhodia is a skilled Full Stack Software Developer specializing in Vue.js, React, Node.js, Python, and AWS. UMBC graduate with expertise in AI/ML, microservices, and scalable web applications.',
    keywords: 'Parth Bhodia, Software Developer, Full Stack Developer, Vue.js, React, Node.js, Python, AWS, Machine Learning, AI, UMBC, Jersey City, Web Development, Microservices, Software Engineer, Frontend Developer, Backend Developer',
    url: 'https://parthbhodia.com'
  });

  // Projects data based on resume
  const projects = [
    {
      title: 'Personalized Knowledge Assistant ChatBOT',
      description: 'ChatBOT using GPT and Pinecone vector databases to predict vendor success rates based on historical data. Reduced time-to-information retrieval by 50%.',
      tags: ['GPT', 'Pinecone', 'Machine Learning', 'Vector DB'],
      category: 'AI/ML',
      liveUrl: '#',
      codeUrl: '#',
      featured: true
    },
    {
      title: 'CMS Management System',
      description: 'Postgres schema design and implementation for CMS managing 100,000+ users with efficient data display and management.',
      tags: ['PostgreSQL', 'Node.js', 'Database Design'],
      category: 'Backend',
      liveUrl: '#',
      codeUrl: '#',
      featured: true
    },
    {
      title: 'AWS Authentication System',
      description: 'Secure Login and Registration system with JWT authentication using AWS Amplify, Cognito, API Gateway, and Lambda Services.',
      tags: ['AWS', 'JWT', 'Cognito', 'Lambda', 'API Gateway'],
      category: 'Cloud/Security',
      liveUrl: '#',
      codeUrl: '#',
      featured: true
    },
    {
      title: 'Dynamic AWS Lambda Functions',
      description: 'HTML content generation with Open Graph metadata for enhanced social media sharing and SEO for sports news platform.',
      tags: ['AWS Lambda', 'SEO', 'Open Graph', 'HTML'],
      category: 'Cloud',
      liveUrl: '#',
      codeUrl: '#',
      featured: true
    },
    {
      title: 'NLSE Sports Website with Stripe',
      description: 'Sports entertainment website with integrated Stripe payment processing for ticket sales and event bookings.',
      tags: ['Stripe', 'Payment Processing', 'Vue.js', 'Node.js'],
      category: 'E-commerce',
      liveUrl: '#',
      codeUrl: '#',
      featured: true
    },
    {
      title: 'Project Spectrum (Government Website)',
      description: 'Frontend solutions using HTMX and Vue.js for seamless dynamic interactions without full page reloads.',
      tags: ['HTMX', 'Vue.js', 'Government', 'SPA'],
      category: 'Government',
      liveUrl: '#',
      codeUrl: '#',
      featured: true
    },
    {
      title: 'GIS Enemy Detection Framework',
      description: 'GIS-based visualization framework for detecting enemy objects using Elastic Search and Kibana with real-time data processing.',
      tags: ['Elastic Search', 'Kibana', 'GIS', 'Java Spring Boot', 'RabbitMQ'],
      category: 'Research',
      liveUrl: '#',
      codeUrl: '#',
      featured: true
    },
    {
      title: 'IPT Tool Dashboard',
      description: 'Internal dashboard for 10,000+ users to monitor login activity, app usage, and security metrics with automated testing.',
      tags: ['Django', 'Python', 'React', 'Dashboard', 'Analytics'],
      category: 'Enterprise',
      liveUrl: '#',
      codeUrl: '#',
      featured: true
    },
    {
      title: 'Back-Bone Cost Map Automation',
      description: 'Automation application using Python3 and Leaflet Open Maps for sales team route optimization, increasing APAC revenue by 36%.',
      tags: ['Python3', 'Leaflet', 'Maps', 'Automation', 'Sales'],
      category: 'Enterprise',
      liveUrl: '#',
      codeUrl: '#',
      featured: true
    },
    {
      title: 'Nutri AI Scan',
      description: 'Award-winning progressive web app (2nd place CBIC Entrepreneurship UMBC) using OCR to identify allergens and provide healthiness ratings.',
      tags: ['Vue.js', 'OCR', 'REST API', 'MongoDB', 'PWA'],
      category: 'AI/ML',
      liveUrl: '#',
      codeUrl: '#',
      featured: true
    }
  ];

  // Project categories
  const categories = ['All', 'AI/ML', 'Backend', 'Cloud/Security', 'Cloud', 'E-commerce', 'Government', 'Research', 'Enterprise'];

  // Selected category state
  const [selectedCategory, setSelectedCategory] = useState('AI/ML');
  
  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Contact form state
  const [contactForm, setContactForm] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  // Chatbot state
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      text: "Hello! I'm here to help you learn about Parth Bhodia. Ask me about his skills, experience, projects, education, or visa status!",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [chatInput, setChatInput] = useState('');
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Form input handler
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  // Contact form submission - Always use Gmail direct link for GitHub Pages
  const submitContactForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setFormMessage('');

    // Direct Gmail mailto link that opens Gmail app/web with pre-filled fields
    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=parthbhodia08@gmail.com&su=${encodeURIComponent(contactForm.subject)}&body=${encodeURIComponent(`Name: ${contactForm.name}\nEmail: ${contactForm.email}\n\nMessage:\n${contactForm.message}`)}`;
    window.open(gmailUrl, '_blank');
    
    setFormSuccess(true);
    setFormMessage('Opening Gmail to send your message. Please complete sending from Gmail.');
    
    // Reset form
    setContactForm({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    setSubmitting(false);
  };

  // Toggle chatbot visibility
  const toggleChatbot = () => {
    setChatbotOpen(prev => !prev);
  };

  // Scroll chat to bottom when new messages are added
  useEffect(() => {
    if (chatbotOpen && chatContainerRef.current) {
      scrollChatToBottom();
    }
  }, [chatMessages, chatbotOpen]);

  // Scroll chat to bottom
  const scrollChatToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  // Client-side bot responses
  const getBotResponse = (message: string): string => {
    const msg = message.toLowerCase().trim();
    
    if (msg.includes('experience') || msg.includes('work') || msg.includes('job')) {
      return "I have experience at Eccalon LLC (2022-Present) as a Fullstack Developer, UMBC as Research Assistant (2022), and Tata Communications (2018-2021) as Software Developer. I've worked on AI/ML projects, enterprise dashboards, and automation systems.";
    }
    
    if (msg.includes('skills') || msg.includes('technology') || msg.includes('tech')) {
      return "My core skills include JavaScript (95%), TypeScript (90%), Vue.js (90%), React (85%), Node.js (90%), Python (85%), and cloud technologies like AWS. I also work with databases like PostgreSQL and MongoDB.";
    }
    
    if (msg.includes('education') || msg.includes('degree') || msg.includes('study')) {
      return "I graduated from University of Maryland, Baltimore County (UMBC) in May 2023 with a Master's degree in Computer Science. I'm currently on F1 OPT status.";
    }
    
    if (msg.includes('project') || msg.includes('portfolio')) {
      return "My featured projects include a Personalized Knowledge Assistant ChatBOT using GPT and Pinecone, CMS Management System for 100K+ users, and Nutri AI Scan (award-winning PWA). Check out the Projects section for more details!";
    }
    
    if (msg.includes('visa') || msg.includes('status') || msg.includes('opt')) {
      return "I am looking for more fun opportunities to work with! I'm authorized to work in the US and excited about new challenges.";
    }
    
    if (msg.includes('contact') || msg.includes('hire') || msg.includes('reach')) {
      return "You can reach me at parthbhodia08@gmail.com or through the contact form on this website. I'm actively looking for software development opportunities!";
    }
    
    if (msg.includes('ai') || msg.includes('machine learning') || msg.includes('ml')) {
      return "I have strong experience in AI/ML, including developing a ChatBOT with GPT and Pinecone vector databases, OCR-based applications, and data analytics. It's one of my primary areas of expertise.";
    }
    
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
      return "Hello! I'm Parth's portfolio assistant. I can tell you about his work experience, skills, education, projects, or visa status. What would you like to know?";
    }
    
    if (msg.includes('location') || msg.includes('where')) {
      return "I'm based in Maryland, USA. I'm available for remote work or positions in the DMV area (DC, Maryland, Virginia).";
    }
    
    return "I can help you learn about Parth's experience, skills, education, projects, or contact information. Try asking about his work experience, technical skills, or recent projects!";
  };

  // Send chat message
  const sendChatMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    // Add user message
    const userMessage: ChatMessage = {
      text: chatInput,
      isUser: true,
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMessage]);

    // Store message before clearing input
    const userInputCopy = chatInput;
    setChatInput('');

    // Try API first, fallback to client-side responses
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: userInputCopy })
      });

      if (response.ok) {
        const data = await response.json();
        setChatMessages(prev => [...prev, {
          text: data.response || getBotResponse(userInputCopy),
          isUser: false,
          timestamp: new Date()
        }]);
      } else {
        throw new Error('API not available');
      }
    } catch (error) {
      // Use client-side responses when API is not available (like on GitHub Pages)
      setTimeout(() => {
        setChatMessages(prev => [...prev, {
          text: getBotResponse(userInputCopy),
          isUser: false,
          timestamp: new Date()
        }]);
      }, 500); // Small delay to simulate thinking
    }
  };

  // Format timestamp
  const formatTime = (date: Date) => {
    return format(new Date(date), 'h:mm a');
  };

  return (
    <Layout showHero={true} currentPage="home">
      {/* Companies Section */}
      <section id="companies" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600 text-transparent bg-clip-text">Companies I've Worked With</span>
          </h2>
          <div className="relative">
            <div className="overflow-hidden">
              <div id="companies-carousel" className="flex gap-6 transition-transform duration-500 ease-in-out px-4 justify-center">
                {[
                  {
                    name: 'Eccalon LLC',
                    logo: 'https://media.glassdoor.com/sqll/2356227/eccalon-squarelogo-1556550788109.png',
                    role: 'Fullstack Developer',
                    period: 'May 2022 - Present',
                    description: 'Developed personalized knowledge assistant ChatBOT using GPT and Pinecone vector databases, reducing time-to-information retrieval by 50%. Designed Postgres schema for CMS managing 100K+ users. Built secure authentication systems with AWS services.'
                  },
                  {
                    name: 'University of Maryland, Baltimore County',
                    logo: 'https://i.pinimg.com/1200x/4a/14/02/4a1402708352e7c0993d76ea70fefd79.jpg',
                    role: 'Research Assistant - Software Developer',
                    period: 'Jan 2022 - Dec 2022',
                    description: 'Developed GIS-based visualization framework for detecting enemy objects using Elastic Search and Kibana. Used Java Spring Boot to control servers and communicate with edge devices using RabbitMQ.'
                  },
                  {
                    name: 'Tata Communications Ltd.',
                    logo: 'https://cdn.freebiesupply.com/logos/large/2x/tata-communications-logo-png-transparent.png',
                    role: 'Software Developer',
                    period: 'July 2018 - May 2021',
                    description: 'Led development of internal IPT Tool dashboard for 10,000+ users using Django, Python, JavaScript, and React. Developed automation application for Back-Bone Cost Map, increasing APAC region revenue by 36%.'
                  }
                ].map((company, index) => (
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      <div className="bg-white/90 dark:bg-black/40 p-6 rounded-lg shadow-lg backdrop-blur-sm cursor-pointer w-72 flex-shrink-0">
                        <div className="h-16 flex items-center justify-center mb-4">
                          <img src={company.logo} alt={company.name} className="max-h-full object-contain" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-center">{company.name}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-center">{company.role}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-500 text-center">{company.period}</p>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                          <img src={company.logo} alt={company.name} className="h-8 object-contain" />
                          <span>{company.name}</span>
                        </DialogTitle>
                        <DialogDescription className="pt-4">
                          <div className="mb-4">
                            <p className="font-semibold text-purple-600 dark:text-purple-400">{company.role}</p>
                            <p className="text-sm text-gray-500">{company.period}</p>
                          </div>
                          <p className="text-gray-700 dark:text-gray-300">{company.description}</p>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </div>
            
            {/* Only show arrows on mobile when less than 3 items are visible */}
            <div className="md:hidden">
              <button 
                onClick={() => {
                  const carousel = document.getElementById('companies-carousel');
                  if (carousel) {
                    const cardWidth = 300; // 288px + gap
                    const currentTransform = carousel.style.transform || 'translateX(0px)';
                    const currentX = parseInt(currentTransform.match(/-?\d+/)?.[0] || '0');
                    const newX = currentX + cardWidth;
                    
                    if (newX > 0) {
                      carousel.style.transform = `translateX(-${cardWidth * 2}px)`;
                    } else {
                      carousel.style.transform = `translateX(${newX}px)`;
                    }
                  }
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-900/90 p-3 rounded-full shadow-xl z-30 hover:bg-white dark:hover:bg-gray-900 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={() => {
                  const carousel = document.getElementById('companies-carousel');
                  if (carousel) {
                    const cardWidth = 300; // 288px + gap
                    const currentTransform = carousel.style.transform || 'translateX(0px)';
                    const currentX = parseInt(currentTransform.match(/-?\d+/)?.[0] || '0');
                    const newX = currentX - cardWidth;
                    
                    if (Math.abs(newX) >= cardWidth * 2) {
                      carousel.style.transform = 'translateX(0px)';
                    } else {
                      carousel.style.transform = `translateX(${newX}px)`;
                    }
                  }
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-900/90 p-3 rounded-full shadow-xl z-30 hover:bg-white dark:hover:bg-gray-900 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/40 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center relative">
            <span className="bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600 text-transparent bg-clip-text">About Me</span>
          </h2>
          <div className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 space-y-4 bg-white/80 dark:bg-black/40 p-6 rounded-lg shadow-md backdrop-blur-sm">
            <p>
              I'm a Software Developer with over 5 years of experience in HTML, CSS, SASS, SCSS, TypeScript, 
              JavaScript, Node.js, Python, and AWS. I'm proficient with modern frameworks such as Vue.js, 
              Nuxt, and React, with extensive experience in REST APIs and GraphQL.
            </p>
            <p>
              Currently based in Jersey City, NJ, I'm on F1 OPT status and graduated with a Master's in 
              Computer Science from UMBC in May 2023. My expertise spans from building ChatBOTs with GPT 
              and vector databases to designing systems for 100K+ users.
            </p>
            <p>
              I've led projects that reduced information retrieval time by 50% and increased revenue by 36% 
              through automation. I'm passionate about creating efficient, scalable solutions and stay current 
              with emerging technologies in cloud computing and AI/ML.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50/80 dark:bg-gray-900/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600 text-transparent bg-clip-text">My Projects</span>
          </h2>

          {/* Category Tabs */}
          <div className="flex justify-center flex-wrap gap-2 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-purple-500 dark:bg-purple-600 text-white shadow-lg category-tab-active' 
                    : 'bg-white/70 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <ParallaxSection speed={0.1}>
            <div key={selectedCategory} className="w-full overflow-x-auto pb-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 min-w-[320px]">
                {projects
                  .filter(project => selectedCategory === 'All' || project.category === selectedCategory)
                  .map((project, index) => (
                    <AnimatedProjectCard 
                      key={`${selectedCategory}-${index}`}
                      title={project.title}
                      description={project.description}
                      tags={project.tags}
                      liveUrl={project.liveUrl}
                      codeUrl={project.codeUrl}
                      index={index}
                    />
                ))}
              </div>
            </div>

            {/* No Projects Message */}
            {projects.filter(project => selectedCategory === 'All' || project.category === selectedCategory).length === 0 && (
              <div className="text-center py-20 text-gray-500 dark:text-gray-400">
                <p className="text-xl">No projects found in this category.</p>
              </div>
            )}
          </ParallaxSection>
        </div>
      </section>
    </Layout>
  );
}