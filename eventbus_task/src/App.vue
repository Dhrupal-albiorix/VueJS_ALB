<template>
  <div id="app">
    <HelloWorld />
    <!-- <task-comp-1 /> -->
    <method-task-1 />
  </div>
</template>

<script>
// import TaskComp1 from "./components/TaskComp1.vue";
import HelloWorld from "./components/HelloWorld.vue";
import MethodTask1 from "./components/MethodTask1.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    MethodTask1,
    // TaskComp1,
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
