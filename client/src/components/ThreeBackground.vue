
<template>
  <div ref="container" class="absolute inset-0"></div>
</template>

<script>
import * as THREE from 'three'

export default {
  name: 'ThreeBackground',
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      particles: null,
      animationId: null
    }
  },
  mounted() {
    this.initThree()
    this.animate()
    window.addEventListener('resize', this.handleResize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
    if (this.animationId) {
      cancelAnimationFrame(this.animationId)
    }
    if (this.renderer) {
      this.renderer.dispose()
    }
  },
  methods: {
    initThree() {
      // Scene
      this.scene = new THREE.Scene()

      // Camera
      this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      )
      this.camera.position.z = 5

      // Renderer
      this.renderer = new THREE.WebGLRenderer({ alpha: true })
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      this.$refs.container.appendChild(this.renderer.domElement)

      // Particles
      const geometry = new THREE.BufferGeometry()
      const particlesCount = 5000

      const posArray = new Float32Array(particlesCount * 3)
      for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 10
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))

      const material = new THREE.PointsMaterial({
        size: 0.005,
        color: 0x3b82f6
      })

      this.particles = new THREE.Points(geometry, material)
      this.scene.add(this.particles)
    },
    animate() {
      this.animationId = requestAnimationFrame(this.animate)

      if (this.particles) {
        this.particles.rotation.x += 0.0005
        this.particles.rotation.y += 0.0005
      }

      this.renderer.render(this.scene, this.camera)
    },
    handleResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(window.innerWidth, window.innerHeight)
    }
  }
}
</script>
