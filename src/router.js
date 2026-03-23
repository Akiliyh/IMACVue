import { createWebHistory, createRouter } from 'vue-router'

import HomePage from './HomePage.vue'
import GamePage from './WordGame.vue'

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
