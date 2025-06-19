
<template>
  <div 
    class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="relative overflow-hidden">
      <img 
        :src="project.image" 
        :alt="project.title"
        class="w-full h-48 object-cover transition-transform duration-300"
        :class="{ 'scale-110': isHovered }"
      >
      <div 
        class="absolute inset-0 bg-blue-600/90 flex items-center justify-center opacity-0 transition-opacity duration-300"
        :class="{ 'opacity-100': isHovered }"
      >
        <div class="flex space-x-4">
          <a 
            :href="project.github"
            class="p-2 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-colors"
          >
            <i class="bx bxl-github text-xl"></i>
          </a>
          <a 
            :href="project.demo"
            class="p-2 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-colors"
          >
            <i class="bx bx-link-external text-xl"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="p-6">
      <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
        {{ project.title }}
      </h3>
      <p class="text-gray-600 dark:text-gray-300 mb-4">
        {{ project.description }}
      </p>
      <div class="flex flex-wrap gap-2">
        <span 
          v-for="tag in project.tags"
          :key="tag"
          class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-sm rounded-full"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnimatedProjectCard',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isHovered: false
    }
  }
}
</script>
