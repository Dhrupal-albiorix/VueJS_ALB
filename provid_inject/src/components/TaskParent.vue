<template>
  <div>
    <div><h1>Task_parent</h1></div>

    <!-- In your Vue file, define a Parent component (e.g., ParentComponent) with a template.
In the template, add a <ul> element to display the list of products.
Import and register the Child component. -->

    <label for="name">Product name : </label
    ><input
      type="text"
      placeholder="your product name"
      v-model="product.name"
    />

    <br />
    <br />

    <label for="price">Product price: </label>

    <input
      type="text"
      placeholder="your product price"
      v-model="product.price"
    />

    <br /><br />
    <label for="price">Product information: </label>
    <input
      type="text"
      placeholder="your product info"
      v-model="product.information"
    />
    <br /><br />
    <button type="submit" @click="submit">submit</button>
    <button v-show="show" type="button" @click="update">update</button>

    <ul>
      <TaskChild @edit-event="editEvent()" />
    </ul>
  </div>
</template>

<script>
import TaskChild from "../components/TaskChild.vue";
export default {
  components: {
    TaskChild,
  },
  data() {
    return {
      show: false,

      product: {
        name: " ",
        price: " ",
        information: " ",
      },

      productArr: [],
      index: 0,
    };
  },

  methods: {
    submit() {
      // this.productArr.push(this.product ); each time same object so it will refer to same object..so while uploding new product
      //it will show change in privios product also
      this.productArr.push({ ...this.product });
      this.product.name = "";
      this.product.price = "";
      this.product.information = "";
      this.index++;
    },

    edit() {
      // Implement your edit logic here, using the provided product object
      // For example, you can open a modal or navigate to an edit page with the selected product details
      console.log("Editing product:", this.index);
      console.log(this.productArr[this.index - 1]);
      this.product.name = this.productArr[this.index - 1].name;
      this.product.price = this.productArr[this.index - 1].price;
      this.product.information = this.productArr[this.index - 1].information;

      this.show = !this.show;
    },

    update() {
      this.productArr[this.index - 1].name = this.product.name;
      this.productArr[this.index - 1].price = this.product.price;
      this.productArr[this.index - 1].information = this.product.information;
    },
  },

  provide() {
    return {
      productList: this.productArr,
      editProduct: this.edit,
    };
  },
};
</script>