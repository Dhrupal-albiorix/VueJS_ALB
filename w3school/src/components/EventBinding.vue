<template>
  <div>
    <h1>Event in Vue - Udemy</h1>
    <a href="https://vuejs.org/api/built-in-directives.html#v-on">Doc</a>
    <div>
      Attach an event listener to the element.
      <br />
      Shorthand: @
      <br />
      Expects: Function |Inline Statement | Object (without argument) Argument:
      event (optional iusing Object syntax)
    </div>
    <div>
      v-on also supports binding to an object of event / listener pairs without
      an argument. Note when using the object syntax, it does not support any
      modifiers.
    </div>

    <p>{{ count }}</p>
    <button @click="count++">increse count</button>

    <input type="text" v-on:input="ip" /><span>{{ ipValue }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      ipValue: " ",
    };
  },

  methods: {
    ip() {
      this.ipValue = "some one is typing in input filed";
    },
  },
};
</script>