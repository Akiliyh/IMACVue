import { createWebHistory, createRouter } from 'vue-router'

import HomePage from './pages/HomePage.vue'
import GamePage from './pages/WordGame.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/game', component: GamePage },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
