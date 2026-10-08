import { createRouter, createWebHistory } from 'vue-router'
import CitiesList from '@/views/CitiesList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/villes',
      name: 'cities',
      component: CitiesList
    }
  ],
})

export default router
