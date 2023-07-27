<template>
  <div>
    <div>
      <h1>Event Modifiers in Vue - Udemy</h1>
    </div>

    Modifiers
    <br />
    .stop - call event.stopPropagation().
    <br />
    .prevent - call event.preventDefault().
    <br />
    .capture - add event listener in capture mode.
    <br />
    .self - only trigger handler if event was dispatched from this element.
    <br />
    .{keyAlias} - only trigger handler on certain keys.
    <br />
    .once - trigger handler at most once.
    <br />
    .left - only trigger handler for left button mouse events.
    <br />
    .right - only trigger handler for right button mouse events.
    <br />
    .middle - only trigger handler for middle button mouse events.
    <br />
    .passive - attaches a DOM event with { passive: true }
    <br />
    <button v-on:click.once="createAlert">Create Alert</button>
    <br />

    <p v-once>Initial Value: {{ count }}</p>
    <p>Current Value: {{ count }}</p>
    <button v-on:click="counter()">Increment</button>
    <br />
    <br />
    <div>
      System Modifier Keys
      <br />
      .ctrl , .alt , .shift , .meta
    </div>

    <button @click.ctrl="ctrPress">A</button>
    <p>{{ ctr }}: .... waiting to click with cntrl</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 10,
      keydn: "",
      ctr: " ",
    };
  },
  methods: {
    counter() {
      this.count++;
    },
    createAlert() {
      alert("Alert created from button click");
    },
    ctrPress() {
      this.ctr = "controll pressed with click";
    },
  },
};
</script>