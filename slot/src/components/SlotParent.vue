<!-- ParentComponent.vue -->
<template>
  <div>
    <h2>Parent Component</h2>
    <SlotChild>
      <template v-slot:default>
        <p>This content will be passed to the slot in ChildComponent.</p>
        <p>{{ a }}</p>
      </template>
    </SlotChild>
  </div>
</template>

<script>
import SlotChild from "./SlotChild.vue";

export default {
  components: {
    SlotChild,
  },

  data() {
    return {
      a: 22,
    };
  },
};
</script>
