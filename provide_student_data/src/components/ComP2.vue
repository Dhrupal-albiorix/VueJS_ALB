<template>
  <div>
    <div class="container">
      <div v-for="s in filteredStudentDetails" :key="s.id" class="allData">
        <h2>{{ s.subjectName }}</h2>
        <p>
          <b>
            <em> {{ s.subjectDescription }} </em>
          </b>
        </p>
        <com-p-3 />
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import ComP3 from "./ComP3.vue";

export default {
  components: { ComP3 },
  inject: ["studentDetails"],

  props: {
    subjectFilter: {
      type: String,
      required: true,
    },
  },

  computed: {
    filteredStudentDetails() {
      return this.studentDetails.filter((element) => {
        return element.subjectName === this.subjectFilter;
      });
    },
  },

  provide() {
    return {
      filteredStudentDetails: this.filteredStudentDetails,
    };
  },
};
</script>

<style scoped>
.allData {
  background-color: rgb(130, 137, 122);
  color: aliceblue;
  /* display: inline-block; */
  width: 200px;
  padding: 20px;
  margin: 30px;
}
</style>
