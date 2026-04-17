import { createWebHistory, createRouter } from 'vue-router'

import HomePage from './pages/HomePage.vue'
import GamePage from './pages/WordGame.vue'
import ScorePage from './pages/HighscorePage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/game', component: GamePage },
  { path: '/records', component: ScorePage },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
