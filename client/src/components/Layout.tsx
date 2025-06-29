import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'wouter';
import { format } from 'date-fns';
import { ChatMessage, FormData } from '../types';
import ThreeBackground from './ThreeBackground';
import ThemeToggle from './ThemeToggle';
import Navigation from './Navigation';
import ParallaxSection from './ParallaxSection';
import ParallaxHeader from './ParallaxHeader';
import TypewriterText from './TypewriterText';
import ScrollProgress from './ScrollProgress';
import { Menu, X } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  showHero?: boolean;
  currentPage?: string;
}

export default function Layout({ children, showHero = false, currentPage = "home" }: LayoutProps) {
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
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Three.js Background */}
      <ThreeBackground />

      {/* Navigation */}
      <Navigation currentPage={currentPage} />

      {/* Hero Section with Parallax - Only show if showHero is true */}
      {showHero && (
        <>
          <ParallaxHeader />
          <section className="min-h-screen flex items-center justify-center relative -mt-screen">
            <div className="container mx-auto px-4 flex flex-col items-center z-10">
              <ParallaxSection speed={0.4} className="mb-8">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600 flex items-center justify-center text-4xl text-white shadow-lg transform transition-all duration-500 hover:scale-110">
                  PB
                </div>
              </ParallaxSection>

              <ParallaxSection speed={0.2} className="mb-4">
                <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
                  Hi, I'm <span className="bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600 text-transparent bg-clip-text">Parth Bhodia</span>
                </h1>
              </ParallaxSection>

              <ParallaxSection speed={0.1} className="mb-8">
                <div className="text-xl md:text-2xl text-center text-gray-600 dark:text-gray-300 max-w-2xl backdrop-blur-sm py-2 px-4 rounded-lg bg-white/10 dark:bg-black/20">
                  I'm a <TypewriterText 
                    texts={[
                      "Software Developer", 
                      "Full Stack Engineer", 
                      "Vue.js Expert", 
                      "React Developer", 
                      "AWS Cloud Specialist",
                      "Python Developer"
                    ]}
                    className="bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600 text-transparent bg-clip-text font-semibold"
                  />
                </div>
              </ParallaxSection>

              <ParallaxSection speed={-0.1}>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <a href="#contact" className="px-6 py-3 bg-purple-600 dark:bg-purple-500 text-white rounded-md hover:bg-purple-700 dark:hover:bg-purple-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1">
                    Get in Touch
                  </a>
                  <a href="#projects" className="px-6 py-3 border-2 border-purple-600 dark:border-purple-500 text-purple-600 dark:text-purple-500 rounded-md hover:bg-purple-600/10 dark:hover:bg-purple-500/10 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1">
                    View Projects
                  </a>
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gray-600 dark:bg-gray-700 text-white rounded-md hover:bg-gray-700 dark:hover:bg-gray-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center">
                    <span>Download Resume</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </ParallaxSection>
            </div>
          </section>
        </>
      )}

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Contact Section - Only show if showHero is true */}
      {showHero && (
        <section id="contact" className="py-20 bg-white/80 dark:bg-black/40 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600 text-transparent bg-clip-text">Get In Touch</span>
            </h2>

            <ParallaxSection speed={0.05}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div className="bg-white/70 dark:bg-black/50 p-6 rounded-lg shadow-md backdrop-blur-sm">
                  <h3 className="text-xl font-medium mb-6 text-gray-800 dark:text-gray-200">Contact Information</h3>
                  <div className="space-y-6 mb-6">
                    <div className="flex items-center transform transition-transform hover:translate-x-2">
                      <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/60 rounded-full flex items-center justify-center mr-4 shadow-md">
                        <span className="text-purple-600 dark:text-purple-400">📧</span>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">parthbhodia08@gmail.com</span>
                    </div>
                    <div className="flex items-center transform transition-transform hover:translate-x-2">
                      <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/60 rounded-full flex items-center justify-center mr-4 shadow-md">
                        <span className="text-purple-600 dark:text-purple-400">📍</span>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Jersey City, NJ</span>
                    </div>
                  </div>
                </div>

                <form onSubmit={submitContactForm} className="space-y-4 bg-white/70 dark:bg-black/50 p-6 rounded-lg shadow-md backdrop-blur-sm">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={contactForm.name}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-800/80 bg-white/80 backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={contactForm.email}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-800/80 bg-white/80 backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject"
                      value={contactForm.subject}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-800/80 bg-white/80 backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                    <textarea 
                      id="message" 
                      name="message"
                      value={contactForm.message}
                      onChange={handleFormChange}
                      rows={4} 
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-800/80 bg-white/80 backdrop-blur-sm"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={submitting}
                    className="w-full py-3 bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white rounded-md hover:from-purple-600 hover:to-purple-700 dark:hover:from-purple-500 dark:hover:to-purple-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 disabled:opacity-70 disabled:transform-none disabled:hover:shadow-md"
                  >
                    {submitting ? 'Sending...' : 'Send Message'}
                  </button>
                  {formMessage && (
                    <p className={`text-center mt-4 ${formSuccess ? 'text-purple-600' : 'text-red-600'}`}>
                      {formMessage}
                    </p>
                  )}
                </form>
              </div>
            </ParallaxSection>
          </div>
        </section>
      )}

      {/* Chat Bot Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button 
          onClick={toggleChatbot}
          className="w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white rounded-full shadow-lg flex items-center justify-center hover:from-purple-600 hover:to-purple-700 dark:hover:from-purple-500 dark:hover:to-purple-600 transition-all transform hover:scale-110"
        >
          <span className="text-xl">{!chatbotOpen ? '💬' : '✕'}</span>
        </button>
      </div>

      {/* Chat Bot Interface */}
      {chatbotOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-lg shadow-xl overflow-hidden z-50 border border-purple-200 dark:border-purple-900">
          <div className="p-4 bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white">
            <h3 className="font-medium">Portfolio Assistant</h3>
          </div>
          <div 
            ref={chatContainerRef}
            className="h-96 overflow-y-auto p-4 flex flex-col gap-3"
          >
            {chatMessages.map((message, index) => (
              <div 
                key={index} 
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.isUser 
                    ? 'bg-purple-100 dark:bg-purple-900/60 text-gray-800 dark:text-gray-200 self-end shadow-md' 
                    : 'bg-gray-100 dark:bg-gray-800/60 text-gray-800 dark:text-gray-200 self-start shadow-md'
                }`}
              >
                {message.text}
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {formatTime(message.timestamp)}
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-gray-200 dark:border-gray-800">
            <form onSubmit={sendChatMessage} className="flex gap-2">
              <input 
                type="text" 
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask me anything..." 
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800/80 bg-white/80 backdrop-blur-sm"
              />
              <button 
                type="submit" 
                disabled={!chatInput.trim()}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white rounded-md hover:from-purple-600 hover:to-purple-700 dark:hover:from-purple-500 dark:hover:to-purple-600 transition-all disabled:opacity-70"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Footer Section */}
      <footer className="py-12 bg-gray-50/70 dark:bg-gray-900/50 backdrop-blur-md border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Logo & About */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600 flex items-center justify-center text-sm text-white font-bold">
                  PB
                </div>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-600 text-transparent bg-clip-text">
                  Parth Bhodia
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Software Developer specializing in Vue.js, React, Node.js, Python, and AWS. Building scalable solutions with modern technologies.
              </p>
              <div className="flex space-x-4 text-gray-500 dark:text-gray-400">
                <a href="https://github.com/parthbhodia" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/in/parthbhodia" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="mailto:parthbhodia08@gmail.com" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-medium mb-4 text-gray-900 dark:text-gray-100">Quick Links</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
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
                  <Link href="/skills" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center">
                    <span className="mr-2">→</span> Skills & Expertise
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center">
                    <span className="mr-2">→</span> Tech Blog
                  </Link>
                </li>
                <li>
                  <a href="/#projects" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center">
                    <span className="mr-2">→</span> Portfolio Projects
                  </a>
                </li>
                <li>
                  <a href="/#contact" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center">
                    <span className="mr-2">→</span> Get In Touch
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-medium mb-4 text-gray-900 dark:text-gray-100">Stay Updated</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Subscribe to my newsletter for the latest articles, projects, and tech insights.
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
    </div>
  );
} 