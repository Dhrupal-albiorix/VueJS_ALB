<template>
  <div>
    <div><h1>parent_provide</h1></div>
    <Child_Inject />
  </div>
</template>

<script>
import Child_Inject from "./Child_Inject.vue";

export default {
  components: {
    Child_Inject,
  },

  data() {
    return {
      foods: [
        { name: "Pizza", imgUrl: "img_pizza.svg" },
        { name: "Apple", imgUrl: "img_apple.svg" },
        { name: "Cake", imgUrl: "img_cake.svg" },
        { name: "Fish", imgUrl: "img_fish.svg" },
        { name: "Rice", imgUrl: "img_rice.svg" },
      ],

      people: [
        { name: "Person1" },
        { name: "Person2" },
        { name: "Person3" },
        { name: "Person4" },
        { name: "Person5" },
      ],
    };
  },

  provide() {
    return {
      foods: this.foods,
      people: this.people,
    };
  },
};
</script>