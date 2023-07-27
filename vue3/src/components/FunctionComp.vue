<template>
  <div>
    <h2>Function in composition method</h2>
    <div>{{ a }}</div>
    <button @click="pluse">+</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let a = ref(20);

    function pluse() {
      a.value = a.value + 1;
    }

    return {
      a,
      pluse, // function must be return
    };
  },
};
</script>

<style>
</style>