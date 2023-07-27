<template>
  <div>
    <div><h1>Event Emmiting</h1></div>
    <p>Count: {{ count }}</p>
    <p>number: {{ number }}</p>
    <p><input type="text" v-model="ipData" /></p>
    <EventEmmitChild
      @add="(i) => (count += i)"
      @multiplay="(k) => (number = number * k)"
      @multiplay2="(k) => (count = count * k)"
      @ip="ip"
    />
    <div v-for="n in DataArr" :key="n">{{ n }}</div>
  </div>
</template> 

<script>
import EventEmmitChild from "../components/EventEmmitChild.vue";

export default {
  components: {
    EventEmmitChild,
  },

  data() {
    return {
      count: 2,
      number: 22,
      ipData: "",
      DataArr: [],
    };
  },

  methods: {
    ip() {
      console.log("ip");
      this.DataArr.push(this.ipData);
      console.log(this.DataArr);
    },
  },
};
</script>