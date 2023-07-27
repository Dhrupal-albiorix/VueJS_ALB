<template>
  <div>
    <nav-bar />
    <p>Home</p>
    <data-product :alirlineinfo="airlines" />
  </div>
</template>

<script>
import DataProduct from "./DataProduct.vue";
import NavBar from "./NavBar.vue";
export default {
  components: { NavBar, DataProduct },

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
        {
          id: 1023,
          name: "p1",
          price: 233,
          description: "dnkjyfjh vmb hdsfrg",
        },
        {
          id: 1024,
          name: "p2",
          price: 223,
          description: "dnkjyfjh vmb hdsfrg",
        },
        {
          id: 1025,
          name: "p3",
          price: 2333,
          description: "dnkjyfjh vmb hdsfrg",
        },
        {
          id: 1026,
          name: "p4",
          price: 2343,
          description: "dnkjyfjh vmb hdsfrg",
        },
        {
          id: 1027,
          name: "p5",
          price: 233,
          description: "dnkjyfjh vmb hdsfrg",
        },
        {
          id: 1028,
          name: "p6",
          price: 2363,
          description: "dnkjyfjh vmb hdsfrg",
        },
        {
          id: 1029,
          name: "p7",
          price: 2373,
          description: "dnkjyfjh vmb hdsfrg",
        },
        {
          id: 1030,
          name: "p8",
          price: 2303,
          description: "dnkjyfjh vmb hdsfrg",
        },
        {
          id: 1031,
          name: "p9",
          price: 2383,
          description: "dnkjyfjh vmb hdsfrg",
        },
        {
          id: 1031,
          name: "p10",
          price: 233,
          description: "dnkjyfjh vmb hdsfrg",
        },
        {
          id: 1032,
          name: "p11",
          price: 233,
          description: "dnkjyfjh vmb hdsfrg",
        },
        {
          id: 1033,
          name: "p12",
          price: 233,
          description: "dnkjyfjh vmb hdsfrg",
        },
      ],
    };
  },

  methods: {
    async fetchData() {
      // const response = await fetch(
      //   `https://hub.dummyapis.com/products?noofRecords=10&idStarts=1001&currency=usd`
      // );
      // const data = await response.json();
      const arr2 = this.exArr;
      // console.log(data);
      this.airlines = [ ...arr2];
    },
  },

  created() {
    this.fetchData();
  },
};
</script>

<style>
</style>