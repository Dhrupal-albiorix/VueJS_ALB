<template>
  <div>
    <div><h1>Secound Child component</h1></div>
    <div>
      <ul>
        <li>{{ school }}</li>
        <li>{{ clg }}</li>
        <li>{{ city }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["school", "clg", "city"],
};
</script>