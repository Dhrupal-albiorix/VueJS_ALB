<template>
  <div>
    <nav-bar />
    <air-line />
  </div>
</template>

<script>
import AirLine from "../components/AirLine.vue";
import NavBar from "../nav/NavBar.vue";
export default {
  components: { NavBar, AirLine },
  name: "HomeView",
};
</script>

<style scoped>
</style>
