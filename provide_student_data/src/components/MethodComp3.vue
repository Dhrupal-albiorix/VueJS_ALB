<template>
  <div>
    <div
      v-for="student in filteredStudents"
      :key="student.StudentRoll"
      class="StInfo"
    >
      <p>StudentRoll: {{ student.StudentRoll }}</p>
      <p>StudentName: {{ student.StudentName }}</p>

      <method-comp-4
        :stname="student.StudentName"
        :stRoll="student.StudentRoll"
      />
    </div>
  </div>
</template>

<script>
import MethodComp4 from "./MethodComp4.vue";
export default {
  components: { MethodComp4 },
  inject: ["Students", "subjects"],
  props: ["student"],
  computed: {
    filteredStudents() {
      return this.Students.filter(
        (student) => student.StudentName === this.student.StudentName
      );
    },
  },
};
</script>

<style scoped>
</style>
