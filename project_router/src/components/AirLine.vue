<template>
  <div>
    <airline-data :alirlineinfo="airlines" />
  </div>
</template>

<script>
import AirlineData from "./AirlineData.vue";

export default {
  components: { AirlineData },
  data() {
    return {
      airlines: [],
      exArr: [
        {
          id: 1011,
          name: "p1",
          price: 233,
          description: "dnkjyfjh vmb hdsfrg",
        },
        {
          id: 10112,
          name: "p2",
          price: 223,
          description: "dnkjyfjh vmb hdsfrg",
        },
        {
          id: 1013,
          name: "p3",
          price: 2333,
          description: "dnkjyfjh vmb hdsfrg",
        },
        {
          id: 1014,
          name: "p4",
          price: 2343,
          description: "dnkjyfjh vmb hdsfrg",
        },
        {
          id: 1015,
          name: "p5",
          price: 233,
          description: "dnkjyfjh vmb hdsfrg",
        },
        {
          id: 1016,
          name: "p6",
          price: 2363,
          description: "dnkjyfjh vmb hdsfrg",
        },
        {
          id: 1017,
          name: "p7",
          price: 2373,
          description: "dnkjyfjh vmb hdsfrg",
        },
        {
          id: 1018,
          name: "p8",
          price: 2303,
          description: "dnkjyfjh vmb hdsfrg",
        },
        {
          id: 1019,
          name: "p9",
          price: 2383,
          description: "dnkjyfjh vmb hdsfrg",
        },
        {
          id: 1020,
          name: "p10",
          price: 233,
          description: "dnkjyfjh vmb hdsfrg",
        },
        {
          id: 1021,
          name: "p11",
          price: 233,
          description: "dnkjyfjh vmb hdsfrg",
        },
        {
          id: 1022,
          name: "p12",
          price: 233,
          description: "dnkjyfjh vmb hdsfrg",
        },
      ],
    };
  },
  methods: {
    async fetchData() {
      const response = await fetch(
        `https://hub.dummyapis.com/products?noofRecords=10&idStarts=1001&currency=usd`
      );
      const data = await response.json();
      const arr2 = this.exArr;
      console.log(data);
      this.airlines = [...data, ...arr2];
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style>
</style>
