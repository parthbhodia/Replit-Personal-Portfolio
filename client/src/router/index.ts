import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Handle scroll behavior when navigating
    if (savedPosition) {
      return savedPosition
    }
    
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    
    return { top: 0 }
  }
})

export default router