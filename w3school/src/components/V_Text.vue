<template>
  <div>
    <div>
      <h1>V-Text</h1>
    </div>
    <p>
      Update the element's text content.
      <br />
      Expects: string
    </p>
    <div>
      v-text works by setting the element's textContent property, so it will
      overwrite any existing content inside the element. If you need to update
      the part of textContent, you should use mustache interpolations instead.
    </div>

    <span>{{ msg }}</span>
    <br />
    <div v-text="msg"></div>
    <!-- mustache interpolations -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "this is text bind",
    };
  },
};
</script>