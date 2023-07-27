<template>
  <div>
    <method-task-2 />
  </div>
</template>

<script>
import MethodTask2 from "./MethodTask2.vue";
import { EventBus } from "../eventbus";

export default {
  components: { MethodTask2 },
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

  provide() {
    return {
      subjects: this.subjects,
      Students: this.Students,
    };
  },

  methods: {
    clickHandler(editedStudentName, stRoll) {
      this.Students.filter((student) => {
        return student.StudentRoll == stRoll;
      }).map((stu) => {
        stu.StudentName = editedStudentName;
      });
    },
  },

  mounted() {
    EventBus.$on("clicked", this.clickHandler);
  },
};
</script>

<style>
</style>