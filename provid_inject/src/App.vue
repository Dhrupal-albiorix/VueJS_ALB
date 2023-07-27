<template>
  <div id="app">
    <HelloWorld />
    <parent_provide />
    <task-parent/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import parent_provide from "./components/parent_provide.vue";
import TaskParent from './components/TaskParent.vue';

export default {
  name: "App",
  components: {
    HelloWorld,
    parent_provide,
    TaskParent,
  },
};
</script>


