<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="isError">Error occurred while fetching data.</div>
    <div v-else>
      <ul v-if="data">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search products"
          @keyup="handleSearch()"
        />

        <div>
          <div class="Products">
            <div v-for="(product, key) in data" :key="key">
              <div class="container">
                <div v-if="!product.title">{{ key }} : {{ product }}</div>
                <div v-else>
                  <div style="width: 300px">
                    <img
                      :src="`${product.image}`"
                      alt="image here"
                      style="width: 250px"
                    />
                  </div>
                  <div><b>title : </b> {{ product.title }}</div>
                  <div><b> price : </b> {{ product.price }}</div>
                  <div><b>descriptio : </b> {{ product.description }}</div>
                  <div><b> category : </b>{{ product.category }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ul>
      <div v-else>No products found.</div>
    </div>
  </div>
</template>

<script setup>
import { fetchData } from "../resuables/reusable";
import { ref, watch } from "vue";
let searchQuery = ref("");
let { isLoading, isError, data } = fetchData(
  "https://fakestoreapi.com/products",
  searchQuery.value
);

watch(searchQuery, (newValue) => {
  console.log(searchQuery, newValue);
  ({ isLoading, isError, data } = fetchData(
    "https://fakestoreapi.com/products",
    newValue
  ));
  console.log(data);
});
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