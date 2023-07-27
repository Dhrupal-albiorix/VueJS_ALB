<template>
  <div>
    <div class="products">
      <div v-for="info in alirlineinfo" :key="info.id" class="card">
        <p>Product id: {{ info.id }}</p>
        <p>Product Name: {{ info.name }}</p>
        <p>Product Price: {{ info.price }}</p>
        <router-link
          :to="{
            name: 'info',
            params: { id: info.id, info: info },
          }"
          >More Info</router-link
        >

        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["alirlineinfo"],
  data() {
    return {};
  },
};
</script>

<style>
.products {
  display: flex;
  gap: 2%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 20%;
  margin: 12px;
  padding: 2%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 2px 16px;
}
</style>
