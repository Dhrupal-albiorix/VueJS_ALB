<template>
  <div class="container">
    <div v-for="sub in subjects" :key="sub.SubjectId" class="all">
      <h1>SubjectName : {{ sub.SubjectName }}</h1>
      <h3>{{ sub.SubjectDis }}</h3>
      <method-comp-3
        v-for="student in filterStudents(sub.SubjectId)"
        :key="student.StudentRoll"
        :student="student"
      />
      <br /><br />
    </div>
  </div>
</template>

<script>
import MethodComp3 from "./MethodComp3.vue";

export default {
  components: { MethodComp3 },
  inject: ["subjects", "Students"],
  methods: {
    filterStudents(subjectId) {
      return this.Students.filter((student) =>
        student.StudentSubject.includes(subjectId)
      );
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  align-items: stretch;
  gap: 20px;
}

.all {
  background-color: antiquewhite;
  color: black;
  width: 33%;
}
</style>
