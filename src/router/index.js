import { createRouter, createWebHistory } from 'vue-router'

import "@/assets/style.css"


const routes = [
  {
    path: '/',
    name: 'step1',
    component: () => import("@/views/StepOne")
  },
  {
    path: '/step2',
    name: 'step2',
    component: () => import("@/views/StepTwo")
  },
  {
    path: '/step3',
    name: 'step3',
    component: () => import("@/views/StepThree")
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
