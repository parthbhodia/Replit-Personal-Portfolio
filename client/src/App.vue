
<template>
  <div class="app">
    <CustomCursor />
    <router-view />
  </div>
</template>

<script>
import CustomCursor from './components/CustomCursor.vue'

export default {
  name: 'App',
  components: {
    CustomCursor
  },
  mounted() {
    this.applyInitialTheme()
  },
  methods: {
    getInitialTheme() {
      if (typeof window !== 'undefined') {
        const storedTheme = window.localStorage.getItem('theme')
        if (storedTheme) {
          return storedTheme
        }
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          return 'dark'
        }
      }
      return 'light'
    },
    applyInitialTheme() {
      const theme = this.getInitialTheme()
      if (theme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }
}
</script>
