<template>
  <div>
    <div class="parent">
      <nav-bar class="myNavbar" />
    </div>
  </div>
</template>

<script>
import NavBar from "./nav/NavBar.vue";
export default {
  components: { NavBar },
};
</script>

<style scoped>
.myNavbar {
  position: fixed;
}
</style>