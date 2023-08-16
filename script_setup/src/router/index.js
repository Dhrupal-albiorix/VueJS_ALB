import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/ProductsPage',
    name: 'ProductsPage',
    component: () => import('../components/ProductsPage.vue')
  },
  {
    path: '/ComposableProduct',
    name: 'ComposableProduct',
    component: () => import('../components/ComposableProduct.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
