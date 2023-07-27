<template>
  <div>
    <div v-for="student in StudentsArr" :key="student.id">
      <p>{{ student.StudentName }}</p>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/eventbus";
export default {
  data() {
    return {
      StudentsArr: [],
    };
  },

  methods: {
    clickHandler(Students) {
      console.log(Students);
      this.StudentsArr = Students;
      console.log("Students Arr:", this.StudentsArr);
    },
  },

  mounted() {
    console.log("TaskComp3 mounted");
    EventBus.$on("clickedStudent", this.clickHandler);
  },
};
</script>

<style>
</style>
