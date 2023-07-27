<template>
  <div>
    <h3>concept of ref and reactive</h3>
    <a href="https://youtu.be/XvS47yfD1gE">YT link</a>
    <p>{{ ex }}</p>
    <p>will not update in templet with changed value...</p>
    <p>
      for primitive values it will require use of ref while for non promitive it
      will require reactive
    </p>
  </div>
</template>

<script>
export default {
  setup() {
    let ex = "example without ref or reactive";
    setTimeout(() => {
      ex = "ex changed";
    }, 1000);
    return {
      ex,
    };
  },
};
</script>

<style>
</style>