<template>
  <div>
    <div>
      <h1>prop drilling - child</h1>
    </div>
    <GrandChild message="mymessage" />
  </div>
</template>

<script>
import GrandChild from "./GrandChild.vue";

export default {
  components: {
    GrandChild,
  },
  props: ["message"],
};
</script>
