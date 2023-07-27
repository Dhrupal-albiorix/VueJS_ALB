<template>
  <div>
    <div>
      <h1>V-Show</h1>
    </div>
    <div>
      Toggle the element's visibility based on the truthy-ness of the expression
      value.
      <br />
      Expects: any
      <br />
      Details : v-show works by setting the display CSS property via inline
      styles, and will try to respect the initial display value when the element
      is visible. It also triggers transitions when its condition changes.
      <br />
      If the data is true it will make it visible else it will make it
      invisible.

      <div v-show="message" id="app">
        Hello I'm visible or not will depend on v-show and toggle click
      </div>
      <button @click="tgl">show work on my method</button>

      <!-- ---------------------------------------------------------------------- -->

      <div v-show="hide">i will hide</div>
      <button @click="hideFun" v-text="btn_text"></button>

      <!-- ----------------------------------------------------------------------- -->

      <div v-show="open">i will close soon</div>
      <button @click="closeFun">{{ OpenClose }}</button>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      message: true,
      hide: true,
      btn_text: "hide",
      open: true,
      OpenClose: "close me",
    };
  },

  methods: {
    tgl() {
      this.message = !this.message;
    },
    hideFun() {
      this.hide = !this.hide;
      if (this.hide == false) {
        this.btn_text = "show";
      } else {
        this.btn_text = "hide";
      }
    },
    closeFun() {
      this.open = !this.open;
      if (this.open == false) {
        this.OpenClose = "open this";
      } else {
        this.OpenClose = "close this";
      }
    },
  },
};
</script>