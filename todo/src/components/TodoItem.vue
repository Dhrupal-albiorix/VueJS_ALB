<template>
  <div>{{ input }} <button @click="deleteFun()">delete</button></div>
</template>

<script>
export default {
  props: ["input"],

  methods: {
    deleteFun() {
      this.$emit("delete-event");
    },
  },
};
</script>
