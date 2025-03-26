<template>
  <footer class="bg-dark text-white py-12">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-6 md:mb-0">
          <a href="#home" class="text-2xl font-bold text-white">Alex<span class="text-primary">.dev</span></a>
          <p class="mt-2 text-light-darker max-w-md">
            Creating modern web experiences with a focus on performance, usability, and aesthetic appeal.
          </p>
        </div>
        
        <div class="flex flex-col items-center md:items-end">
          <p class="mb-2 text-light-darker">© {{ new Date().getFullYear() }} Alex Chen. All rights reserved.</p>
          <div class="flex space-x-4 mt-2">
            <a 
              v-for="(social, index) in socialLinks" 
              :key="index" 
              :href="social.url" 
              class="text-light-darker hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i :class="`bx ${social.icon} text-xl`"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  data() {
    return {
      socialLinks: [
        { icon: 'bxl-github', url: '#' },
        { icon: 'bxl-linkedin', url: '#' },
        { icon: 'bxl-twitter', url: '#' },
        { icon: 'bxl-dribbble', url: '#' }
      ]
    }
  }
}
</script>
