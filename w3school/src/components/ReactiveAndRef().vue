<script setup>
import { ref } from "vue";

// object is not ref but value is ref
let obj2 = {
  count: ref(0),
  name: "klsal",
};
let { count } = obj2;
setTimeout(() => {
  // console.log(obj2.value) won,t work
  // console.log(obj2.value.count) won't work hear
  //hear value is ref(0)...in jsk1 object was ref
  console.log(obj2.count, "obj2.count"); //object
  console.log(obj2, "obj2"); //object
  console.log(obj2.count.value, "obj2.count.value"); // work result value = 0
}, 2000);

console.log("obj3");

let obj3 = ref({
  count: ref(99),
});
console.log("obj3", obj3);
console.log("obj3.value", obj3.value);
console.log("obj3.value.count", obj3.value.count);

const num = ref(110);
//num === 110 // false
//num.value === 110 // false
console.log(num, "num b4 update");
console.log(num.value, "num.value b4 update");
num.value = 200;
console.log(num, "num");
console.log(num.value, "num.value");
</script>

<template>
  <div>
    <div>
      <h1>Reactive and ref() in Vue</h1>
    </div>

    <a href="https://dmitripavlutin.com/ref-reactive-differences-vue/"
      >Must read</a
    >

    <p>
      To create a single reactive variable with the Composition API you can use
      ref. You can initialize a ref with any JavaScript primitive e.g. String,
      Number, Object, etc.
    </p>
    <p>
      even if num is ref object in script we gonna access it with num only in
      templet.. <br />
      but in script we will access it like object ..ex: num.value
    </p>

    <h5>num.value : {{ num.value }} : not valide , num ref()</h5>
    <!--incorrect-->
    <h5>num : {{ num }} : num ref()</h5>
    <!--correct-->

    <h3>{{ obj2.count }}</h3>
    <!-- ref object  -->

    <h3>hello{{ obj2.count + 77 }}</h3>
    <h3>hello again {{ obj2.count.value + 77 }}</h3>

    <h3>{{ obj2.count.value }}</h3>
    <!-- work result = 0  , gives value -->
    <h3>{{ obj2.count.value + 22 }}</h3>

    <h3>after distructring object : {{ count1 + 5 }}</h3>
    <h3>hii{{ count }}</h3>
  </div>
</template>