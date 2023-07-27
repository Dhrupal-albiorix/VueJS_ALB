<template>
  <div id="app">
    <HelloWorld />
    <TodoList />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    TodoList,
  },
};
</script>


