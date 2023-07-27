<template>
  <div>
    <div>
      <h1>V-HTML</h1>
    </div>
    <p>Update the element's innerHTML.</p>
    <p>Expects: string</p>
    <p>
      Contents of v-html are inserted as plain HTML - Vue template syntax will
      not be processed
    </p>
    <p>
      In Single-File Components, scoped styles will not apply to content inside
      v-html, because that HTML is not processed by Vue's template compiler. If
      you want to target v-html content with scoped CSS, you can instead use CSS
      modules or an additional, global style element with a manual scoping
      strategy such as BEM.
    </p>

    <div v-html="dynamicHTML"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dynamicHTML:
        "<p>This is <strong>dynamic</strong> HTML content. i am typed using v-html</p>",
    };
  },
};
</script>