<template>
  <div>
    <h1>ReactiveProxyvsOriginal - vue2</h1>
    <p>try this example with vue2 aand vue3 both version</p>
    <p>someObject.name: {{ someObject.name }}</p>
    <p>someObject.name: {{ someObject2.name }}</p>
    <!-- <p>{{ newObject.name }}</p> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      someObject: {
        name: "dhrupal",
      },
      someObject2: {
        name: "dhrupal",
      },
    };
  },
  mounted() {
    const newObject = {};

    //in vue2 both of this object will behave reactive
    this.someObject = newObject;

    console.log(
      newObject === this.someObject,
      "sdskjftufdguitugh9oyt98yugyt78t8"
    );
  },
};
</script>