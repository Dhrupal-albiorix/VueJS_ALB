<template>
  <div>
    <div>
      <h1>V-if</h1>
      <div>
        Conditionally render an element or a template fragment based on the
        truthy-ness of the expression value.
        <br />
        When used together, v-if has a higher priority than v-for. We don't
        recommend using these two directives together on one element
      </div>

      <div v-if="a > 22">{{ a }} is greater then 22</div>
      <div v-else-if="a < 22">{{ a }} is less then 22</div>
      <div v-else>{{ a }} is 22</div>

      <button @click="changeDigit">change digit</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: 228,
    };
  },

  methods: {
    changeDigit() {
      if (this.a > 22) {
        this.a = 13;
      } else if (this.a == 22) {
        this.a = 32;
      } else {
        this.a = 22;
      }
    },
  },
};
</script>