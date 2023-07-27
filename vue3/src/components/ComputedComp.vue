<template>
  <div>
    <p>{{ f_name }}</p>
    <p>{{ L_name }}</p>
    <form action="">
      <div>
        <input type="text" placeholder="first name" v-model="f_name" />
      </div>
      <div>
        <input type="text" placeholder="last name" v-model="L_name" />
      </div>
    </form>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const formDta = reactive({
      f_name: "",
      L_name: "",
    });

    return {
      ...toRefs(formDta),
    };
  },
};
</script>

<style>
</style>