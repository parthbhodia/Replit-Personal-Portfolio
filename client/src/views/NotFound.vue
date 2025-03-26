<template>
  <div class="min-h-screen w-full flex items-center justify-center bg-light">
    <div class="w-full max-w-md mx-4 p-8 bg-white rounded-lg shadow-md">
      <div class="flex mb-4 gap-2 items-center">
        <i class="bx bx-error-circle text-4xl text-red-500"></i>
        <h1 class="text-2xl font-bold text-dark">404 Page Not Found</h1>
      </div>

      <p class="mt-4 text-dark-lighter mb-6">
        The page you are looking for doesn't exist or has been moved.
      </p>
      
      <router-link 
        to="/" 
        class="inline-block bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded-lg transition-colors"
      >
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
