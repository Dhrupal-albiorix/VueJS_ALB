<template>
  <div>
    <div><b>arr of task from state :</b>{{ tasks.tasks }}</div>
    <br />
    <div><b> name :</b> {{ tasks.name }}</div>
    <br />
    <div>
      <b>arr of favourite task from getters : </b> {{ tasks.favourite_task }}
    </div>
  </div>
</template>

<script>
import { useTaskStore } from "../stores/counter.js";
export default {
  setup() {
    const tasks = useTaskStore();
    return { tasks };
  },
};
</script>

<style>
</style>