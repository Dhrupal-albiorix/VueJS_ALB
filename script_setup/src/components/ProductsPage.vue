<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <div class="Products">
        <div v-for="product in local_products" :key="product.id" class="card">
          <div style="width: 300px">
            <img
              :src="`${product.image}`"
              alt="image here"
              style="width: 250px"
            />
          </div>

          <div class="container">
            <div>{{ product.id }}</div>
            <div>{{ product.title }}</div>
            <div>{{ product.price }}</div>
            <div>{{ product.description }}</div>
            <div>{{ product.category }}</div>
            <div>{{ product.rating }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";
import { fetchFirebaseData } from "../resuables/firebase_utiles";

const isLoading = ref(true); // Loading state

let local_products = reactive([]);

const productdata = async () => {
  try {
    let products = await fetchFirebaseData(`https://fakestoreapi.com/products`);
    local_products = products;
    isLoading.value = false; // Data is loaded, set isLoading to false
  } catch (error) {
    console.error("Error:", error);
    isLoading.value = false; // Error occurred, set isLoading to false
  }
};

// Fetch data when the component is mounted
onMounted(() => {
  productdata();
});

// Handler function for search input
</script>


<style scoped>
.Products {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 20px;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 40%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 2px 16px;
}
</style>
