<template>
  <div>
    <header-comp />
    <p class="home">home page</p>
    <footer-comp />
  </div>
</template>

<script>
import FooterComp from "../components/FooterComp.vue";
import HeaderComp from "../components/HeaderComp.vue";
export default {
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