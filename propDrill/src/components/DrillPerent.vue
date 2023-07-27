<template>
  <div>
    <div><h1>Drill Perent</h1></div>
    <input type="text" v-model="ipData" />
    <button type="submit" @click="submit">add</button>
    <DrillChild
      v-for="(friend, index) in ipDataArr"
      :key="index"
      :name="friend"
    />
  </div>
</template>

<script>
import DrillChild from "../components/DrillChild.vue";
export default {
  components: {
    DrillChild,
  },

  data() {
    return {
      ipData: "",
      ipDataArr: [],
    };
  },

  methods: {
    submit() {
      this.ipDataArr.push(this.ipData);
    },
  },
};
</script>