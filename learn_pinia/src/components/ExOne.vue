<template>
  <div>
    <div>ex-1</div>
    <div>
      <div>Current Count: {{ counter.count }}</div>
      <div>
        <router-link to="/ExTwo">/ExTwo</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { useCounterStore } from "../stores/counter.js";

export default {
  setup() {
    const counter = useCounterStore();
    return { counter };
  },
};
</script>

<style>
/* Your styles here */
</style>
