
<template>
  <section 
    ref="section"
    :class="$attrs.class"
    :style="{ transform: `translateY(${offset}px)` }"
  >
    <slot />
  </section>
</template>

<script>
export default {
  name: 'ParallaxSection',
  inheritAttrs: false,
  data() {
    return {
      offset: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (!this.$refs.section) return
      
      const rect = this.$refs.section.getBoundingClientRect()
      const scrolled = window.pageYOffset
      const rate = scrolled * -0.5
      
      if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
        this.offset = rate
      }
    }
  }
}
</script>
</template>
