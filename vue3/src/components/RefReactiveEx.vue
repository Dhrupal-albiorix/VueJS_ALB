<template>
  <div>
    <h3>use of ref</h3>
    <div>
      {{ a }}
    </div>

    <div>
      {{ b }}
    </div>

    <div>
      {{ c }}
    </div>

    <h3>use of reactive</h3>
    {{ obj }}
  </div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  setup() {
    let a = "value is a";
    setTimeout(() => {
      a = "value of a is updated";
    }, 1000);

    let b = ref(20);
    let c = ref("initial value of c");
    setTimeout(() => {
      b.value = 30;
      c.value = "update value of c after 1 sec";
    }, 1000);

    let obj = reactive({
      name: "dhrupal",
      car: "jaguar land rover",
    });

    setTimeout(() => {
      obj.name = "dhrupal patel";
      obj.car = {
        first_car: "jaguar land rover",
        next_car: "BMW",
      };
    }, 1000);

    //A ref is automatically unwrapped when accessed or mutated as a property of a reactive object. In other words, it behaves like a normal property
//     const count = ref(0)
// const state = reactive({
//   count
// })

// console.log(state.count) // 0

// state.count = 1
// console.log(count.value) // 1

    return {
      a,
      b,
      c,
      obj,
    };
  },
};
</script>

<style>
</style>
