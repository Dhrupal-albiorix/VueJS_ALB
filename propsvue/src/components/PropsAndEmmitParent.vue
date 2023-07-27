<template>
  <div>
    <div>
      <div><h1>Props AndEmmit Parent</h1></div>
    </div>
    <PropsAndEmmitChild
      v-for="(friend, index) in friendsArr"
      :key="index"
      :name="friend.name"
      :PhoneNumber="friend.PhoneNumber"
      :EmailAdderess="friend.EmailAdderess"
      @my-event="myEvent(friend.name)"
      ref="component"
    />

    <PropsAndEmmitChild2
      v-for="(data, i) in eductionArr"
      :key="i"
      :school="data.school"
      :clg="data.clg"
      :city="data.city"
      @my-event2="myEvent2(i)"
    />

    <EventEmmitChild3
      v-for="(funder, i) in faunderArr"
      :key="i"
      :idea="funder.idea"
      :founder_name="funder.founder_name"
      :amount="funder.amount"
      @my-event3="myEvent3()"
    />
  </div>
</template>


<script>
import PropsAndEmmitChild from "./PropsAndEmmitChild.vue";
import PropsAndEmmitChild2 from "./PropsAndEmmitChild2.vue";
import EventEmmitChild3 from "./EventEmmitChild3.vue";
export default {
  components: { PropsAndEmmitChild, PropsAndEmmitChild2, EventEmmitChild3 },
  data() {
    return {
      friendsArr: [
        {
          name: "name1",
          PhoneNumber: "87343465648937",
          EmailAdderess: "aa@df.com",
        },
        {
          name: "name2",
          PhoneNumber: "87343465648937",
          EmailAdderess: "aa@df.com",
        },
        {
          name: "name3",
          PhoneNumber: "87343465648937",
          EmailAdderess: "aa@df.com",
        },
        {
          name: "name4",
          PhoneNumber: "87343465648937",
          EmailAdderess: "aa@df.com",
        },
      ],

      eductionArr: [
        {
          school: "s1",
          clg: "clg1",
          city: "city1",
        },
        {
          school: "s2",
          clg: "clg2",
          city: "city2",
        },
        {
          school: "s3",
          clg: "clg3",
          city: "city3",
        },
        {
          school: "s4",
          clg: "clg4",
          city: "city4",
        },
      ],

      faunderArr: [
        {
          founder_name: "founder1",
          idea: "idea1",
          amount: 245665657,
        },
        {
          founder_name: "founder2",
          idea: "idea2",
          amount: 235665657,
        },
        {
          founder_name: "founder3",
          idea: "idea3",
          amount: 205665657,
        },
      ],
    };
  },

  methods: {
    myEvent(name) {
      alert(name);
      console.log(name);
    },

    myEvent2(i) {
      if (i % 2 == 0) {
        alert("even index");
      } else {
        alert("odd");
      }
    },

    myEvent3() {
      console.log("emmited");
    },
  },
};
</script>