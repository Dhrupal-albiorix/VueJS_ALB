<template>
  <div id="app">
    <HelloWorld />
    <provide-inject-intro />
    <ParentComponent message="message" />
    <DrillPerent name />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import ProvideInjectIntro from "./components/ProvideInjectIntro.vue";
import ParentComponent from "./components/ParentComponent.vue";
import DrillPerent from "./components/DrillPerent.vue";
export default {
  components: {
    HelloWorld,
    ProvideInjectIntro,
    ParentComponent,
    DrillPerent,
  },
};
</script>


