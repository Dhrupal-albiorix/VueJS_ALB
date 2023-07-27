<template>
  <div>
    <p>Action</p>
    <p>
      We really do not need to commit our mutations directly in large
      applications. It is better to use actions. Let's look at how Actions work
    </p>
    <input type="text" v-model="updateState" />
    <br />

    <p>{{ exOfAction }}</p>

    <button @click="Update">Update</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      updateState: "",
      exOfAction: this.$store.getters.getExAction,
    };
  },

  methods: {
    Update() {
      this.$store.dispatch("changeExActionVal", "new value using action");
      this.exOfAction = "new value using action";
    },
  },
};
</script>

<style>
</style>