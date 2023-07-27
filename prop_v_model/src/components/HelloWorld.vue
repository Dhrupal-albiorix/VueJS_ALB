<template>
  <div>
    <div>hello word</div>
    <div>
      parent component
      <parent-comp />
    </div>
  </div>
</template>

<script>
import ParentComp from "./ParentComp.vue";
export default {
  components: { ParentComp },
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
