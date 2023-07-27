<template>
  <div>
    <div>
      <h1>Intro</h1>
    </div>
    <p>hello</p>

    <div v-bind:class="vueClass">
      This element is bound to the "pinkBG" class.
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      vueClass: "pinkBG",
    };
  },
};
</script>

<style scoped>
.pinkBG {
  background: rgb(240, 28, 159);
  color: rgb(19, 55, 86);
}
</style>
