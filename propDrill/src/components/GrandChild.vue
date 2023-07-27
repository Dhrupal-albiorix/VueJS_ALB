<template>
  <div>
    <div>
      <h1>prop drilling - grand child</h1>
    </div>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: ["message"],
};
</script>
