<template>
  <div>
    <method-comp-2 />
  </div>
</template>

<script>
import MethodComp2 from "./MethodComp2.vue";
export default {
  components: { MethodComp2 },
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
    edit(editedStudentName, rollNo) {
      this.Students.filter((student) => {
        return student.StudentRoll == rollNo;
      }).map((stu) => {
        stu.StudentName = editedStudentName;
      });
    },
  },

  provide() {
    return {
      subjects: this.subjects,
      Students: this.Students,
      editProduct: this.edit,
    };
  },
};
</script>

<style>
</style>