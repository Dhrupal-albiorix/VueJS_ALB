<template>
  <div class="home">
    <log-in />
  </div>
</template>

<script>
import LogIn from "../page/LogIn.vue";
export default {
  name: "HomeView",
  components: { LogIn },
};
</script>

<style scoped>
.home {
  margin: 120px;
}
</style>
