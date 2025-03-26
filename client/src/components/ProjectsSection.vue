<template>
  <section id="projects" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
        <div class="w-20 h-1 bg-primary mx-auto"></div>
        <p class="mt-6 max-w-2xl mx-auto text-dark-lightest text-lg">
          Here are some of my recent projects. Each one represents my commitment to quality and innovation.
        </p>
      </div>
      
      <div class="flex flex-wrap -mx-4">
        <div 
          v-for="(project, index) in projects" 
          :key="index" 
          class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
        >
          <div class="project-card h-full bg-white rounded-xl overflow-hidden shadow-md border border-light-darkest">
            <div class="relative overflow-hidden">
              <img 
                :src="project.image" 
                :alt="project.title" 
                class="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
              />
              <div 
                class="absolute top-4 right-4 text-white text-xs py-1 px-2 rounded-full font-medium"
                :class="`bg-${project.badgeColor}`"
              >
                {{ project.badge }}
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
              <p class="text-dark-lightest mb-4">
                {{ project.description }}
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span 
                  v-for="(tech, techIndex) in project.technologies" 
                  :key="techIndex" 
                  class="text-xs bg-light-darker py-1 px-3 rounded-full"
                >
                  {{ tech }}
                </span>
              </div>
              <div class="flex justify-between">
                <a 
                  :href="project.demoUrl" 
                  class="text-primary hover:text-primary-dark font-medium transition-colors"
                >
                  View Project <i class="bx bx-right-arrow-alt align-middle"></i>
                </a>
                <a 
                  :href="project.githubUrl" 
                  class="text-dark-lightest hover:text-dark font-medium transition-colors"
                >
                  <i class="bx bxl-github text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-8">
        <a href="#" class="inline-flex items-center text-primary hover:text-primary-dark font-medium">
          View More Projects <i class="bx bx-right-arrow-alt ml-2"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsSection',
  data() {
    return {
      projects: [
        {
          title: 'E-commerce Platform',
          description: 'A fully-featured e-commerce solution with product catalogue, cart management, user accounts, and payment processing.',
          image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe API'],
          demoUrl: '#',
          githubUrl: '#',
          badge: 'Vue.js',
          badgeColor: 'primary'
        },
        {
          title: 'Task Management App',
          description: 'A collaborative task management tool with real-time updates, team workspaces, and detailed reporting features.',
          image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          technologies: ['Vue.js', 'Express', 'Socket.io', 'PostgreSQL'],
          demoUrl: '#',
          githubUrl: '#',
          badge: 'API Dev',
          badgeColor: 'secondary'
        },
        {
          title: 'Marketing Dashboard',
          description: 'A comprehensive dashboard for marketing analytics with customizable widgets, data visualization, and reporting tools.',
          image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          technologies: ['Vue.js', 'D3.js', 'Firebase', 'REST APIs'],
          demoUrl: '#',
          githubUrl: '#',
          badge: 'Data Vis',
          badgeColor: 'accent'
        },
        {
          title: 'Social Media Platform',
          description: 'A niche social platform for creative professionals with portfolio showcasing, networking, and project collaboration.',
          image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          technologies: ['Vue.js', 'GraphQL', 'Apollo', 'AWS S3'],
          demoUrl: '#',
          githubUrl: '#',
          badge: 'Full Stack',
          badgeColor: 'primary'
        },
        {
          title: 'Weather Application',
          description: 'A feature-rich weather app with location-based forecasts, historical data analysis, and customizable alerts.',
          image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          technologies: ['Vue.js', 'OpenWeather API', 'GeoLocation', 'PWA'],
          demoUrl: '#',
          githubUrl: '#',
          badge: 'API Integration',
          badgeColor: 'secondary'
        },
        {
          title: 'Headless CMS',
          description: 'A modern headless CMS with a user-friendly interface, customizable content types, and robust API capabilities.',
          image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          technologies: ['Vue.js', 'Node.js', 'RESTful API', 'MongoDB'],
          demoUrl: '#',
          githubUrl: '#',
          badge: 'CMS',
          badgeColor: 'accent'
        }
      ]
    }
  }
}
</script>
