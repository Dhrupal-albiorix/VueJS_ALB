<template>
  <div id="app">
    <HelloWorld />
    <Ex_1_Parent />
    <EventEmmitParent />
    <PropsAndEmmitParent />
    <ExR />
  </div>
</template>

<script>
import Ex_1_Parent from "./components/Ex_1_Parent.vue";
import HelloWorld from "./components/HelloWorld.vue";
import EventEmmitParent from "./components/EventEmmitParent.vue";
import PropsAndEmmitParent from "./components/PropsAndEmmitParent.vue";
import ExR from "./components/ExR.vue";

export default {
  components: {
    HelloWorld,
    Ex_1_Parent,
    EventEmmitParent,
    PropsAndEmmitParent,
    ExR,
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
