import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/sign-up',
    name: 'sign-up',
    component: () => import('../components/SignUp.vue')
  },
  {
    path: '/Login',
    name: 'login',
    component: () => import('../components/LogIn.vue')
  },
  {
    path: '/UsersData',
    name: 'UsersData',
    component: () => import('../components/UsersData.vue')
  },
  {
    path: '/EditUser',
    name: 'EditUser',
    component: () => import('../components/EditUser.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
