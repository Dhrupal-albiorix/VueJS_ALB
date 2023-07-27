<template>
  <div class="about">
    <h1>This is an example page</h1>
    <div>
      <p>
        Getters provide a way of retrieving the values we want from the state
        object. A getter's result is cached based and will only re-evaluate when
        some of its dependencies have changed.
      </p>
      <h1>this.$store.getters was used</h1>
      <p>{{ stateData }}</p>
      <p>{{ ex1 }}</p>
      <p>exAction : {{ exOfAction }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stateData: "",
      ex1: this.$store.getters.getEx,
      exOfAction: this.$store.getters.getExAction,
    };
  },

  mounted() {
    this.stateData = this.$store.getters.getMessage;
  },
};
</script>
