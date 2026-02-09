import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './TestPage.vue'
import AboutView from './WordGame.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
