<template>
  <div>
    <div>
      <h1>V-memo & show in Vue</h1>
    </div>

    <p>
      <b
        >Whenever a component's data changes, that component and its children
        will re-render, there are ways to eliminate unnecessary tasks with two
        lesser-used Vue directives: v-once and v-memo.</b
      >
    </p>

    <h3>v-once</h3>
    <p>
      v-once directive is designed to render an element and its children only
      once, and it is not intended to work dynamically with data updates.
    </p>

    <p v-once>Initial Value: {{ count }}</p>
    <p>
      as Initial Value is rendered , it it will not rerender ...so it will not
      update with any change
    </p>
    <button v-on:click="counter()">Increment</button>

    <h3>v-memo</h3>

    <p>
      The v-memo directive memoizes a sub-tree of a template - meaning that it
      stores the result of previous renders to speed up future ones.
    </p>

    <p>
      it accepts a dependency array and will only re-render if one of the values
      in the array has changed. Basically, we're saying to only update this
      sub-tree if one of these values changes
    </p>

    <p>
      WARNING
      <br />
      When using v-memo with v-for, make sure they are used on the same element.
      v-memo does not work inside v-for.
    </p>

    <li v-for="item in items" :key="item.id" v-memo="[lastItem.id]">
      {{ item }}
    </li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 10,
    };
  },

  methods: {
    counter() {
      this.count++;
    },
  },
};
</script>
