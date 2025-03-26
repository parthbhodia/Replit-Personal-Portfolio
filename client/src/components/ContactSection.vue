<template>
  <section id="contact" class="py-20 bg-light">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        <div class="w-20 h-1 bg-primary mx-auto"></div>
        <p class="mt-6 max-w-2xl mx-auto text-dark-lightest text-lg">
          Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
        </p>
      </div>
      
      <div class="flex flex-col md:flex-row">
        <div class="md:w-1/2 md:pr-8 mb-10 md:mb-0">
          <div class="bg-white p-8 rounded-xl shadow-sm">
            <h3 class="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div class="space-y-6">
              <div v-for="(contact, index) in contactInfo" :key="index" class="flex items-start">
                <div class="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                  <i :class="`bx ${contact.icon} text-primary text-2xl`"></i>
                </div>
                <div>
                  <h4 class="font-medium mb-1">{{ contact.title }}</h4>
                  <p class="text-dark-lightest">{{ contact.value }}</p>
                </div>
              </div>
            </div>
            
            <div class="mt-10">
              <h4 class="font-medium mb-4">Follow Me</h4>
              <div class="flex space-x-4">
                <a 
                  v-for="(social, index) in socialLinks" 
                  :key="index" 
                  :href="social.url" 
                  class="w-10 h-10 rounded-full bg-light-darker flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                >
                  <i :class="`bx ${social.icon}`"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div class="md:w-1/2 md:pl-8">
          <form 
            class="bg-white p-8 rounded-xl shadow-sm"
            @submit.prevent="submitForm"
          >
            <h3 class="text-2xl font-bold mb-6">Send Me a Message</h3>
            
            <div class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="formData.name"
                  class="w-full px-4 py-3 border border-light-darkest rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                  placeholder="John Doe"
                  required
                />
                <p v-if="errors.name" class="mt-1 text-red-500 text-sm">{{ errors.name }}</p>
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium mb-2">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="formData.email"
                  class="w-full px-4 py-3 border border-light-darkest rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                  placeholder="john@example.com"
                  required
                />
                <p v-if="errors.email" class="mt-1 text-red-500 text-sm">{{ errors.email }}</p>
              </div>
              
              <div>
                <label for="subject" class="block text-sm font-medium mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  v-model="formData.subject"
                  class="w-full px-4 py-3 border border-light-darkest rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                  placeholder="Project Inquiry"
                />
                <p v-if="errors.subject" class="mt-1 text-red-500 text-sm">{{ errors.subject }}</p>
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  v-model="formData.message"
                  rows="5" 
                  class="w-full px-4 py-3 border border-light-darkest rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition resize-none"
                  placeholder="Hello Alex, I'd like to discuss a potential project..."
                  required
                ></textarea>
                <p v-if="errors.message" class="mt-1 text-red-500 text-sm">{{ errors.message }}</p>
              </div>
              
              <button 
                type="submit" 
                class="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-colors"
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting">Sending...</span>
                <span v-else>Send Message</span>
              </button>
              
              <p v-if="submitStatus.message" class="text-center mt-4" :class="submitStatus.isError ? 'text-red-500' : 'text-green-500'">
                {{ submitStatus.message }}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  data() {
    return {
      contactInfo: [
        {
          title: 'Email',
          value: 'hello@alexchen.dev',
          icon: 'bx-envelope'
        },
        {
          title: 'Location',
          value: 'San Francisco, CA, USA',
          icon: 'bx-map'
        },
        {
          title: 'Working Hours',
          value: 'Monday - Friday, 9:00 AM - 6:00 PM PST',
          icon: 'bx-time-five'
        }
      ],
      socialLinks: [
        { icon: 'bxl-github', url: '#' },
        { icon: 'bxl-linkedin', url: '#' },
        { icon: 'bxl-twitter', url: '#' },
        { icon: 'bxl-dribbble', url: '#' }
      ],
      formData: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      errors: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      isSubmitting: false,
      submitStatus: {
        message: '',
        isError: false
      }
    }
  },
  methods: {
    validateForm() {
      let isValid = true
      this.errors = {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
      
      // Name validation
      if (!this.formData.name.trim()) {
        this.errors.name = 'Name is required'
        isValid = false
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!this.formData.email.trim()) {
        this.errors.email = 'Email is required'
        isValid = false
      } else if (!emailRegex.test(this.formData.email)) {
        this.errors.email = 'Please enter a valid email address'
        isValid = false
      }
      
      // Subject validation (optional)
      
      // Message validation
      if (!this.formData.message.trim()) {
        this.errors.message = 'Message is required'
        isValid = false
      } else if (this.formData.message.length < 10) {
        this.errors.message = 'Message should be at least 10 characters'
        isValid = false
      }
      
      return isValid
    },
    async submitForm() {
      if (!this.validateForm()) {
        return
      }
      
      this.isSubmitting = true
      this.submitStatus = { message: '', isError: false }
      
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.formData)
        })
        
        const data = await response.json()
        
        if (response.ok) {
          this.submitStatus = {
            message: 'Your message has been sent successfully! I\'ll get back to you soon.',
            isError: false
          }
          this.resetForm()
        } else {
          throw new Error(data.message || 'Failed to send message')
        }
      } catch (error) {
        this.submitStatus = {
          message: error.message || 'Something went wrong. Please try again later.',
          isError: true
        }
      } finally {
        this.isSubmitting = false
      }
    },
    resetForm() {
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  }
}
</script>
