import React, { useState } from 'react';
import { Link } from 'wouter';
import ThreeBackground from '../components/ThreeBackground';
import ThemeToggle from '../components/ThemeToggle';
import ViewCounter from '../components/ViewCounter';
import { useSEO } from '../hooks/useSEO';
import { ChatMessage } from '../types';
import { Menu, X } from 'lucide-react';

// Chat message type
interface ChatMessage {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function Skills() {
  // SEO optimization for skills page
  useSEO({
    title: 'Skills & Expertise - Parth Bhodia | Vue.js React Node.js Python AWS',
    description: 'Explore Parth Bhodia\'s technical skills and expertise in Full Stack Development, including Vue.js, React, Node.js, Python, AWS, Machine Learning, and Database technologies.',
    keywords: 'Parth Bhodia Skills, Vue.js Expert, React Developer, Node.js Developer, Python Programming, AWS Cloud, Machine Learning, Database Design, Full Stack Skills, Software Development Skills',
    url: 'https://parthbhodia.com/skills'
  });
  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Chatbot state
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const toggleChatbot = () => {
    setChatbotOpen(!chatbotOpen);
  };

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;
    
    const userMessage: ChatMessage = {
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };
    
    setChatMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);
    
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: inputMessage })
      });
      
      const data = await response.json();
      
      const botMessage: ChatMessage = {
        text: data.response,
        isUser: false,
        timestamp: new Date()
      };
      
      setChatMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = {
        text: "Sorry, I'm having trouble connecting. Please try again.",
        isUser: false,
        timestamp: new Date()
      };
      setChatMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };
  
  // Skills data based on resume
  const skills = [
    { name: 'JavaScript', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Vue.js', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'HTML/CSS/SASS', level: 95 },
    { name: 'Java (Spring Boot)', level: 80 },
    { name: 'AWS', level: 85 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'GraphQL', level: 75 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800 relative overflow-hidden">
      <ThreeBackground />
      
      {/* Navigation */}
      <nav className="bg-white/90 dark:bg-black/90 backdrop-blur-sm sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <div className="text-xl font-bold bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600 text-transparent bg-clip-text cursor-pointer">
                Parth Bhodia
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/#companies" className="font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Companies</Link>
              <Link href="/#about" className="font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors">About</Link>
              <Link href="/skills" className="font-medium text-purple-600 dark:text-purple-400">Skills</Link>
              <Link href="/#projects" className="font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Projects</Link>
              <Link href="/blog" className="font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Blog</Link>
              <Link href="/#contact" className="font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Contact</Link>
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
                <Link 
                  href="/#companies" 
                  className="font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Companies
                </Link>
                <Link 
                  href="/#about" 
                  className="font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="/skills" 
                  className="font-medium text-purple-600 dark:text-purple-400"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Skills
                </Link>
                <Link 
                  href="/#projects" 
                  className="font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link 
                  href="/blog" 
                  className="font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link 
                  href="/#contact" 
                  className="font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Skills Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600 text-transparent bg-clip-text">Technical Skills</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here's a comprehensive overview of my technical expertise and proficiency levels across various technologies and frameworks.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white/90 dark:bg-black/40 p-6 rounded-lg shadow-lg backdrop-blur-sm transform transition-all duration-500 hover:scale-105">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-lg">{skill.name}</span>
                  <span className="text-sm font-medium text-purple-600 dark:text-purple-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Back to Home Button */}
          <div className="text-center mt-12">
            <Link href="/">
              <button className="bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Back to Home
              </button>
            </Link>
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
              if (inputMessage.trim()) {
                const userMessage: ChatMessage = {
                  text: inputMessage,
                  isUser: true,
                  timestamp: new Date()
                };
                setChatMessages(prev => [...prev, userMessage]);
                setInputMessage('');
                setIsTyping(true);
                
                // Simulate AI response
                setTimeout(() => {
                  setIsTyping(false);
                  const responses = [
                    "Parth has expertise in React, Vue.js, Node.js, Python, and AWS cloud services. Would you like to know more about any specific technology?",
                    "He's worked with companies like Eccalon LLC and Capital One, building scalable web applications and cloud solutions.",
                    "Parth specializes in full-stack development with a focus on modern JavaScript frameworks and cloud architecture.",
                    "His recent projects include AI-powered applications, microservices architecture, and responsive web development.",
                    "Feel free to ask about his experience with specific technologies or projects!"
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
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask about Parth's skills..."
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