<template>
  <div>
    <div>
      <h1>Watchers in Vue - Udemy</h1>
    </div>
    <b>
      we do not return anything in watchr bcz with watchers we can only react to
      change..
      <br />
      we can apply any reaction that change..but we dont return anything...
      <br />
      bcz we can not use watchers as value in dom ..
    </b>
    <div>
      A watcher in Vue is a special feature that allows us to observe some data
      and perform specific actions when it changes. It is a more generic way to
      observe and react to data changes in the Vue instance. With watchers, we
      are not just able to watch a property and perform custom actions; we can
      also access the old value that this particular property is changing from,
      as well as the new value that it has changed to.
    </div>
    <br />
    <div>
      setting an optional deep property in our watcher to true...And with this
      new addition, our watcher will be triggered even when a nested property
      changes.
    </div>
    <br />
    <div>
      Watchers are not activated immediately unless the value you are watching
      has changed.But in some cases, we may want to perform certain actions with
      the initial value of the property we are watching. For example, our
      application might require that we send an API request with the initial
      data and then repeat the process if the data changes.
      <br />We can force a watcher to be executed immediately by using the
      handler function
    </div>

    <div>{{ myNum }}</div>
    <button @click="pluseNum">click to increment</button>
    <p>{{ watcherEffect }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myNum: 3,
      watcherEffect: "",
    };
  },

  methods: {
    pluseNum() {
      this.myNum = ++this.myNum;
    },
  },

  watch: {
    myNum() {
      this.watcherEffect =
        "lol..mynum changed and i watched it..i see everything";
    },

    deep: true, //optional..for nested watching
  },
};
</script>