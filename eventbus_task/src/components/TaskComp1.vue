<template>
  <div>
    <p>
      <button @click="emitGlobalClickEvent">
        working fine with click event
      </button>
    </p>
    <TaskComp2 />
  </div>
</template>

<script>
import { EventBus } from "@/eventbus";
import TaskComp2 from "./TaskComp2.vue";
export default {
  data() {
    return {
      subjects: [
        {
          SubjectId: 1,
          SubjectName: "maths",
          SubjectDis: "game of number",
        },
        {
          SubjectId: 2,
          SubjectName: "physics",
          SubjectDis: "cat is dead / alive",
        },
        {
          SubjectId: 3,
          SubjectName: "Chem",
          SubjectDis: "hatttt",
        },
      ],
      Students: [
        {
          StudentName: "s1",
          StudentRoll: 1,
          StudentSubject: [1, 2],
        },
        {
          StudentName: "s2",
          StudentRoll: 2,
          StudentSubject: [3, 2],
        },
        {
          StudentName: "s3",
          StudentRoll: 3,
          StudentSubject: [1, 3],
        },
        {
          StudentName: "s4",
          StudentRoll: 4,
          StudentSubject: [1, 2, 3],
        },
        {
          StudentName: "s5",
          StudentRoll: 5,
          StudentSubject: [1, 2, 3],
        },
        {
          StudentName: "s6",
          StudentRoll: 6,
          StudentSubject: [2],
        },
      ],
    };
  },
  methods: {
    emitGlobalClickEvent() {
       const subjects = this.subjects; // Add this line
    const students = this.Students; // Add this line
    console.log("Subjects emitted:", subjects); // Add this line
    console.log("Students emitted:", students); // Add this line
      EventBus.$emit("clickedSubject", this.subjects);
      EventBus.$emit("clickedStudent", this.Students);
    },
  },
  mounted() {
    this.emitGlobalClickEvent();
  },
  components: { TaskComp2 },
};
</script>

<style>
</style>