<template>
  <div id="app">
    <HelloWorld />
    <main-component />
   
  </div>
</template>

<script>

import HelloWorld from "./components/HelloWorld.vue";
import MainComponent from "./components/MainComponent.vue";

export default {
  components: {
    HelloWorld,
    MainComponent,
  
  },
};
</script>

