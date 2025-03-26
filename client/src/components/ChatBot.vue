<template>
  <div id="chat-widget" class="fixed bottom-6 right-6 z-50">
    <!-- Chat Toggle Button -->
    <button 
      @click="toggleChat"
      class="bg-primary hover:bg-primary-dark text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all focus:outline-none"
    >
      <i v-if="!isChatOpen" class="bx bx-message-dots text-2xl"></i>
      <i v-else class="bx bx-x text-2xl"></i>
    </button>
    
    <!-- Chat Window -->
    <div 
      v-show="isChatOpen" 
      class="bg-white rounded-xl shadow-xl w-80 md:w-96 overflow-hidden transform transition-all duration-300 ease-in-out"
      :class="{'opacity-0 scale-95': !isChatOpen, 'opacity-100 scale-100': isChatOpen}"
    >
      <!-- Chat Header -->
      <div class="bg-primary text-white p-4 flex justify-between items-center">
        <div class="flex items-center">
          <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary mr-3">
            <i class="bx bx-bot text-xl"></i>
          </div>
          <div>
            <h3 class="font-bold">Alex Bot</h3>
            <p class="text-xs opacity-80">Ask me anything about Alex's work</p>
          </div>
        </div>
      </div>
      
      <!-- Chat Messages -->
      <div ref="chatMessages" class="p-4 h-80 overflow-y-auto bg-light">
        <!-- Bot welcome message -->
        <div class="chat-message flex mb-4">
          <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 mr-2">
            <i class="bx bx-bot text-sm"></i>
          </div>
          <div class="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[80%]">
            <p class="text-sm">
              Hi there! I'm Alex's virtual assistant. How can I help you today? Feel free to ask about Alex's skills, projects, or availability.
            </p>
            <span class="text-xs text-dark-lightest block mt-1">{{ formatTime(new Date()) }}</span>
          </div>
        </div>
        
        <div v-for="(message, index) in chatMessages" :key="index" class="chat-message flex mb-4" :class="{'justify-end': message.isUser}">
          <template v-if="message.isUser">
            <div class="bg-primary p-3 rounded-lg rounded-tr-none shadow-sm max-w-[80%]">
              <p class="text-sm text-white">{{ message.text }}</p>
              <span class="text-xs text-white text-opacity-80 block mt-1">{{ formatTime(message.timestamp) }}</span>
            </div>
          </template>
          <template v-else>
            <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 mr-2">
              <i class="bx bx-bot text-sm"></i>
            </div>
            <div class="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[80%]">
              <p class="text-sm">{{ message.text }}</p>
              <span class="text-xs text-dark-lightest block mt-1">{{ formatTime(message.timestamp) }}</span>
            </div>
          </template>
        </div>
        
        <div v-if="isTyping" class="chat-message flex mb-4">
          <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 mr-2">
            <i class="bx bx-bot text-sm"></i>
          </div>
          <div class="bg-white p-3 rounded-lg rounded-tl-none shadow-sm">
            <div class="flex space-x-1">
              <div class="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
              <div class="w-2 h-2 bg-primary rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
              <div class="w-2 h-2 bg-primary rounded-full animate-bounce" style="animation-delay: 0.4s"></div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Chat Input -->
      <div class="p-4 border-t border-light-darkest">
        <form @submit.prevent="sendMessage" class="flex items-center">
          <input 
            type="text" 
            v-model="chatInput" 
            class="flex-grow px-4 py-2 border border-light-darkest rounded-l-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
            placeholder="Type a message..."
            :disabled="isTyping"
          />
          <button 
            type="submit" 
            class="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-r-lg transition-colors"
            :disabled="isTyping || !chatInput.trim()"
          >
            <i class="bx bx-send"></i>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatBot',
  data() {
    return {
      isChatOpen: false,
      chatInput: '',
      chatMessages: [],
      isTyping: false
    }
  },
  methods: {
    toggleChat() {
      this.isChatOpen = !this.isChatOpen
      if (this.isChatOpen) {
        this.$nextTick(() => {
          this.scrollToBottom()
        })
      }
    },
    async sendMessage() {
      if (!this.chatInput.trim()) return
      
      const userMessage = {
        text: this.chatInput.trim(),
        isUser: true,
        timestamp: new Date()
      }
      
      this.chatMessages.push(userMessage)
      this.chatInput = ''
      this.scrollToBottom()
      
      // Show typing indicator
      this.isTyping = true
      
      try {
        // Send message to backend API
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ message: userMessage.text })
        })
        
        if (!response.ok) {
          throw new Error('Failed to get response')
        }
        
        const data = await response.json()
        
        // Simulate a delay for typing effect
        setTimeout(() => {
          this.isTyping = false
          
          const botMessage = {
            text: data.response,
            isUser: false,
            timestamp: new Date()
          }
          
          this.chatMessages.push(botMessage)
          this.$nextTick(() => {
            this.scrollToBottom()
          })
        }, 1000)
      } catch (error) {
        console.error('Chat error:', error)
        
        // Fallback response in case of error
        setTimeout(() => {
          this.isTyping = false
          
          const botMessage = {
            text: "I'm sorry, I couldn't process your request. Please try again later.",
            isUser: false,
            timestamp: new Date()
          }
          
          this.chatMessages.push(botMessage)
          this.$nextTick(() => {
            this.scrollToBottom()
          })
        }, 1000)
      }
    },
    formatTime(date) {
      return new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    },
    scrollToBottom() {
      const container = this.$refs.chatMessages
      if (container) {
        container.scrollTop = container.scrollHeight
      }
    }
  },
  mounted() {
    // Initial focus when component is mounted
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isChatOpen) {
        this.isChatOpen = false
      }
    })
  }
}
</script>

<style scoped>
.animate-bounce {
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}
</style>
