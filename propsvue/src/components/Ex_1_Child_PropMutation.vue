<template>
  <div>
    <div>
      <h1>Props mutation</h1>
    </div>

    <div>
      <p>{{ num == "2" ? "(two)" : "not two" }}</p>
      <p>{{ fristName }}</p>
      <p>{{ MiddleName }}</p>
      <p>{{ LastName }}</p>

      <button @click="PropValChange()">Chnage prop value</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["num", "fristName", "MiddleName", "LastName"],

  data() {
    return {};
  },

  methods: {
    PropValChange() {
      if (this.num !== 2) {
        //data pass from parent to child can only be changed in parent
        //once data is passed we can't change
        //this.num = 2; //error  Unexpected mutation of "num" prop
        console.log("not two");
      }
    },
  },
};
</script>