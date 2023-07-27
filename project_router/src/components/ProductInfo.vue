<template>
  <div>
    <div>
      <h1>{{ info.name }}</h1>
      <h5>
        {{ info.description }}
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "productInfo",
  props: {
    info: {
      type: Object,
    },
  },

  mounted() {
    console.log(this.$route);
    console.log(this.$route.path);
    console.log(this.$route.query);
  },
};
</script>

<style>
</style>
