<template>
  <div>
    <p>map getters</p>
    <p>{{ exMaPGetters }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["exMaPGetters"]),
  },
};
</script>

<style>
</style>