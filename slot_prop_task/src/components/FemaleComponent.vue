<template>
  <div>
    <p>female</p>

    <div v-for="p in femaleProduct" :key="p" class="product">
      <p>Prodcut Name : {{ p.ProdcutName }}</p>
      <p>product price :{{ p.price }}</p>
      <p>product color : {{ p.color }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    femaleProduct: Array,
  },
};
</script>

<style scoped>
.product {
  background-color: rgb(192, 71, 168);
  color: aliceblue;
  padding: 2%;
  display: inline-block;
  margin: 20px;
}
</style>
