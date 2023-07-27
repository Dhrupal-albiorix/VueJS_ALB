<template>
  <div>
    <slot-child-2>
      <template v-slot:deafult> </template>

      <template v-slot:header>
        <h3>This is the header slot content</h3>
      </template>

      <template v-slot:Middle_props>
        <h3>This is the middle content with props</h3>
        <sloat-child-prop name="abcd" />
      </template>

      <template v-slot:footer>
        <h3>This is the footer slot content</h3>
      </template>
    </slot-child-2>

    <SlotChildScoped>
      <template v-slot="scopedSlotChild">
        <p>scopedSlotChild.headerText : {{ scopedSlotChild.headerText }}</p>
        <p>scopedSlotChild.bodyText : {{ scopedSlotChild.bodyText }}</p>
      </template>
    </SlotChildScoped>
  </div>
</template>

<script>
import SloatChildProp from "./SloatChildProp.vue";
import SlotChild2 from "./SlotChild2.vue";
import SlotChildScoped from "./SlotChildScoped.vue";
export default {
  components: {
    SlotChild2,
    SloatChildProp,
    SlotChildScoped,
  },

  mounted() {
    console.log(this.$slots, "slots");
  },
};
</script>


