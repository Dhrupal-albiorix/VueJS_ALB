<template>
  <div>
    <header-comp />
    <p class="home">admin</p>
    <footer-comp />
  </div>
</template>

<script>
import FooterComp from "../components/FooterComp.vue";
import HeaderComp from "../components/HeaderComp.vue";
export default {
  beforeRouteEnter(to, from, next) {
    let a = localStorage.getItem("adminvalue");
    console.log(a);
    if (a == null) {
      next("/wrong");
    } else {
      next();
    }
  },

  components: { HeaderComp, FooterComp },
};
</script>
<style scoped>
.home {
  margin: 20px;
  padding: 200px;
  margin-top: 0px;
  overflow: hidden;
}
</style>
