<template>
  <div>
    <div
      v-for="s in filteredStudentDetails"
      :key="s.subjectName"
      class="stData"
    >
      <div v-for="info in s.student" :key="info.rollNo">
        <p>st name: {{ info.stName }}</p>
        <p>st RollNo: {{ info.rollNo }}</p>
        <com-p-4 :stname="info.stName" :stRoll="info.rollNo" />
      </div>

      <br />
    </div>
  </div>
</template>

<script>
import ComP4 from "./ComP4.vue";
export default {
  components: { ComP4 },
  inject: ["filteredStudentDetails", "editProduct"],
};
</script>

<style scoped>
.stData {
  background-color: black;
  color: aliceblue;
  /* display: inline-block; */
  padding: 20px;
}
</style>
