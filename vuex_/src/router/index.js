import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

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
    path: '/about2',
    name: 'about2',
    component: () => import('../views/AboutView2.vue')
  },
  {
    path: '/action',
    name: 'action',
    component: () => import('../views/ActionView.vue')
  },
  {
    path: '/map',
    name: 'mapget',
    component: () => import('../views/MapGetters.vue')
  },
  {
    path: '/mapAct',
    name: 'mapaction',
    component: () => import('../views/MapAction.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
