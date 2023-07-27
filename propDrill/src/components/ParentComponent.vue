<template>
  <div>
    <div>
      <h1>prop drilling - perent</h1>
    </div>

    <ChildComponent message="mymessage" />
  </div>
</template>

<script>
import ChildComponent from "./ChildComponent.vue";

export default {
  components: {
    ChildComponent,
  },
};
</script>
