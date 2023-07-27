
<template>
  <div>
    <div>
      <h1>Props And Emmit Child 3</h1>
    </div>

    <div>
      <p>{{ idea }}</p>
      <p>{{ founder_name }}</p>
      <p>{{ amount }}</p>
      <p>{{ isHelloVisible ? "hello" + founder_name : "" }}</p>
      <button @click="myFun3()">prop 3</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["idea", "founder_name", "amount"],

  data() {
    return {
      isHelloVisible: false,
    };
  },

  methods: {
    myFun3() {
      this.isHelloVisible = !this.isHelloVisible;
      this.$emit("my-event3");
    },
  },
};
</script>


