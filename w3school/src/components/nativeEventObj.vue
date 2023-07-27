<template>
  <div>
    <div>
      <h1>Native Event in Vue - Udemy</h1>
    </div>

    Sometimes we also need to access the original DOM event in an inline
    handler. You can pass it into a method using the special $event variable, or
    use an inline arrow function:
    <br />
    <!-- using $event special variable -->
    <!-- <button @click="alert('Form cannot be submitted yet.', $event)">
      Submit
    </button> -->
    <br />
    <!-- using inline arrow function -->
    <div>
      The error message "_ctx.alert is not a function" suggests that the alert
      function is not accessible within the context of your code. It seems like
      you're trying to use the alert function to display a message when the
      submit button is clicked. In JavaScript, the alert function is a global
      function provided by the browser, and it is not directly accessible within
      the context of Vue.js templates. Instead, you can create a method in your
      Vue component and call that method when the button is clicked.
    </div>
    <br />
    <button @click="(event) => warn('Form cannot be submitted yet.', event)">
      Submit
    </button>
    <br />
    <br />
    <input type="text" v-on:input="(event) => myfun(event)" />
    <p>{{ myIp }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myIp: " ",
    };
  },

  methods: {
    warn(message, event) {
      // now we have access to the native event
      if (event) {
        event.preventDefault();
      }
      alert(message);
    },

    myfun(event) {
      // console.log(event);
      this.myIp = event.target.value;
    },
  },
};
</script>