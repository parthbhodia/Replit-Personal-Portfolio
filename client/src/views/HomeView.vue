<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <!-- Navigation -->
    <nav class="bg-white dark:bg-gray-900 sticky top-0 z-50 shadow-md">
      <div class="container mx-auto px-4 py-4 flex items-center justify-between">
        <div class="text-xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">
          Alex Chen
        </div>
        <div class="flex space-x-6">
          <a href="#about" class="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
          <a href="#skills" class="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a>
          <a href="#projects" class="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
          <a href="#contact" class="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="py-20">
      <div class="container mx-auto px-4 flex flex-col items-center">
        <div class="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center text-4xl text-white mb-8">
          AC
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-center mb-4">
          Hi, I'm <span class="bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">Alex Chen</span>
        </h1>
        <p class="text-xl md:text-2xl text-center text-gray-600 dark:text-gray-400 max-w-2xl mb-8">
          Full Stack Developer specializing in JavaScript, Vue.js, and React
        </p>
        <div class="flex space-x-4">
          <a href="#contact" class="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Get in Touch
          </a>
          <a href="#projects" class="px-6 py-3 border border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
            View Projects
          </a>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-gray-50 dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div class="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 space-y-4">
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

    <!-- Skills Section -->
    <section id="skills" class="py-20">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">My Skills</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="(skill, index) in skills" :key="index" class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 class="font-medium mb-2">{{ skill.name }}</h3>
            <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <div 
                class="bg-blue-600 h-2.5 rounded-full" 
                :style="{ width: `${skill.level}%` }"
              ></div>
            </div>
            <div class="flex justify-between mt-1 text-sm text-gray-500 dark:text-gray-400">
              <span>Beginner</span>
              <span>Expert</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20 bg-gray-50 dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(project, index) in projects" :key="index" class="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <div class="h-48 bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center">
              <h3 class="text-white text-xl font-medium px-4 text-center">{{ project.title }}</h3>
            </div>
            <div class="p-6">
              <p class="text-gray-600 dark:text-gray-400 mb-4">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="(tag, tagIndex) in project.tags" :key="tagIndex" class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded-full">
                  {{ tag }}
                </span>
              </div>
              <div class="flex space-x-3">
                <a :href="project.liveUrl" class="text-blue-600 dark:text-blue-400 hover:underline">View Live</a>
                <a :href="project.codeUrl" class="text-blue-600 dark:text-blue-400 hover:underline">Source Code</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 class="text-xl font-medium mb-4">Contact Information</h3>
            <div class="space-y-4 mb-6">
              <div class="flex items-center">
                <div class="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3">
                  <span class="text-blue-600 dark:text-blue-300">📧</span>
                </div>
                <span class="text-gray-700 dark:text-gray-300">contact@alexchen.com</span>
              </div>
              <div class="flex items-center">
                <div class="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3">
                  <span class="text-blue-600 dark:text-blue-300">📱</span>
                </div>
                <span class="text-gray-700 dark:text-gray-300">+1 (123) 456-7890</span>
              </div>
              <div class="flex items-center">
                <div class="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3">
                  <span class="text-blue-600 dark:text-blue-300">📍</span>
                </div>
                <span class="text-gray-700 dark:text-gray-300">San Francisco, CA</span>
              </div>
            </div>
          </div>
          
          <form @submit.prevent="submitContactForm" class="space-y-4">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                v-model="contactForm.name" 
                required
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800"
              >
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                v-model="contactForm.email" 
                required
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800"
              >
            </div>
            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
              <input 
                type="text" 
                id="subject" 
                v-model="contactForm.subject" 
                required
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800"
              >
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
              <textarea 
                id="message" 
                v-model="contactForm.message" 
                rows="4" 
                required
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800"
              ></textarea>
            </div>
            <button 
              type="submit" 
              :disabled="submitting"
              class="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-400"
            >
              {{ submitting ? 'Sending...' : 'Send Message' }}
            </button>
            <p v-if="formMessage" :class="{'text-green-600': formSuccess, 'text-red-600': !formSuccess}" class="text-center mt-4">
              {{ formMessage }}
            </p>
          </form>
        </div>
      </div>
    </section>

    <!-- Chat Bot Button -->
    <div class="fixed bottom-6 right-6">
      <button 
        @click="toggleChatbot" 
        class="w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
      >
        <span v-if="!chatbotOpen">💬</span>
        <span v-else>✕</span>
      </button>
    </div>

    <!-- Chat Bot Interface -->
    <div 
      v-if="chatbotOpen" 
      class="fixed bottom-24 right-6 w-80 md:w-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden z-50"
    >
      <div class="p-4 bg-blue-600 text-white">
        <h3 class="font-medium">Portfolio Assistant</h3>
      </div>
      <div class="h-96 overflow-y-auto p-4 flex flex-col gap-3" ref="chatContainer">
        <div v-for="(message, index) in chatMessages" :key="index" :class="[
          'max-w-[80%] p-3 rounded-lg', 
          message.isUser ? 'bg-blue-100 dark:bg-blue-900 text-gray-800 dark:text-gray-200 self-end' : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 self-start'
        ]">
          {{ message.text }}
          <div class="text-xs text-gray-500 mt-1">
            {{ formatTime(message.timestamp) }}
          </div>
        </div>
      </div>
      <div class="p-3 border-t border-gray-200 dark:border-gray-700">
        <form @submit.prevent="sendChatMessage" class="flex gap-2">
          <input 
            type="text" 
            v-model="chatInput" 
            placeholder="Ask me anything..." 
            class="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800"
          >
          <button 
            type="submit" 
            :disabled="!chatInput.trim()"
            class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-400"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { format } from 'date-fns'

export default {
  name: 'HomeView',
  data() {
    return {
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'Vue.js', level: 85 },
        { name: 'React', level: 80 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Node.js', level: 75 },
        { name: 'Express', level: 70 },
        { name: 'TypeScript', level: 65 },
        { name: 'UI/UX Design', level: 80 }
      ],
      projects: [
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
      ],
      contactForm: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      submitting: false,
      formMessage: '',
      formSuccess: false,
      chatbotOpen: false,
      chatMessages: [
        {
          text: 'Hello! I\'m your portfolio assistant. How can I help you today?',
          isUser: false,
          timestamp: new Date()
        }
      ],
      chatInput: ''
    }
  },
  methods: {
    async submitContactForm() {
      this.submitting = true;
      this.formMessage = '';
      
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.contactForm)
        });
        
        const data = await response.json();
        
        if (response.ok) {
          this.formSuccess = true;
          this.formMessage = 'Your message has been sent successfully!';
          // Reset form
          this.contactForm = {
            name: '',
            email: '',
            subject: '',
            message: ''
          };
        } else {
          this.formSuccess = false;
          this.formMessage = data.message || 'There was an error sending your message. Please try again.';
        }
      } catch (error) {
        this.formSuccess = false;
        this.formMessage = 'Network error. Please check your connection and try again.';
        console.error('Error submitting form:', error);
      } finally {
        this.submitting = false;
      }
    },
    toggleChatbot() {
      this.chatbotOpen = !this.chatbotOpen;
      if (this.chatbotOpen) {
        this.$nextTick(() => {
          this.scrollChatToBottom();
        });
      }
    },
    async sendChatMessage() {
      if (!this.chatInput.trim()) return;
      
      // Add user message
      const userMessage = {
        text: this.chatInput,
        isUser: true,
        timestamp: new Date()
      };
      this.chatMessages.push(userMessage);
      
      // Clear input
      const userInput = this.chatInput;
      this.chatInput = '';
      
      // Scroll to bottom
      this.$nextTick(() => {
        this.scrollChatToBottom();
      });
      
      try {
        // Send to API
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ message: userInput })
        });
        
        const data = await response.json();
        
        // Add bot response
        this.chatMessages.push({
          text: data.response || "I'm sorry, I couldn't process your request. Please try again.",
          isUser: false,
          timestamp: new Date()
        });
        
        // Scroll to bottom again after response
        this.$nextTick(() => {
          this.scrollChatToBottom();
        });
      } catch (error) {
        console.error('Error sending chat message:', error);
        this.chatMessages.push({
          text: "Sorry, there was an error processing your message. Please try again.",
          isUser: false,
          timestamp: new Date()
        });
        
        this.$nextTick(() => {
          this.scrollChatToBottom();
        });
      }
    },
    scrollChatToBottom() {
      if (this.$refs.chatContainer) {
        this.$refs.chatContainer.scrollTop = this.$refs.chatContainer.scrollHeight;
      }
    },
    formatTime(date) {
      return format(new Date(date), 'h:mm a');
    }
  }
}
</script>