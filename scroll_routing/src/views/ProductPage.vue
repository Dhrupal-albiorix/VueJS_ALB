<template>
  <div>
    <div>
      <div>
        <h1>{{ myobj.name }}</h1>
        <h3>{{ myobj.description }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myobj: {},
    };
  },

  props: {
    info: {
      type: Object,
      required: true,
    },
  },

  mounted() {
    console.log(JSON.parse(this.$route.query.info));
    this.myobj = JSON.parse(this.$route.query.info);
  },
};
</script>

<style>
</style>