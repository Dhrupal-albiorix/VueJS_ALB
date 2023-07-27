<template>
  <div>
    <div>
      <h1>V-Cloak</h1>
    </div>

    <p>
      Before Vue mount into the page, you can see the unparsed {{ tags }} for a
      fraction of a second. v-cloak is a attribute that you can add to a element
      you want to hide, while Vue is mounting. Soon as Vue is ready, this
      attribute is removed.
    </p>
    <p v-cloak>{{ data }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: "GeeksforGeeks",
    };
  },
};
</script>

<style scoped>
[v-cloak] {
  display: none;
}
</style>