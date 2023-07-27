
<template>
  <div id="app">
    <hello-world />
  </div>
</template>


<script>
import { EventBus } from "./eventbus";

import HelloWorld from "./components/HelloWorld.vue";
//This tutorial is specific for Vue 2. In Vue 3, $on, $off, and $once have been removed.
// External libraries that provide this functionality are recommended.
export default {
  name: "App",
  components: {
    HelloWorld,
  },

  methods: {
    clickHandler(clickCount) {
      console.log("sdbfdgh");
      console.log(`The button has been clicked ${clickCount} times!`);
    },
  },

  mounted() {
    EventBus.$on("clicked", this.clickHandler);
    // EventBus.$off("clicked", this.clickHandler);
  },
};
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
