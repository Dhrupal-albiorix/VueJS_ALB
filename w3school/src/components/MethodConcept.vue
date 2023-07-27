<template>
  <div>
    <div>
      <h1>Methods in Vue - Udemy</h1>

      <a v-bind:href="Link">Udemy</a>
      <br />
      <a href="https://digitalya.co/blog/vue-js-methods/">Article here</a>

      <div>
        Now, what are the Vue methods? They are objects associated with a Vue
        instance. Otherwise, vue js methods are functions that trigger certain
        actions as commanded by the user. They are commonly used for event
        handling.
      </div>

      <div>
        Declared methods can be directly accessed on the component instance, or
        used in template expressions. All methods have their
        <b>this context </b>
        automatically bound to the component instance, even when passed around.
      </div>

      <b
        >Avoid using arrow functions when declaring methods, as they will not
        have access to the component instance via this.</b
      >

      <div v-text="myMethod()"></div>

      <input type="number" v-model="num" />
      <p>{{ num }}</p>
      <p>{{ mySecoundMethod() }}</p>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Link: "https://billennium.udemy.com/course/vuejs-2-the-complete-guide/learn/lecture/21463140#overview",
      a: 11,
      num: " ",
    };
  },

  methods: {
    myMethod() {
      if (this.a > 33) {
        return "less then 33";
      } else {
        return "bigger or equal to 33";
      }
    },

    mySecoundMethod() {
      if (this.num % 2 == 0) {
        return "even";
      } else {
        return "not even";
      }
    },
  },
};
</script>