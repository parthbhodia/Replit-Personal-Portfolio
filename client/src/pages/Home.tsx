import React, { useState, useRef, useEffect } from 'react';
import { format } from 'date-fns';
import { ChatMessage, FormData } from '../types';
import ThreeBackground from '../components/ThreeBackground';
import ThemeToggle from '../components/ThemeToggle';

export default function Home() {
  // Skills data
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'Vue.js', level: 85 },
    { name: 'React', level: 80 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Node.js', level: 75 },
    { name: 'Express', level: 70 },
    { name: 'TypeScript', level: 65 },
    { name: 'UI/UX Design', level: 80 }
  ];

  // Projects data
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A fully functional online store with payment integration and inventory management.',
      tags: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management tool for teams with real-time updates.',
      tags: ['React', 'Firebase', 'Material UI'],
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather application showing forecasts and historical data with interactive charts.',
      tags: ['JavaScript', 'Chart.js', 'API Integration'],
      liveUrl: '#',
      codeUrl: '#'
    }
  ];

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
      text: "Hello! I'm your portfolio assistant. How can I help you today?",
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

  // Contact form submission
  const submitContactForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setFormMessage('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contactForm)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setFormSuccess(true);
        setFormMessage('Your message has been sent successfully!');
        // Reset form
        setContactForm({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setFormSuccess(false);
        setFormMessage(data.message || 'There was an error sending your message. Please try again.');
      }
    } catch (error) {
      setFormSuccess(false);
      setFormMessage('Network error. Please check your connection and try again.');
      console.error('Error submitting form:', error);
    } finally {
      setSubmitting(false);
    }
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
    
    try {
      // Send to API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: userInputCopy })
      });
      
      const data = await response.json();
      
      // Add bot response
      setChatMessages(prev => [...prev, {
        text: data.response || "I'm sorry, I couldn't process your request. Please try again.",
        isUser: false,
        timestamp: new Date()
      }]);
    } catch (error) {
      console.error('Error sending chat message:', error);
      setChatMessages(prev => [...prev, {
        text: "Sorry, there was an error processing your message. Please try again.",
        isUser: false,
        timestamp: new Date()
      }]);
    }
  };

  // Format timestamp
  const formatTime = (date: Date) => {
    return format(new Date(date), 'h:mm a');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      {/* Theme Toggle */}
      <ThemeToggle />
      
      {/* Three.js Background */}
      <ThreeBackground />
      
      {/* Navigation */}
      <nav className="bg-white/90 dark:bg-black/90 backdrop-blur-sm sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 text-transparent bg-clip-text">
            Alex Chen
          </div>
          <div className="flex space-x-6">
            <a href="#about" className="font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors">About</a>
            <a href="#skills" className="font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors">Skills</a>
            <a href="#projects" className="font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors">Projects</a>
            <a href="#contact" className="font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 flex items-center justify-center text-4xl text-white mb-8 shadow-lg">
            AC
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Hi, I'm <span className="bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 text-transparent bg-clip-text">Alex Chen</span>
          </h1>
          <p className="text-xl md:text-2xl text-center text-gray-600 dark:text-gray-300 max-w-2xl mb-8 z-10 backdrop-blur-sm py-2 px-4 rounded-lg bg-white/10 dark:bg-black/10">
            Full Stack Developer specializing in JavaScript, Vue.js, and React
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#contact" className="px-6 py-3 bg-green-600 dark:bg-green-500 text-white rounded-md hover:bg-green-700 dark:hover:bg-green-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1">
              Get in Touch
            </a>
            <a href="#projects" className="px-6 py-3 border-2 border-green-600 dark:border-green-500 text-green-600 dark:text-green-500 rounded-md hover:bg-green-600/10 dark:hover:bg-green-500/10 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1">
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/40 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center relative">
            <span className="bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 text-transparent bg-clip-text">About Me</span>
          </h2>
          <div className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 space-y-4 bg-white/80 dark:bg-black/40 p-6 rounded-lg shadow-md backdrop-blur-sm">
            <p>
              I'm a full stack developer with over 5 years of experience building modern web applications.
              I specialize in JavaScript technologies, with expertise in both Vue.js and React on the
              frontend, and Node.js on the backend.
            </p>
            <p>
              My journey in web development began with a passion for creating intuitive user experiences.
              I've since expanded my skills to include backend development, database design, and
              deployment strategies, allowing me to deliver complete solutions from concept to production.
            </p>
            <p>
              When I'm not coding, you can find me exploring new hiking trails, experimenting with 
              photography, or learning about the latest web technologies. I believe in continuous
              learning and regularly attend tech meetups and conferences to stay on top of industry trends.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 text-transparent bg-clip-text">My Skills</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white/90 dark:bg-black/40 backdrop-blur-sm p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">{skill.name}</h3>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-green-600 dark:from-green-400 dark:to-green-500 h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="flex justify-between mt-1 text-sm text-gray-500 dark:text-gray-400">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center">
                  <h3 className="text-white text-xl font-medium px-4 text-center">{project.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <a href={project.liveUrl} className="text-blue-600 dark:text-blue-400 hover:underline">View Live</a>
                    <a href={project.codeUrl} className="text-blue-600 dark:text-blue-400 hover:underline">Source Code</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-medium mb-4">Contact Information</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 dark:text-blue-300">📧</span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">contact@alexchen.com</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 dark:text-blue-300">📱</span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">+1 (123) 456-7890</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 dark:text-blue-300">📍</span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">San Francisco, CA</span>
                </div>
              </div>
            </div>
            
            <form onSubmit={submitContactForm} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={contactForm.name}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800"
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
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800"
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
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800"
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
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={submitting}
                className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-400"
              >
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
              {formMessage && (
                <p className={`text-center mt-4 ${formSuccess ? 'text-green-600' : 'text-red-600'}`}>
                  {formMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Chat Bot Button */}
      <div className="fixed bottom-6 right-6">
        <button 
          onClick={toggleChatbot}
          className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
        >
          <span>{!chatbotOpen ? '💬' : '✕'}</span>
        </button>
      </div>

      {/* Chat Bot Interface */}
      {chatbotOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden z-50">
          <div className="p-4 bg-blue-600 text-white">
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
                    ? 'bg-blue-100 dark:bg-blue-900 text-gray-800 dark:text-gray-200 self-end' 
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 self-start'
                }`}
              >
                {message.text}
                <div className="text-xs text-gray-500 mt-1">
                  {formatTime(message.timestamp)}
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-gray-200 dark:border-gray-700">
            <form onSubmit={sendChatMessage} className="flex gap-2">
              <input 
                type="text" 
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask me anything..." 
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800"
              />
              <button 
                type="submit" 
                disabled={!chatInput.trim()}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-400"
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