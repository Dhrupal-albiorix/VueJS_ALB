<template>
  <div id="app">
    <!-- <HelloWorld /> -->
    <!-- <com-p-1 /> -->
    <MethodComp1 />
  </div>
</template>

<script>
import MethodComp1 from "./components/MethodComp1.vue";
// import ComP1 from "./components/ComP1.vue";
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    MethodComp1,
    // ComP1,
    // HelloWorld,
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
