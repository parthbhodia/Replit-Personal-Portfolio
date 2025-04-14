import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "../components/ui/dialog";

import React, { useState, useRef, useEffect } from 'react';
import { format } from 'date-fns';
import { ChatMessage, FormData } from '../types';
import ThreeBackground from '../components/ThreeBackground';
import ThemeToggle from '../components/ThemeToggle';
import ParallaxSection from '../components/ParallaxSection';
import ParallaxHeader from '../components/ParallaxHeader';
import AnimatedProjectCard from '../components/AnimatedProjectCard';
import TypewriterText from '../components/TypewriterText';
import ScrollProgress from '../components/ScrollProgress';

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

  // Projects data with categories
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A fully functional online store with payment integration and inventory management.',
      tags: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Web App',
      liveUrl: '#',
      codeUrl: '#',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management tool for teams with real-time updates.',
      tags: ['React', 'Firebase', 'Material UI'],
      category: 'Web App',
      liveUrl: '#',
      codeUrl: '#',
      featured: true
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather application showing forecasts and historical data with interactive charts.',
      tags: ['JavaScript', 'Chart.js', 'API Integration'],
      category: 'Web App',
      liveUrl: '#',
      codeUrl: '#',
      featured: true
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing my skills, projects, and experience with interactive elements.',
      tags: ['React', 'Three.js', 'Tailwind CSS'],
      category: 'Web App',
      liveUrl: '#',
      codeUrl: '#',
      featured: false
    },
    {
      title: 'AI Image Generator',
      description: 'An application that uses machine learning to generate unique images based on text prompts.',
      tags: ['Python', 'TensorFlow', 'React'],
      category: 'AI/ML',
      liveUrl: '#',
      codeUrl: '#',
      featured: true
    },
    {
      title: 'Crypto Price Tracker',
      description: 'Real-time cryptocurrency price tracking application with price alerts and portfolio management.',
      tags: ['React', 'Node.js', 'WebSockets'],
      category: 'Web App',
      liveUrl: '#',
      codeUrl: '#',
      featured: false
    },
    {
      title: 'Mobile Fitness App',
      description: 'A mobile application for tracking workouts, setting fitness goals, and monitoring progress over time.',
      tags: ['React Native', 'Firebase', 'HealthKit'],
      category: 'Mobile App',
      liveUrl: '#',
      codeUrl: '#',
      featured: true
    },
    {
      title: 'Smart Home Dashboard',
      description: 'An IoT dashboard for controlling and monitoring smart home devices with automation capabilities.',
      tags: ['React', 'Node.js', 'MQTT', 'IoT'],
      category: 'IoT',
      liveUrl: '#',
      codeUrl: '#',
      featured: false
    },
    {
      title: 'Stock Trading Bot',
      description: 'An automated trading bot that uses algorithms and technical analysis to make stock trading decisions.',
      tags: ['Python', 'Machine Learning', 'API Integration'],
      category: 'AI/ML',
      liveUrl: '#',
      codeUrl: '#',
      featured: false
    },
    {
      title: 'Social Media Analytics',
      description: 'A dashboard for analyzing social media performance metrics and audience engagement.',
      tags: ['React', 'D3.js', 'API Integration'],
      category: 'Data Visualization',
      liveUrl: '#',
      codeUrl: '#',
      featured: false
    }
  ];

  // Project categories
  const categories = ['All', 'Web App', 'Mobile App', 'AI/ML', 'IoT', 'Data Visualization'];

  // Selected category state
  const [selectedCategory, setSelectedCategory] = useState('All');

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
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

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
            <a href="#companies" className="font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors">Companies</a>
            <a href="#about" className="font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors">About</a>
            <a href="#skills" className="font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors">Skills</a>
            <a href="#projects" className="font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors">Projects</a>
            <a href="#contact" className="font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Parallax */}
      <ParallaxHeader />
      <section className="min-h-screen flex items-center justify-center relative -mt-screen">
        <div className="container mx-auto px-4 flex flex-col items-center z-10">
          <ParallaxSection speed={0.4} className="mb-8">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 flex items-center justify-center text-4xl text-white shadow-lg transform transition-all duration-500 hover:scale-110">
              AC
            </div>
          </ParallaxSection>

          <ParallaxSection speed={0.2} className="mb-4">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
              Hi, I'm <span className="bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 text-transparent bg-clip-text">Alex Chen</span>
            </h1>
          </ParallaxSection>

          <ParallaxSection speed={0.1} className="mb-8">
            <div className="text-xl md:text-2xl text-center text-gray-600 dark:text-gray-300 max-w-2xl backdrop-blur-sm py-2 px-4 rounded-lg bg-white/10 dark:bg-black/20">
              I'm a <TypewriterText 
                texts={[
                  "Full Stack Developer", 
                  "UI/UX Designer", 
                  "JavaScript Expert", 
                  "React Specialist", 
                  "Vue.js Enthusiast"
                ]}
                className="bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 text-transparent bg-clip-text font-semibold"
              />
            </div>
          </ParallaxSection>

          <ParallaxSection speed={-0.1}>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contact" className="px-6 py-3 bg-green-600 dark:bg-green-500 text-white rounded-md hover:bg-green-700 dark:hover:bg-green-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1">
                Get in Touch
              </a>
              <a href="#projects" className="px-6 py-3 border-2 border-green-600 dark:border-green-500 text-green-600 dark:text-green-500 rounded-md hover:bg-green-600/10 dark:hover:bg-green-500/10 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1">
                View Projects
              </a>
              <a href="/resume.pdf" download className="px-6 py-3 bg-gray-600 dark:bg-gray-700 text-white rounded-md hover:bg-gray-700 dark:hover:bg-gray-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center">
                <span>Download Resume</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
          </ParallaxSection>
        </div>
      </section>

      {/* Companies Section */}
      <section id="companies" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 text-transparent bg-clip-text">Companies I've Worked With</span>
          </h2>
          <div className="overflow-x-auto animate-scroll pb-4 relative">
            <div className="flex gap-6 min-w-max px-4">
              {[
                {
                  name: 'Google',
                  logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png',
                  role: 'Senior Frontend Developer',
                  period: '2020 - Present',
                  description: 'Led development of key features in Google Cloud Platform, improving developer experience and reducing deployment time by 40%. Implemented real-time collaboration features using WebSocket technology.'
                },
                {
                  name: 'Microsoft',
                  logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31',
                  role: 'Full Stack Developer',
                  period: '2018 - 2020',
                  description: 'Developed and maintained core components of Microsoft Teams, focusing on performance optimization and accessibility. Created scalable backend services using Node.js and Azure.'
                },
                {
                  name: 'Amazon',
                  logo: 'https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png',
                  role: 'Software Engineer',
                  period: '2016 - 2018',
                  description: 'Worked on Amazon Prime Video streaming infrastructure, implementing efficient content delivery solutions. Reduced loading times by 30% through innovative caching strategies.'
                },
                {
                  name: 'Meta',
                  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1200px-Meta_Platforms_Inc._logo.svg.png',
                  role: 'Frontend Engineer',
                  period: '2015 - 2016',
                  description: 'Contributed to React core team, developing and maintaining key features. Implemented performance monitoring tools used across Meta products.'
                }
              ].map((company, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <div className="bg-white/90 dark:bg-black/40 p-6 rounded-lg shadow-lg backdrop-blur-sm transform transition-all duration-500 hover:scale-105 cursor-pointer w-72">
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
                          <p className="font-semibold text-green-600 dark:text-green-400">{company.role}</p>
                          <p className="text-sm text-gray-500">{company.period}</p>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">{company.description}</p>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          <button 
            onClick={() => {
              const container = document.querySelector('.animate-scroll');
              if (container) container.scrollLeft -= 300;
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-900/80 p-2 rounded-full shadow-lg z-10 hover:bg-white dark:hover:bg-gray-900 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={() => {
              const container = document.querySelector('.animate-scroll');
              if (container) container.scrollLeft += 300;
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-900/80 p-2 rounded-full shadow-lg z-10 hover:bg-white dark:hover:bg-gray-900 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
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
          <ParallaxSection speed={0.1}>
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 text-transparent bg-clip-text">My Skills</span>
            </h2>
          </ParallaxSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <ParallaxSection key={index} speed={0.05 * (index % 3 + 1)} className="transform transition-all duration-500 hover:translate-y-[-5px]">
                <div className="bg-white/90 dark:bg-black/40 backdrop-blur-sm p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-500 group">
                  <h3 className="font-medium mb-3 text-gray-800 dark:text-gray-200 flex items-center justify-between">
                    <span className="text-lg group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">{skill.name}</span>
                    <span className="text-xl font-bold bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 text-transparent bg-clip-text">{skill.level}%</span>
                  </h3>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div 
                      className="skill-progress h-3 rounded-full" 
                      style={{ 
                        animationDelay: `${index * 0.2}s`,
                        maxWidth: `${skill.level}%`
                      }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-2 text-sm text-gray-500 dark:text-gray-400">
                    <span>Beginner</span>
                    <span>Expert</span>
                  </div>
                </div>
              </ParallaxSection>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50/80 dark:bg-gray-900/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 text-transparent bg-clip-text">My Projects</span>
          </h2>

          {/* Category Tabs */}
          <div className="flex justify-center flex-wrap gap-2 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-green-500 dark:bg-green-600 text-white shadow-lg category-tab-active' 
                    : 'bg-white/70 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-green-900/30 hover:shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <ParallaxSection speed={0.1}>
            <div key={selectedCategory} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

            {/* No Projects Message */}
            {projects.filter(project => selectedCategory === 'All' || project.category === selectedCategory).length === 0 && (
              <div className="text-center py-20 text-gray-500 dark:text-gray-400">
                <p className="text-xl">No projects found in this category.</p>
              </div>
            )}
          </ParallaxSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white/80 dark:bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 text-transparent bg-clip-text">Get In Touch</span>
          </h2>

          <ParallaxSection speed={0.05}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="bg-white/70 dark:bg-black/50 p-6 rounded-lg shadow-md backdrop-blur-sm">
                <h3 className="text-xl font-medium mb-6 text-gray-800 dark:text-gray-200">Contact Information</h3>
                <div className="space-y-6 mb-6">
                  <div className="flex items-center transform transition-transform hover:translate-x-2">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900/60 rounded-full flex items-center justify-center mr-4 shadow-md">
                      <span className="text-green-600 dark:text-green-400">📧</span>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">contact@alexchen.com</span>
                  </div>
                  <div className="flex items-center transform transition-transform hover:translate-x-2">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900/60 rounded-full flex items-center justify-center mr-4 shadow-md">
                      <span className="text-green-600 dark:text-green-400">📱</span>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">+1 (123) 456-7890</span>
                  </div>
                  <div className="flex items-center transform transition-transform hover:translate-x-2">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900/60 rounded-full flex items-center justify-center mr-4 shadow-md">
                      <span className="text-green-600 dark:text-green-400">📍</span>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">San Francisco, CA</span>
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
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-800/80 bg-white/80 backdrop-blur-sm"
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
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-800/80 bg-white/80 backdrop-blur-sm"
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
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-800/80 bg-white/80 backdrop-blur-sm"
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
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-800/80 bg-white/80 backdrop-blur-sm"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={submitting}
                  className="w-full py-3 bg-gradient-to-r from-green-500 to-green-600 dark:from-green-400 dark:to-green-500 text-white rounded-md hover:from-green-600 hover:to-green-700 dark:hover:from-green-500 dark:hover:to-green-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 disabled:opacity-70 disabled:transform-none disabled:hover:shadow-md"
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
          </ParallaxSection>
        </div>
      </section>

      {/* Chat Bot Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button 
          onClick={toggleChatbot}
          className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 dark:from-green-400 dark:to-green-500 text-white rounded-full shadow-lg flex items-center justify-center hover:from-green-600 hover:to-green-700 dark:hover:from-green-500 dark:hover:to-green-600 transition-all transform hover:scale-110"
        >
          <span className="text-xl">{!chatbotOpen ? '💬' : '✕'}</span>
        </button>
      </div>

      {/* Chat Bot Interface */}
      {chatbotOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-lg shadow-xl overflow-hidden z-50 border border-green-200 dark:border-green-900">
          <div className="p-4 bg-gradient-to-r from-green-500 to-green-600 dark:from-green-400 dark:to-green-500 text-white">
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
                    ? 'bg-green-100 dark:bg-green-900/60 text-gray-800 dark:text-gray-200 self-end shadow-md' 
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
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800/80 bg-white/80 backdrop-blur-sm"
              />
              <button 
                type="submit" 
                disabled={!chatInput.trim()}
                className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 dark:from-green-400 dark:to-green-500 text-white rounded-md hover:from-green-600 hover:to-green-700 dark:hover:from-green-500 dark:hover:to-green-600 transition-all disabled:opacity-70"
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
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 flex items-center justify-center text-sm text-white font-bold">
                  AC
                </div>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-green-600 to-green-800 dark:from-green-400 dark:to-green-600 text-transparent bg-clip-text">
                  Alex Chen
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Creating elegant digital experiences with modern web technologies. Let's build something amazing together.
              </p>
              <div className="flex space-x-4 text-gray-500 dark:text-gray-400">
                <a href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-medium mb-4 text-gray-900 dark:text-gray-100">Quick Links</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>
                  <a href="#about" className="hover:text-green-600 dark:hover:text-green-400 transition-colors flex items-center">
                    <span className="mr-2">→</span> About Me
                  </a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-green-600 dark:hover:text-green-400 transition-colors flex items-center">
                    <span className="mr-2">→</span> Skills & Expertise
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-green-600 dark:hover:text-green-400 transition-colors flex items-center">
                    <span className="mr-2">→</span> Portfolio Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-green-600 dark:hover:text-green-400 transition-colors flex items-center">
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
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-l-md focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800/30 bg-white/80 backdrop-blur-sm"
                />
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 dark:from-green-400 dark:to-green-500 text-white rounded-r-md hover:from-green-600 hover:to-green-700 dark:hover:from-green-500 dark:hover:to-green-600 transition-all"
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
            <p>© {new Date().getFullYear()} Alex Chen. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <a href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Privacy Policy</a>
              <span className="text-gray-300 dark:text-gray-700">•</span>
              <a href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Terms of Service</a>
              <span className="text-gray-300 dark:text-gray-700">•</span>
              <a href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}