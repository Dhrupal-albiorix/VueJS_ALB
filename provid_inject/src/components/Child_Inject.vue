<template>
  <div>
    <div><h1>Child_Inject</h1></div>

    <div v-for="x in foods" :key="x.index">
      <p class="pName">{{ x.name }}</p>
    </div>

    <GrandChild />
  </div>
</template>

<script>
import GrandChild from "../components/GrandChild.vue";
export default {
  components: {
    GrandChild,
  },

  inject: ["foods"],
};
</script>