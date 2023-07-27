<template>
  <div>
    <div><h1>Grand Child_Inject</h1></div>

    <div v-for="y in people" :key="y.index">
      <p class="pName">{{ y.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["people"],
};
</script>