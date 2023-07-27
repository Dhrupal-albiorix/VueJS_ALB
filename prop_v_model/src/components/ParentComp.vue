<!-- ParentComp.vue -->
<template>
  <div>
    <p>parent component</p>
    <ChildComp
      :title="pageTitle"
      @update:title="pageTitle = $event"
      :content="pageContent"
      @update:content="pageContent = $event"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import ChildComp from "./ChildComp.vue";

export default {
  components: { ChildComp },

  setup() {
    const pageTitle = ref("Initial Title");
    const pageContent = ref("Initial Content");

    return {
      pageTitle,
      pageContent,
    };
  },
};
</script>

<style>
/* Styles go here */
</style>
