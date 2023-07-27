<template>
  <div>
    <p>admin</p>
    <nav-bar />
  </div>
</template>

<script>
import NavBar from "../page/Navbar/NavBar.vue";
export default {
  components: { NavBar },
  beforeRouteEnter(to, from, next) {
    let a = localStorage.getItem("admin");
    console.log(a);
    if (a == null || a == "false") {
      next("/wrong");
    } else {
      next();
    }
  },
};
</script>

<style>
</style>