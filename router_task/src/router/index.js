import Vue from 'vue'
import VueRouter from 'vue-router'
import FormView from '../views/FormView.vue'
import HomePage from '../views/HomePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'form',
    component: FormView
  },
  {
    path: '/homepage',
    name: 'homepage',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/setting',
    name: 'setting',
    component: () => import('../views/ChangeSettings.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../page/AdminPage.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../page/LogIn.vue')
  },
  {
    path: '/wrong',
    name: 'wrong',
    component: () => import('../page/NotAllowed.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../page/UserPage.vue')
  },
  {
    path: '/:notFound(.*)',
    name: 'not-found',
    component: HomePage,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
