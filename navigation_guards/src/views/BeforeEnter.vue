<template>
  <div>
    <p>beforeEnter is a per route guard, it doesn't apply for children.</p>
    <p>
      What is beforeEnter Vue Router? The beforeEnter hook is a powerful feature
      of Vue Router that allows you to execute custom logic before navigating to
      a new route. It is especially useful for performing tasks such as checking
      authentication or loading data.
    </p>
    <p>befor enter</p>
  </div>
</template>

<script>
import SharedEle from "../SharedEle";
export default {
  beforeRouteEnter(to, from, next) {
    console.log(
      "%cThis is beforeRoute Enter",
      "background: red; color: #ffffff"
    );
    next();
  },

  // beforeRouteUpdate(to, from, next) {
  //   console.log("before route update ...", "background: red; color: #ffffff");
  //   next();
  // },

  // beforeRouteLeave(to, from, next) {
  //   console.log("before route leave ...", "background: red; color: #ffffff");
  //   next();
  // },

  created() {
    console.log(SharedEle);
  },
};
</script>

<style>
</style>