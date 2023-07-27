<template>
  <div>
    <h2>general</h2>

    <div>
      <div v-for="p in allCatogary" :key="p" class="AllCatogary">
        <p>Prodcut Name : {{ p.ProdcutName }}</p>
        <p>product price :{{ p.price }}</p>
        <p>product color : {{ p.color }}</p>
      </div>
    </div>

    <button @click="catogaryWise">{{ catogrySection }}</button>
    <div v-if="catogaryWiseDigit">
      <KeepAlive>
        <component
          :is="currentComponent"
          :femaleProduct="femaleProducts"
          :maleProduct="maleProduct"
          :childProduct="childProduct"
        />
      </KeepAlive>
      <button @click="toggle">{{ category }}</button>
    </div>
  </div>
</template>

<script>
import FemaleComponent from "./FemaleComponent.vue";
import MaleComponent from "./MaleComponent.vue";
import ChildComponent from "./ChildComponent.vue";

export default {
  components: {
    FemaleComponent,
    MaleComponent,
    ChildComponent,
  },

  data() {
    return {
      catogrySection: "go with catogary",
      catogaryWiseDigit: false,
      category: "male",
      currentComponent: "FemaleComponent",

      femaleProducts: [
        {
          ProdcutName: "p1",
          price: 999,
          color: "black",
        },
        {
          ProdcutName: "p2",
          price: 890,
          color: "pink",
        },
        {
          ProdcutName: "p3",
          price: 999,
          color: "red",
        },
        {
          ProdcutName: "p1",
          price: 490,
          color: "black",
        },
        {
          ProdcutName: "p4",
          price: 999,
          color: "black",
        },
        {
          ProdcutName: "p5",
          price: 799,
          color: "white",
        },
      ],

      maleProduct: [],

      childProduct: [],

      allCatogary: [],
    };
  },

  created() {
    this.maleProduct = this.femaleProducts; // Assign femaleProducts to maleProducts
    this.childProduct = this.femaleProducts;
    this.allCatogary = [
      ...this.femaleProducts,
      ...this.maleProduct,
      ...this.childProduct,
    ];
    console.log(this.allCatogary);
  },

  methods: {
    catogaryWise() {
      this.catogaryWiseDigit = !this.catogaryWiseDigit;
      if (this.catogaryWiseDigit) {
        this.catogrySection = "close cetogry";
      } else {
        this.catogrySection = "go with catogary";
      }
    },

    toggle() {
      if (this.currentComponent === "FemaleComponent") {
        this.currentComponent = "MaleComponent";
        this.category = "child";
      } else if (this.currentComponent === "MaleComponent") {
        this.currentComponent = "ChildComponent";
        this.category = "female";
      } else {
        this.currentComponent = "FemaleComponent";
        this.category = "male";
      }
    },
  },
};
</script>

<style scoped>
.AllCatogary {
  background-color: blanchedalmond;
  color: #000;
  padding: 2%;
  display: inline-block;
  margin: 20px;
}
</style>
