<template>
  <div>
    <div>
      <h1>Remove ele - udemy</h1>
    </div>
    <div
      v-for="(item, index) in items"
      :key="item.message"
      @click="RemoveMe(index)"
    >
      {{ item }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { message: "Foo ---> click me to remove me" },
        { message: "Bar ---> click me to remove me" },
        { message: "Foo ---> click me to remove me" },
        { message: "Bar ---> click me to remove me" },
        { message: "Foo ---> click me to remove me" },
        { message: "Bar ---> click me to remove me" },
        { message: "Foo ---> click me to remove me" },
        { message: "Bar ---> click me to remove me" },
        { message: "Foo ---> click me to remove me" },
        { message: "Bar ---> click me to remove me" },
        { message: "Foo ---> click me to remove me" },
        { message: "Bar ---> click me to remove me" },
      ],
    };
  },

  methods: {
    RemoveMe(index) {
      this.items.splice(index, 1);
    },
  },
};
</script>