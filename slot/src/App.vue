<template>
  <div id="app">
    <HelloWorld />
    <SlotParent />
    <slot-parent-2 />
    <slot-parent-dynamic/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import SlotParent from "./components/SlotParent.vue";
import SlotParent2 from "./components/SlotParent2.vue";
import SlotParentDynamic from './components/SlotParentDynamic.vue';

export default {
  components: {
    HelloWorld,
    SlotParent,
    SlotParent2,
    SlotParentDynamic,
  },
};
</script>


