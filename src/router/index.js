import { createRouter, createWebHashHistory } from 'vue-router'
import SqlExpressionSearch from '../views/SqlExpressionSearch.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: SqlExpressionSearch
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
