<template>
  <div>
    <div>
      <h1>Computed Property in Vue - Udemy</h1>
    </div>

    <div>
      <a
        href="https://www.reddit.com/r/vuejs/comments/ug1bdo/is_it_bad_practice_to_call_an_method_in_your/"
      >
        Calling a function from a template will be called anytime data changes
        for the component. Conversely a computed variable is only recalculated
        when a reactive variable it uses has been changed. So a function call in
        a template comes with a greater performance cost.
      </a>

      <div>
        using function call in templet is very bad way bcz every time we go
        through any event in whole page , this function agin stored again in
        memory. go to console..myfun() will exicuted every time any event
        occures in this component page .(only this computed propety page)
        <br />
        so we use computed properties instand.
      </div>
      <p>{{ myfun() }}</p>
      <p>{{ n }}</p>
      <button @click="clickMe">Click me</button>
      <button @click="clickMe2">Click me2</button>
      <button @click="clickMe3">Click me 3</button>
    </div>
    <br />
    <br />
    <b>//using computed property here //</b>
    <br />
    <p>{{ MyCompFun }}</p>
    <br />

    <button @click="myTime">try to change computed time : err</button> :
    <span>
      In the code you provided, myTime is defined as a computed property rather
      than a method. Computed properties in Vue.js are used to calculate and
      cache values based on other reactive properties. They are not meant to be
      invoked as functions.
    </span>
    <br />
    <p>
      If you want to update the value of myTime when the button is clicked, you
      can create a data property to store the current time and update it when
      the button is clicked
    </p>
    <p>
      Time inside compuetd : {{ myTime }} : stay as it is whatever heppens in
      page..untill event is related to its own applied function
    </p>
    <p>
      Time inside method : {{ myTimeInMethod() }} : call everytime we pass any
      event in this page
    </p>
  </div>
</template>


<script>
export default {
  data() {
    return {
      n: 22,
      Mynum: 0,
    };
  },

  methods: {
    myfun() {
      console.log("again");
      return " every time you use function call in templte ...whenver you go thorugh any event on whole component page..that function will restore in memory";
    },
    clickMe() {
      this.n = ++this.n;
    },
    clickMe2() {
      this.n = ++this.n;
    },
    clickMe3() {
      this.n = ++this.n;
    },
    myTimeInMethod() {
      return Date.now();
    },
  },

  computed: {
    MyCompFun() {
      console.log(
        "inside computed..i will not exicute every time you go to any event"
      );
      return "inside computed";
    },
    myTime() {
      console.log(Date.now());
      return Date.now();
    },
  },
};
</script>