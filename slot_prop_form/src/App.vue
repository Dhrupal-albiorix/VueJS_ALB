<template>
  <div id="app">
    <HelloWorld />
    <form-component />
  </div>
</template>

<script>
import FormComponent from "./components/FormComponent.vue";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    FormComponent,
  },
};
</script>

