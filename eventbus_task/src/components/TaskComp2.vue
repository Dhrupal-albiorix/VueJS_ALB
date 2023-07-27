<template>
  <div>
    <!-- <p>{{ subjectsArr }}</p> -->
    <div v-for="subject in subjectsArr" :key="subject.id">
      <p>Sub name : {{ subject.SubjectName }}</p>
      <p>Sub info : {{ subject.SubjectDis }}</p>
      lol : <task-comp-3></task-comp-3>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/eventbus";
import TaskComp3 from "./TaskComp3.vue";
export default {
  components: { TaskComp3 },
  data() {
    return {
      subjectsArr: [],
    };
  },
  methods: {
    clickHandler(subjects) {
      console.log("Subjects received:", subjects);
      this.subjectsArr = subjects;
    },
  },

  mounted() {
    console.log("TaskComp2 mounted");
    EventBus.$on("clickedSubject", this.clickHandler);
  },
};
</script>

<style>
</style>