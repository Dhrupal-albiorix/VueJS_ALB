<template>
  <div class="maincontent">
    <com-p-2
      v-for="(person, index) in studentDetails"
      :key="index"
      :subjectFilter="person.subjectName"
    />
  </div>
</template>

<script>
import ComP2 from "./ComP2.vue";
export default {
  components: { ComP2 },
  data() {
    return {
      studentDetails: [
        {
          subjectName: "maths",
          subjectDescription: "game of numbers",
          student: [
            {
              stName: "student1",
              rollNo: 1,
            },
            {
              stName: "student4",
              rollNo: 4,
            },
            {
              stName: "student3",
              rollNo: 3,
            },
          ],
        },

        {
          subjectName: "Physics",
          subjectDescription:
            "( E + e 2 r ) 2 ψ ( x ) = − ∇ 2 ψ ( x ) + m 2 ψ ( x ) ",
          student: [
            {
              stName: "student3",
              rollNo: 3,
            },
            {
              stName: "student14",
              rollNo: 14,
            },
            {
              stName: "student13",
              rollNo: 13,
            },
          ],
        },
        {
          subjectName: "English",
          subjectDescription: "game of words",
          student: [
            {
              stName: "student11",
              rollNo: 11,
            },
            {
              stName: "student14",
              rollNo: 14,
            },
            {
              stName: "student31",
              rollNo: 31,
            },
          ],
        },
        {
          subjectName: "chem",
          subjectDescription: " Exception ke bhi Exception hote hai 😒",
          student: [
            {
              stName: "student1",
              rollNo: 1,
            },
            {
              stName: "student2",
              rollNo: 2,
            },
            {
              stName: "student3",
              rollNo: 3,
            },
          ],
        },
      ],
    };
  },

  methods: {
    edit(editedStudentName, rollNo) {
      this.studentDetails.forEach((student) => {
        student.student
          .filter((stInfo) => {
            return stInfo.rollNo == rollNo;
          })
          .map((i) => {
            i.stName = editedStudentName;
          });
      });
    },
  },

  provide() {
    return {
      studentDetails: this.studentDetails,
      editProduct: this.edit,
    };
  },
};
</script>

<style scoped>
.maincontent {
  background-color: antiquewhite;
  display: flex;
  align-content: stretch;
}
</style>