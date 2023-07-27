<template>
  <div>
    <p>dkcjfvn</p>
    <p>User ID: {{ myid }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 0,
    };
  },

  created() {
    this.id = this.$route.params.id;
  },

  computed: {
    myid() {
      //this.id=2 //Unexpected side effect in "MyCompFun" computed property //
      //he error you're encountering is because you're modifying the component's data property (this.id = 2) within a computed property (MyCompFun). Computed properties are meant to derive values based on existing data properties and should not have side effects.
      // To fix this issue, you should move the assignment of this.id = 2 outside of the computed property.
      return this.id;
    },
  },
};
</script>

<style>
</style>