
<template>
  <div 
    ref="cursor"
    class="custom-cursor"
    :class="{ 'cursor-hover': isHovering }"
  ></div>
</template>

<script>
export default {
  name: 'CustomCursor',
  data() {
    return {
      isHovering: false
    }
  },
  mounted() {
    this.initCursor()
  },
  beforeUnmount() {
    this.removeCursor()
  },
  methods: {
    initCursor() {
      document.addEventListener('mousemove', this.handleMouseMove)
      document.addEventListener('mouseenter', this.handleMouseEnter)
      document.addEventListener('mouseleave', this.handleMouseLeave)
      
      // Add hover listeners to interactive elements
      const interactiveElements = document.querySelectorAll('a, button, [role="button"]')
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', this.handleElementHover)
        el.addEventListener('mouseleave', this.handleElementLeave)
      })
    },
    removeCursor() {
      document.removeEventListener('mousemove', this.handleMouseMove)
      document.removeEventListener('mouseenter', this.handleMouseEnter)
      document.removeEventListener('mouseleave', this.handleMouseLeave)
    },
    handleMouseMove(e) {
      if (this.$refs.cursor) {
        this.$refs.cursor.style.left = e.clientX + 'px'
        this.$refs.cursor.style.top = e.clientY + 'px'
      }
    },
    handleMouseEnter() {
      if (this.$refs.cursor) {
        this.$refs.cursor.style.opacity = '1'
      }
    },
    handleMouseLeave() {
      if (this.$refs.cursor) {
        this.$refs.cursor.style.opacity = '0'
      }
    },
    handleElementHover() {
      this.isHovering = true
    },
    handleElementLeave() {
      this.isHovering = false
    }
  }
}
</script>

<style scoped>
.custom-cursor {
  position: fixed;
  width: 20px;
  height: 20px;
  background-color: rgba(59, 130, 246, 0.5);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: all 0.1s ease;
  opacity: 0;
}

.cursor-hover {
  width: 40px;
  height: 40px;
  background-color: rgba(59, 130, 246, 0.2);
  border: 2px solid rgba(59, 130, 246, 0.8);
}

@media (max-width: 768px) {
  .custom-cursor {
    display: none;
  }
}
</style>
