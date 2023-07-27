<template>
  <div>
    <div>
      <h1>V-For</h1>
    </div>

    <div>
      Render the element or template block multiple times based on the source
      data. <br />Expects: Array | Object | number | string | Iterable
    </div>

    <div v-for="n in 12" :key="n">{{ n }}</div>

    <div v-for="item in items" :key="item.message">
      {{ item }}
    </div>

    <li v-for="(value, key, index) in myObject" :key="index">
      {{ index }}---> {{ key }}: {{ value }}
    </li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [{ message: "Foo" }, { message: "Bar" }],

      myObject: {
        name: "abcd",
        roll: 22,
        city: "xyz",
      },
    };
  },
};
</script>