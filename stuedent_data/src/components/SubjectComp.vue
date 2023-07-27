<template>
  <div>
    <div>
      <div class="sub">
        <p>Subject name: {{ subjectName }}</p>
        <p>Subject Description: {{ subjectDescription }}</p>
      </div>

      <stu-comp
        v-for="s in student"
        :key="s.id"
        :s="s"
        @edit-event="editEvent"
      />
    </div>
  </div>
</template>

<script>
import StuComp from "./StuComp.vue";

export default {
  components: {
    StuComp,
  },
  props: {
    subjectName: String,
    subjectDescription: String,
    student: Array,
  },

  methods: {
    editEvent(rollNo, editedStudentName) {
      this.$emit("edit-event", rollNo, editedStudentName);
    },
  },
};
</script>

<style scoped>
.sub {
  color: rgba(0, 0, 0, 0.516);
  font-size: 20px;
}
</style>

