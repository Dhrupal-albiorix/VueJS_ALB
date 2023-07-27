<template>
  <div>
    <div>
      <p>male</p>
      <div v-for="p in maleProduct" :key="p" class="product">
        <p>Prodcut Name : {{ p.ProdcutName }}</p>
        <p>product price :{{ p.price }}</p>
        <p>product color : {{ p.color }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    maleProduct: Array,
  },
};
</script>

<style scoped>
.product {
  background-color: rgb(76, 23, 200);
  color: aliceblue;
  padding: 2%;
  display: inline-block;
  margin: 20px;
}
</style>
