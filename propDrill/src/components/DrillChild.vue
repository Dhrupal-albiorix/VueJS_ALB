<template>
  <div>
    <div><h1>Drill Child</h1></div>
    <DrillGrandChild :name="name2" />
  </div>
</template>

<script>
import DrillGrandChild from "../components/DrillGrandChild.vue";

export default {
  components: {
    DrillGrandChild,
  },

  data() {
    return {
      name2: this.name,
    };
  },
  props: ["name"],
};
</script>