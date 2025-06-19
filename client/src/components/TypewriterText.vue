
<template>
  <span>{{ displayText }}</span>
</template>

<script>
export default {
  name: 'TypewriterText',
  props: {
    text: {
      type: String,
      required: true
    },
    speed: {
      type: Number,
      default: 100
    }
  },
  data() {
    return {
      displayText: '',
      currentIndex: 0
    }
  },
  mounted() {
    this.typeText()
  },
  methods: {
    typeText() {
      if (this.currentIndex < this.text.length) {
        this.displayText += this.text.charAt(this.currentIndex)
        this.currentIndex++
        setTimeout(this.typeText, this.speed)
      }
    }
  }
}
</script>
