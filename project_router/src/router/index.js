import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProductInfo from '../components/ProductInfo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    props: true
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: '/:id',
    name: 'info',
    component: ProductInfo,
    props: true
  },
  {
    path: '/:id/:notFound(.*)',
    name: 'not-found',
    component: HomeView,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      console.log("savedPosition", savedPosition)
      return {
        savedPosition
      };

      // return savedPosition;
    } else {
      console.log("savedPosition", savedPosition)
      return {
        x: 0,
        y: 0
      };

    }
  }
})
// router.beforeEach((to, from, next) => {
//   console.log(to, from)
//   next(function myfun() {

//   }
//   )
//   // to and from are both route objects. must call `next`.
// })
export default router
