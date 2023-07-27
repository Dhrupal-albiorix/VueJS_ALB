<template>
  <div>
    <div>
      <div><h1>Props And Emmit Child 2</h1></div>
      <div>
        <p>{{ school }}</p>
        <p>{{ clg }}</p>
        <p>{{ city }}</p>

        <button @click="myFun2()">prop2</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["school", "clg", "city"],

  methods: {
    myFun2() {
      this.$emit("my-event2");
    },
  },
};
</script>