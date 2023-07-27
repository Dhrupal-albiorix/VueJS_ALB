<template>
  <div>
    <div>
      <h1>Computed Property in Vue (2.0) - rendome source and doc</h1>
      <a
        href="https://vuejs.org/guide/essentials/computed.html#computed-caching-vs-methods"
        >doc</a
      >
    </div>
    <div>
      In Vue.js, computed properties enable you to create a property that can be
      used to modify, manipulate, and display data within your components in a
      readable and efficient manner. You can use computed properties to
      calculate and display values based on a value or set of values in the data
      model. It can also have some custom logic that is cached based on its
      dependencies, meaning it doesn't reload but does have a dependency that
      changes, allowing it to somewhat listen to changes and act accordingly.
    </div>

    <div>
      we can use computed only the way we use data..i.e we can use it in templet
      function call...we nighther call function defined in computed on any event
      nor we can use it the way we use function inside mthods property.
    </div>

    <div>
      functions inside computed will only called when any change reharding that
      perticlure function will occure.
    </div>

    <img src="../assets/Screenshotudemy.png" alt="" class="static" />
    <br />
    <br />
    <br />
    <a href="https://beginnersoftwaredeveloper.com/when-to-use-computed-in-vue/"
      >Best Artical</a
    >
    <br />
    <br />
    <input type=" number" name="" id="" v-model="myNum" />
    <button @click="PluseMynum">my num pluse</button>
    <p>
      {{ computedWorking }} : i am updating bcz value inside compute method is
      changing...otherwise unlike method i would not run
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myNum: 2,
    };
  },

  methods: {
    PluseMynum() {
      this.myNum = ++this.myNum;
    },
  },

  computed: {
    computedWorking() {
      return this.myNum;
    },
  },
};
</script>

<style scoped>
.static {
  width: 670px;
  height: 530px;
}
</style>