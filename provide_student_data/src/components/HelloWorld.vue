<template>
  <div>
    <div>
      <sub-comp
        class="stdata"
        v-for="(person, index) in studentDetails"
        :key="index"
        :subjectName="person.subjectName"
        :subjectDescription="person.subjectDescription"
        :student="person.student"
      />
    </div>
  </div>
</template>

<script>
import SubComp from "./SubComp.vue";

export default {
  components: {
    SubComp,
  },

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
      editProduct: this.edit,
    };
  },
};
</script>

<style scoped>
.stdata {
  background-color: blanchedalmond;
  color: #000;
  padding: 2%;
  display: inline-block;
  margin: 20px;
}
</style>
