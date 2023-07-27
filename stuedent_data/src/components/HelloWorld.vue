<template>
  <div>
    <div>
      <subject-comp
        class="stdata"
        v-for="(person, index) in studentDetails"
        :key="index"
        :subjectName="person.subjectName"
        :subjectDescription="person.subjectDescription"
        :student="person.student"
        @edit-event="editEvent"
      />
    </div>
  </div>
</template>

<script>
import SubjectComp from "./SubjectComp.vue";

export default {
  components: {
    SubjectComp,
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
    editEvent(editedStudentName, rollNo) {
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
};
</script>

<style scoped>
.stdata {
  background-color: blanchedalmond;
  color: #000;
  padding: 2%;
  display: inline-block;
  margin: 20px;
  width: 325px;
}
</style>
