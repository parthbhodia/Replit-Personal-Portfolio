
<template>
  <button
    @click="toggleTheme"
    class="p-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-colors"
    :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <i :class="isDark ? 'bx bx-sun' : 'bx bx-moon'" class="text-xl"></i>
  </button>
</template>

<script>
export default {
  name: 'ThemeToggle',
  data() {
    return {
      isDark: false
    }
  },
  mounted() {
    this.isDark = document.documentElement.classList.contains('dark')
  },
  methods: {
    toggleTheme() {
      this.isDark = !this.isDark
      
      if (this.isDark) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
    }
  }
}
</script>
