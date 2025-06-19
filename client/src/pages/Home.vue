
<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
    <ScrollProgress />
    
    <!-- Hero Section -->
    <ParallaxHeader />
    
    <!-- About Section -->
    <ParallaxSection 
      id="about"
      class="py-20 bg-white dark:bg-gray-900"
    >
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            About Me
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            I'm a passionate web developer with expertise in modern frontend and backend technologies. 
            I love creating beautiful, functional, and user-friendly applications that solve real-world problems.
          </p>
          <div class="grid md:grid-cols-3 gap-8 mt-12">
            <div class="text-center">
              <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="bx bx-code-alt text-2xl text-blue-600 dark:text-blue-400"></i>
              </div>
              <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Frontend Development</h3>
              <p class="text-gray-600 dark:text-gray-300">Vue.js, React, TypeScript, Tailwind CSS</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="bx bx-server text-2xl text-green-600 dark:text-green-400"></i>
              </div>
              <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Backend Development</h3>
              <p class="text-gray-600 dark:text-gray-300">Node.js, Express, PostgreSQL, REST APIs</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="bx bx-mobile-alt text-2xl text-purple-600 dark:text-purple-400"></i>
              </div>
              <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Responsive Design</h3>
              <p class="text-gray-600 dark:text-gray-300">Mobile-first approach, cross-browser compatibility</p>
            </div>
          </div>
        </div>
      </div>
    </ParallaxSection>

    <!-- Skills Section -->
    <ParallaxSection 
      id="skills"
      class="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Skills & Technologies
          </h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div 
              v-for="skill in skills" 
              :key="skill.name"
              class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div class="text-center">
                <i :class="skill.icon" class="text-4xl mb-4" :style="{ color: skill.color }"></i>
                <h3 class="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{{ skill.name }}</h3>
                <p class="text-sm text-gray-600 dark:text-gray-300">{{ skill.level }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ParallaxSection>

    <!-- Projects Section -->
    <ParallaxSection 
      id="projects"
      class="py-20 bg-white dark:bg-gray-900"
    >
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedProjectCard 
              v-for="project in projects"
              :key="project.id"
              :project="project"
            />
          </div>
        </div>
      </div>
    </ParallaxSection>

    <!-- Contact Section -->
    <ParallaxSection 
      id="contact"
      class="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-12">
            I'm always interested in new opportunities and collaborations. 
            Let's build something amazing together!
          </p>
          <div class="flex justify-center space-x-6">
            <a 
              href="mailto:alex@example.com"
              class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <i class="bx bx-envelope mr-2"></i>
              Email Me
            </a>
            <a 
              href="#"
              class="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <i class="bx bxl-linkedin mr-2"></i>
              LinkedIn
            </a>
            <a 
              href="#"
              class="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <i class="bx bxl-github mr-2"></i>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </ParallaxSection>
  </div>
</template>

<script>
import ScrollProgress from '../components/ScrollProgress.vue'
import ParallaxHeader from '../components/ParallaxHeader.vue'
import ParallaxSection from '../components/ParallaxSection.vue'
import AnimatedProjectCard from '../components/AnimatedProjectCard.vue'

export default {
  name: 'Home',
  components: {
    ScrollProgress,
    ParallaxHeader,
    ParallaxSection,
    AnimatedProjectCard
  },
  data() {
    return {
      skills: [
        {
          name: 'Vue.js',
          icon: 'bx bxl-vuejs',
          color: '#4FC08D',
          level: 'Advanced'
        },
        {
          name: 'JavaScript',
          icon: 'bx bxl-javascript',
          color: '#F7DF1E',
          level: 'Expert'
        },
        {
          name: 'Node.js',
          icon: 'bx bxl-nodejs',
          color: '#339933',
          level: 'Advanced'
        },
        {
          name: 'PostgreSQL',
          icon: 'bx bxl-postgresql',
          color: '#336791',
          level: 'Intermediate'
        },
        {
          name: 'HTML5',
          icon: 'bx bxl-html5',
          color: '#E34F26',
          level: 'Expert'
        },
        {
          name: 'CSS3',
          icon: 'bx bxl-css3',
          color: '#1572B6',
          level: 'Expert'
        },
        {
          name: 'Tailwind',
          icon: 'bx bxl-tailwind-css',
          color: '#06B6D4',
          level: 'Advanced'
        },
        {
          name: 'Git',
          icon: 'bx bxl-git',
          color: '#F05032',
          level: 'Advanced'
        }
      ],
      projects: [
        {
          id: 1,
          title: 'E-commerce Platform',
          description: 'A full-stack e-commerce solution with Vue.js frontend and Node.js backend.',
          image: '/api/placeholder/400/250',
          tags: ['Vue.js', 'Node.js', 'PostgreSQL', 'Stripe'],
          github: '#',
          demo: '#'
        },
        {
          id: 2,
          title: 'Task Management App',
          description: 'A collaborative task management application with real-time updates.',
          image: '/api/placeholder/400/250',
          tags: ['Vue.js', 'Express', 'Socket.io', 'MongoDB'],
          github: '#',
          demo: '#'
        },
        {
          id: 3,
          title: 'Weather Dashboard',
          description: 'A responsive weather dashboard with location-based forecasts.',
          image: '/api/placeholder/400/250',
          tags: ['Vue.js', 'OpenWeather API', 'Chart.js'],
          github: '#',
          demo: '#'
        }
      ]
    }
  }
}
</script>
