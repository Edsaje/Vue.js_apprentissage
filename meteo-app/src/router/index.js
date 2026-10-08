import { createRouter, createWebHistory } from 'vue-router'
import CitiesList from '@/views/CitiesList.vue'
import CityCard from '@/components/CityCard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/villes',
      name: 'cities',
      component: CitiesList
    },
    {
      path: '/ville',
      name: 'city',
      component: CityCard
    }
  ],
})

export default router
