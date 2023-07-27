import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false


import VirtualList from "vue-virtual-scroll-list";

Vue.component("virtual-list", VirtualList);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
