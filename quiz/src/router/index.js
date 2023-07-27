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
    path: '/login',
    name: 'login',
    component: () => import('../page/LogIn.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../page/SignUp.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../components/AdminComp.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../components/UserComp.vue')
  },
  {
    path: '/upload-quiz',
    name: 'upload-quiz',
    component: () => import('../components/UploadQuiz.vue')
  },
  {
    path: '/try-quiz',
    name: 'try-quiz',
    component: () => import('../components/AttemptQuize.vue')
  },
  {
    path: '/edit-quiz',
    name: 'edit-quiz',
    component: () => import('../components/EditQuiz.vue')
  },
  {
    path: '/wrong',
    name: 'wrong',
    component: () => import('../page/NotVelid.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/UserProfile.vue')
  },
  {
    path: '/full-profile',
    name: '/full-profile',
    component: () => import('../components/VisitUser.vue')
  },
  {
    path: '/:notFound(.*)',
    name: 'not-found',
    component: HomeView,
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
