
<template>
  <section class="relative h-screen flex items-center justify-center overflow-hidden">
    <ThreeBackground />
    <div class="relative z-10 text-center text-white px-6">
      <h1 class="text-6xl md:text-8xl font-bold mb-6">
        <TypewriterText :text="'Alex Chen'" />
      </h1>
      <p class="text-xl md:text-2xl mb-8 opacity-90">
        Web Developer & Creative Problem Solver
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a 
          href="#projects"
          class="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          View My Work
        </a>
        <a 
          href="#contact"
          class="px-8 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
        >
          Get In Touch
        </a>
      </div>
      <ThemeToggle class="mt-8" />
    </div>
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <i class="bx bx-chevron-down text-white text-3xl"></i>
    </div>
  </section>
</template>

<script>
import ThreeBackground from './ThreeBackground.vue'
import TypewriterText from './TypewriterText.vue'
import ThemeToggle from './ThemeToggle.vue'

export default {
  name: 'ParallaxHeader',
  components: {
    ThreeBackground,
    TypewriterText,
    ThemeToggle
  }
}
</script>
