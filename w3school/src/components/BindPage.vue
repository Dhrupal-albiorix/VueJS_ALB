<template>
  <div>
    <div>
      <h1>V-bind</h1>
    </div>
    <p>hello bind</p>
    <div>
      The v-bind directive is a Vuejs directive used to bind one or more
      attributes, or a component prop to an element. If that attribute is binded
      to our data defined in Vuejs instance then dynamically changes can be
      observed as data changes.
    </div>
    <div v-bind:Class="bindedClass">my class is binded</div>
    <input type="text" name="" id="" v-bind:value="myData" /> :
    <span>one way binding -- v-binf</span>
    <p>{{ myData }}</p>
    <br />
    <br />
    <button v-bind:class="[active ? MyClass : otherClass]" @click="toggle">
      class chnage as toggale
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bindedClass: "iAmClass",
      myData: "dnj",
      active: true,
      MyClass: "MyClass",
      otherClass: "otherClass",
    };
  },

  methods: {
    toggle() {
      this.active = !this.active;
    },
  },
};
</script>

<style>
.iAmClass {
  background-color: black;
  color: aliceblue;
}

.MyClass {
  background-color: blue;
  color: aliceblue;
}

.otherClass {
  background-color: bisque;
  color: black;
}
</style>