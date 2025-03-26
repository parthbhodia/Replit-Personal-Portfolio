<template>
  <section id="about" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <div class="w-20 h-1 bg-primary mx-auto"></div>
      </div>
      
      <div class="flex flex-col md:flex-row md:items-center">
        <div class="md:w-2/5 mb-10 md:mb-0">
          <div class="relative">
            <div class="absolute -top-4 -right-4 w-full h-full border-2 border-primary rounded-xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Alex working on code" 
              class="w-full h-auto rounded-xl shadow-md relative z-10"
            />
          </div>
        </div>
        
        <div class="md:w-3/5 md:pl-16">
          <h3 class="text-2xl font-bold mb-4 text-primary">Hi, I'm Alex Chen</h3>
          <p class="text-lg mb-6 text-dark-lighter leading-relaxed">
            I'm a passionate web developer with over 5 years of experience building modern, 
            responsive applications. My journey began with simple HTML and CSS websites, and
            has evolved to complex full-stack applications using Vue.js and Node.js.
          </p>
          <p class="text-lg mb-6 text-dark-lighter leading-relaxed">
            I believe in creating digital experiences that are not only visually appealing but also 
            highly functional and accessible. My approach focuses on clean code, user-centered design, 
            and performance optimization.
          </p>
          
          <div class="grid grid-cols-2 gap-6 mt-8">
            <div v-for="(item, index) in personalInfo" :key="index">
              <h4 class="font-bold mb-2">{{ item.label }}</h4>
              <p class="text-dark-lighter">{{ item.value }}</p>
            </div>
          </div>
          
          <div class="mt-8 flex space-x-4">
            <a 
              v-for="(social, index) in socialLinks" 
              :key="index" 
              :href="social.url" 
              class="text-dark-lighter hover:text-primary text-2xl transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i :class="`bx ${social.icon}`"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  data() {
    return {
      personalInfo: [
        { label: 'Location', value: 'San Francisco, CA' },
        { label: 'Email', value: 'hello@alexchen.dev' },
        { label: 'Education', value: 'B.S. Computer Science' },
        { label: 'Experience', value: '5+ Years' }
      ],
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
