<template>
  <nav class="navbar-fixed fixed top-0 left-0 w-full bg-white bg-opacity-80 z-50 shadow-sm">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <a href="#home" class="text-2xl font-bold text-primary">Alex<span class="text-dark">.dev</span></a>
      
      <!-- Desktop Navigation -->
      <div class="hidden md:flex space-x-8">
        <a 
          v-for="item in navigationItems" 
          :key="item.link" 
          :href="item.link" 
          class="font-medium text-dark-lighter hover:text-primary transition-colors"
        >
          {{ item.text }}
        </a>
      </div>
      
      <!-- Mobile Navigation Button -->
      <button 
        @click="toggleMobileMenu" 
        class="md:hidden text-dark-lighter focus:outline-none"
      >
        <i class="bx bx-menu text-3xl"></i>
      </button>
    </div>
    
    <!-- Mobile Navigation Menu -->
    <div 
      v-show="isMobileMenuOpen" 
      class="md:hidden bg-white shadow-lg absolute w-full"
    >
      <div class="container mx-auto px-4 py-4 flex flex-col space-y-4">
        <a 
          v-for="item in navigationItems" 
          :key="item.link" 
          :href="item.link" 
          class="font-medium text-dark-lighter hover:text-primary transition-colors py-2"
          @click="closeMobileMenu"
        >
          {{ item.text }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheNavbar',
  data() {
    return {
      isMobileMenuOpen: false,
      navigationItems: [
        { text: 'About', link: '#about' },
        { text: 'Skills', link: '#skills' },
        { text: 'Projects', link: '#projects' },
        { text: 'Contact', link: '#contact' }
      ]
    }
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false
    },
    handleScroll() {
      // Future improvement: Add scroll-activated highlighting for current section
    }
  },
  mounted() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault()
        const targetId = anchor.getAttribute('href')
        const targetElement = document.querySelector(targetId)
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          })
        }
      })
    })
    
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
