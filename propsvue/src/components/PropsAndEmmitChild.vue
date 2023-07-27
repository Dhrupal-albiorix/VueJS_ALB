<template>
  <div>
    <div><h1>Props And Emmit Child</h1></div>
    <p>{{ name }}</p>
    <p>{{ PhoneNumber }}</p>
    <p>{{ EmailAdderess }}</p>
    <button @click="myFun()">prop</button>
  </div>
</template>

<script>
export default {
  props: ["name", "PhoneNumber", "EmailAdderess"],

  methods: {
    myFun() {
      this.$emit("my-event");
    },
  },
};
</script>
