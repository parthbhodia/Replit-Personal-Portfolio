<template>
  <section id="home" class="pt-32 pb-20 md:py-40">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row md:items-center">
        <div class="md:w-1/2 fadeIn">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Building <span class="text-primary">digital experiences</span> that matter
          </h1>
          <p class="text-xl md:text-2xl text-dark-lightest mb-8 max-w-xl">
            Full-stack developer specializing in Vue.js, Node.js, and responsive web applications.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="#projects" class="inline-block bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-colors">
              View My Work
            </a>
            <a href="#contact" class="inline-block bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium py-3 px-6 rounded-lg transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
        <div class="md:w-1/2 mt-12 md:mt-0 fadeIn">
          <div class="relative">
            <div class="absolute -top-6 -left-6 w-24 h-24 bg-accent opacity-10 rounded-full"></div>
            <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary opacity-10 rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Alex Chen - Web Developer" 
              class="w-full h-auto rounded-xl shadow-lg z-10 relative"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TheHero'
}
</script>
