<template>
  <div>
    <div>
      <h1>Reactive : implicit reactivity" or "shallow reactivity 3 in Vue</h1>
    </div>

    <p>data.name : {{ data.name }}</p>
    <p>data.count : {{ data.count }}</p>
    <p>
      <b>data2.name non reactive time not set: {{ data2.name }}</b>
    </p>
    <p>data3.name non reactive is set: {{ data3.name }}</p>
    <p>
      In the provided code snippet, even though data2 is not explicitly created
      as a reactive object using reactive(), Vue.js is still capable of
      detecting changes to its properties and updating the template.
      <br />
      This behavior is known as "implicit reactivity" or "shallow reactivity" in
      Vue.js. <br />When you modify the name property of data2 inside the
      setTimeout callback, Vue.js is able to detect the change and update the
      template accordingly. <br />
      This is because Vue.js uses a technique called "property access
      interception" to track property access and modification, allowing it to
      detect changes to non-reactive objects at the property level. <br />So, in
      example, the change to data2.name to "hjdgj" will be reflected in the
      template, even though data2 itself is not a reactive object created with
      reactive().
    </p>
    <p>
      <b>to prevent this do not forget to set time to seTtimeOut</b>
    </p>
    <button @click="increment">increment count</button>
    <p><b>Don't destructure reactive</b></p>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const data = reactive({
  count: 0,
  name: "Peter Griffin",
  flag: false,
});

const data2 = {
  name: "with out time set non reactive old",
  std: 3,
};

const data3 = {
  name: "non reactive old with time set",
  std: 3,
};

setTimeout(() => {
  data.name === "Peter Griffin"; // true
  data.name.value === "Peter Griffin"; // false
  data.name = "reactive new";
  console.log(data.name, "data.name");
  console.log(data.name.value, "data.name.value");
}, 2000);

//wrong
// let { count } = data
// count++

// Right
data.count++;
console.log(data.count, "count increment");
function increment() {
  data.count++;
}

setTimeout(() => {
  data2.name = " without time set non-reactive new";
});

setTimeout(() => {
  data3.name = "non reactive new with time set";
}, 2000);
</script>
