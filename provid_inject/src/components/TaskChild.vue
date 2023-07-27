<template>
  <div>
    <div class="abcd" v-for="y in productList" :key="y.index">
      <p class="pName">Product Name : {{ y.name }}</p>
      <p class="pName">Product price : {{ y.price }}</p>
      <p class="pName">Product information : {{ y.information }}</p>

      <button @click="edit()">Edit</button>
     
    </div>
  </div>
</template>

<script>
export default {
  inject: ["productList", "editProduct"],

  methods: {
    edit() {
      // Call the editProduct method provided by the parent component
      this.editProduct();
    },
  },
};
</script>

<style scoped>
.abcd {
  background-color: #28e49f47;
  border-radius: 10px;
  text-align: center;
  display: inline-block;
  padding: 22px;
}

.show {
  display: none;
}
</style>