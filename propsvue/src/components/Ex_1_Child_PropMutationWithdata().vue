<template>
  <div>
    <div><h1>Props mutation with data()</h1></div>

    <div>
      <p>{{ course }}</p>
      <p>{{ subject }}</p>
      <p>{{ gread }}</p>
      <!-- <p>{{ gread == "A" ? "(Good score)" : "batter luck next time" }}</p> -->
      <p>updating prop :{{ Updated_gread }}</p>
      <p>
        {{ Updated_gread == "A" ? "(Good score)" : "batter luck next time" }}
      </p>
      <button @click="GreadChange">Change gread</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["course", "subject", "gread"],

  data() {
    return {
      Updated_gread: this.gread,
    };
  },

  methods: {
    GreadChange() {
      if (this.Updated_gread !== "A") {
        this.Updated_gread = "A";
      }
    },
  },
};
</script>