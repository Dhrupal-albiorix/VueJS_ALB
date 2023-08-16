// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    beforeRouteLeave(to, from, next) {
      location.reload()
    }
  },
  {
    path: '/AddEmp',
    name: 'AddEmp',
    component: () => import('../components/AddEmp.vue'),
  },
  {
    path: '/BankDetails',
    name: 'BankDetails',
    component: () => import('../components/BankDetails.vue'),
  },
  {
    path: '/ProfessionalDetails',
    name: 'ProfessionalDetails',
    component: () => import('../components/ProfessionalDetails.vue'),
  },
  {
    path: '/EducationDetails',
    name: 'EducationDetails',
    component: () => import('../components/EducationDetails.vue'),
  },
  {
    path: '/ExperienceDetails',
    name: 'ExperienceDetails',
    component: () => import('../components/ExperienceDetails.vue'),
  },
  {
    path: '/CurrentOrganization',
    name: 'CurrentOrganization',
    component: () => import('../components/CurrentOrganization.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
