<template>
  <div>
    <h3>to_refs , isRef , is_reactive</h3>
    <h4>go to console</h4>
    <h3>to_refs</h3>
    <h3>Extended toRefs that also accepts refs of an object.</h3>
    <h3>Use-cases : Destructuring a props object</h3>
    <div>{{ name }}</div>
  </div>
</template>

<script>
import { isReactive, isRef, reactive, ref, toRefs } from "vue";
export default {
  setup() {
    let num = 22;
    console.log("isRef on non ref number", isRef(num));
    let digit = ref(22);
    console.log("isRef on number : ", isRef(digit));
    console.log("isReactive on number: ", isReactive(digit));

    let obj = reactive({
      name: "dhrupal",
    });
    console.log("isReactive on object : ", isReactive(obj));
    // concept of to_ref--------------------------------------------------------------------------------------------//

    const objref = reactive({
      name: "dhrupal_refs",
      car: "bmw",
    });

    return toRefs(objref); // it will be proccesed as {...objref}
    //so we can directly access object value in templet
    // ex : {{name}} and not {{objref.name}}
  },
};
</script>

<style>
</style>