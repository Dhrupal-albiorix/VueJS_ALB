import Vue from 'vue'
import App from './App.vue'
import router from './router'
// Import and use the store.js file in our main.js
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,//store added here // Now, this.$store is accessible from any component in the app.
  render: h => h(App)
}).$mount('#app')
