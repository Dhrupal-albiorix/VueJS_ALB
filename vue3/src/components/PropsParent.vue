<template>
  <div>
    <prop-comp
      msg="msg from parent component"
      title="this is title from parent with use of ref and destructure of object"
    />
  </div>
</template>

<script>
import PropComp from "../components/PropsComp.vue";
export default {
  components: { PropComp },
};
</script>

<style>
</style>