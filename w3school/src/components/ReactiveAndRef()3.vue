<template>
  <div>
    <div><h1>Reactive and ref() 3 in Vue</h1></div>

    <p>data.name : {{ data.name }}</p>
    <p>datanew.name : {{ datanew.name }}</p>
    <p>data.count : {{ data.count }}</p>
    <p><b>Don't destructure reactive</b></p>
    <p>data2.name : {{ data2.name }}</p>

    <button @click="increment">increment count</button>

    <p>data2.name: {{ nonReactiveData2.name }}</p>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const data = reactive({
  count: 0,
  name: "Peter Griffin",
  flag: false,
});

const datanew = {
  name: "old",
  std: 3,
};
const data2 = {
  name: "klsd",
  std: 3,
};

const nonReactiveData2 = {
  name: data2.name,
  std: data2.std,
};

setTimeout(() => {
  data.name === "Peter Griffin"; // true
  data.name.value === "Peter Griffin"; // false
  data.name = "abcd";
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
  data2.name = "newData2name";
}, 2000);

setTimeout(() => {
  datanew.name = "changed";
}, 2000);

setTimeout(() => {
  nonReactiveData2.name = "newNonReactiveName";
}, 2000);
</script>