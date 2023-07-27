<template>
  <div>
    <div>
      <h1>
        Refs in Vue -
        <a href="https://blog.logrocket.com/understanding-vue-refs/"
          >blog.logrocket</a
        >
      </h1>
    </div>
    <div>
      Refs are Vue.js instance properties that are used to register or indicate
      a reference to HTML elements or child elements in the template of your
      application.
    </div>

    <div>
      If a ref attribute is added to an HTML element in your Vue template,
      you'll then be able to reference that element or even a child element in
      your Vue instance. You can also access the DOM element directly; it is a
      read-only attribute and returns an object.
    </div>

    <div>
      The use of JavaScript's getElementById is not encouraged in Vue, as it
      creates performance issues. Vue's ref helps you 'reference' DOM elements
      in a more efficient way.
    </div>

    <p>
      <b
        >The ref attribute makes a DOM element selectable by serving as the key
        in the parent $ref attribute.
        <br />
        Putting a ref attribute in an input element, for instance, will expose
        the parent DOM node as <br />
        this.$refs.input, or you can say <br />
        this.refs["input"]
      </b>
    </p>

    <p>
      Note that you can only access the ref after the component is mounted. If
      you try to access $refs.input in a template expression, it will be null on
      the first render. This is because the element doesn't exist until after
      the first render!
    </p>

    <p>
      You can manipulate a DOM element by defining methods on the element’s
      reference. For example, you could focus on an input element with
      <br />this.$refs["input"].focus() <br />
      <b>However, they are not data properties, so they are not reactive.</b>
    </p>
    <div>
      <p>
        You have counted {{ this.counter }} times

        <button @click="clicked">Add 1 to counter</button>
      </p>

      <br />
      <input type="text" ref="input" />
    </div>

    <div>
      <p ref="pera">peraNum : {{ peraNum }}</p>
      <button @click="peraUpdate">less in peraNum</button>
    </div>

    <div>
      <li v-for="item in list" :key="item" ref="items">
        {{ item }}
      </li>
    </div>

    <div>
      Instead of a string key, the ref attribute can also be bound to a
      function, which will be called on each component update and gives you full
      flexibility on where to store the element reference. The function receives
      the element reference as the first argument:
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      peraNum: 300,
      list: [22, 33, 56, "dsf", "gdh", 23],
    };
  },
  methods: {
    clicked() {
      this.counter++;
      console.log(this.$refs.input.value);
    },
    peraUpdate() {
      this.peraNum = --this.peraNum;
    },
  },

  watch: {
    //watching ref
    peraNum() {
      this.$refs.input.value = 33;
      console.log(this.$refs.pera);
      let myTeg = this.$refs.pera;
      myTeg.style.color = "red";
      this.$refs.click;
    },
  },
  created() {
    console.log(this.$refs.pera); //undefine in before mounted
  },
  mounted() {
    console.log(this.$refs.items, "items arr"); //refrence returns whole teg..not value..elements with li teg will be return
    console.log(this.$refs.pera);
    console.log(this.$refs, "all refs"); //all refs in component
  },
};
</script>