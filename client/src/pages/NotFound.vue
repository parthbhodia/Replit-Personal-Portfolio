
<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
    <div class="text-center">
      <h1 class="text-9xl font-bold text-gray-300 dark:text-gray-700">404</h1>
      <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Page Not Found</h2>
      <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
        The page you're looking for doesn't exist.
      </p>
      <router-link 
        to="/"
        class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        <i class="bx bx-home mr-2"></i>
        Go Home
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>
