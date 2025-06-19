
<template>
  <div 
    class="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50"
  >
    <div 
      class="h-full bg-blue-600 transition-all duration-150 ease-out"
      :style="{ width: scrollProgress + '%' }"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'ScrollProgress',
  data() {
    return {
      scrollProgress: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScrollProgress)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.updateScrollProgress)
  },
  methods: {
    updateScrollProgress() {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      this.scrollProgress = Math.min(scrollPercent, 100)
    }
  }
}
</script>
