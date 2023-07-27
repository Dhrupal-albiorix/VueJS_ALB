<template>
  <div>
    <div>
      <p>child component</p>
      <p>{{ child_color }}</p>
      <div v-for="p in childProduct" :key="p" class="product">
        <p>Prodcut Name : {{ p.ProdcutName }}</p>
        <p>product price :{{ p.price }}</p>
        <p>product color : {{ p.color }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["childProduct"],
};
</script>

<style scoped>
.product {
  background-image: linear-gradient(pink, blue, red);
  color: aliceblue;
  padding: 2%;
  display: inline-block;
  margin: 20px;
}
</style>