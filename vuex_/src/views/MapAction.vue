<template>
  <div>
    <p>map action</p>
    <p>{{ exMapAction }}</p>
    <button @click="inc">increment</button>
    <p>change incrementfun : {{ exMapAction }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["exMapAction"]),
    ...mapActions(["incrementfun"]),
  },

  methods: {
    inc() {
      this.$store.dispatch("incrementfun");
    },
  },
};
</script>

<style>
</style>