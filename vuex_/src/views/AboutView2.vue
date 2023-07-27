<template>
  <div>
    <p>{{ stateData }}</p>
    <br />
    <input type="text" v-model="updateState" />
    <br />
    <button @click="Update">Update</button>

    <p>{{ ex1 }}</p>
    <p>{{ ex1 }} & {{ UpdateEx }}</p>
    <p>exOfAction : {{ exOfAction }}</p>
    <!-- <p>action : {{ action_ex }}</p> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      updateState: "",
      exOfAction: this.$store.getters.getExAction,
      stateData: this.$store.getters.getMessage,
      ex1: this.$store.getters.getEx,
    };
  },

  methods: {
    Update() {
      this.ex1 = this.$store.getters.getEx;
      if (this.updateState == "") {
        alert("empty");
      } else {
        //using the commit method to call the mutation
        this.$store.commit("changeMessageValue", this.updateState);
        //update the state with the curren
        this.stateData = this.updateState;
        alert("state updated");
      }
    },
  },

  computed: {
    UpdateEx() {
      console.log("lll");
      this.$store.commit("changeExVal", "namste");

      return this.$store.commit("changeExVal", "namste");
    },

    // action_ex() {
    //   this.$store.commit("changeExActionVal", "update without action");
    //   return this.exOfAction;
    // },
  },
};
</script>

<style>
</style>