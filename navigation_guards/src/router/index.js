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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/bfor',
    name: 'BeforeEnter',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BeforeEnter.vue'),
    beforeEnter: (to, from, next) => {
      console.log('BeforeEnter', to, 'BeforeEnter', from)
      const value = HomeView.data().value + Math.floor(Math.random() * 100);
      if (value % 2 == 0) {
        console.log(" to : ", to)
        console.log(" from : ", from)
        console.log("ndbfj", value)
        next()
      } else {
        console.log("Not -- ndbfj", value)
        next('/about')
      }
    },
  },
  {
    path: '/prop',
    name: 'prop',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PropComp.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  console.log(`Route to`, to)
  console.log(`Route from`, from)
  next();
});

router.afterEach((to, from) => {
  console.log(` afterEach : Route to`, to)
  console.log(` afterEach : Route from`, from)
})

export default router
