<template>
  <div>
    <div>
      <h1>V-Pre in Vue</h1>
    </div>
    <p>
      Inside the element with v-pre, all Vue template syntax will be preserved
      and rendered as-is.
    </p>
    <span v-pre>{{ name }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "lol",
    };
  },
};
</script>