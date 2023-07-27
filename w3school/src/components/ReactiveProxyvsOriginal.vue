<template>
  <div>
    <h1>ReactiveProxyvsOriginal - vue3</h1>
    <p>try this in vue2 also</p>
    <p>{{ someObject }}</p>
    <p>{{ newObject }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      someObject: {
        name: "dhrupal",
      },
      someObject2: {},
    };
  },
  mounted() {
    const newObject = {};
    //in vue2 both of this object will behave reactive ;
    //but in vue 3  this.someObject is reactive and newObject is not reactive
    this.someObject = newObject;

    console.log(
      newObject === this.someObject,
      "sdskjftufdguitugh9oyt98yugyt78t8"
    );

    newObject.name = "abcd"; // although newObject is not reactive but change in that object will be shown in template
    // bcz proxy object of that will show that change
  },
};
</script>