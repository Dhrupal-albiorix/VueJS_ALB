<template>
  <div>
    <div>
      <div class="sub">
        <p>Subject name: {{ subjectName }}</p>
        <p>Subject Description: {{ subjectDescription }}</p>
      </div>

      <stu-comp v-for="s in student" :key="s.id" :s="s" />
    </div>
  </div>
</template>

<script>
import StuComp from "./StuComp.vue";

export default {
  components: {
    StuComp,
  },
  props: {
    subjectName: String,
    subjectDescription: String,
    student: Array,
  },
};
</script>

<style scoped>
/* Styles */
</style>
