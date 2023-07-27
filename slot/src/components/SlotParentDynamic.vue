<template>
  <div>
    <div>
      <slot-child-dynamic :slotName="currentSlotName">
        <template v-slot:header>
          <h3>This is the header slot content</h3>
        </template>
        <template v-slot:footer>
          <h3>This is the footer slot content</h3>
        </template>
      </slot-child-dynamic>

      <button @click="toggleSlot">Toggle Slot</button>
    </div>
  </div>
</template>

<script>
import SlotChildDynamic from "./SlotChildDynamic.vue";
export default {
  components: { SlotChildDynamic },

  data() {
    return {
      currentSlotName: "header",
    };
  },
  methods: {
    toggleSlot() {
      this.currentSlotName =
        this.currentSlotName === "header" ? "footer" : "header";
    },
  },
};
</script>