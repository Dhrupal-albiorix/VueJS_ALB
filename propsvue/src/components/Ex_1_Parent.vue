<template>
  <div>
    <div><h1>First parent component</h1></div>
    <!-- <Ex_1_Child /> -->
    <Ex_1_Child
      name="Dhrupal"
      PhoneNumber="6458758786"
      EmailAdderess="asc@dfkl.ll"
    />
    <Ex_1_Child
      name="Dhrupal2"
      PhoneNumber="6458758786_(2)"
      EmailAdderess="asc@dfkl.ll_(2)"
    />
    <Ex_1_Child
      name="Dhrupal2"
      PhoneNumber="6458758786_(2)"
      EmailAdderess="asc@dfkl.ll_(2)"
    />

    <Ex_1_Child
      v-for="(friend, index) in friendsArr"
      :key="index"
      :name="friend.name"
      :PhoneNumber="friend.PhoneNumber"
      :EmailAdderess="friend.EmailAdderess"
    />

    <Ex_1_Child2 school="mySchool" clg="myClg" city="myCity" />

    <Ex_1_Child2
      v-for="(data, i) in eductionArr"
      :key="i"
      :school="data.school"
      :clg="data.clg"
      :city="data.city"
    />

    <Ex_1_Child_PropMutation
      num="12"
      fristName="Abc_first"
      MiddleName="abc_middle"
      LastName="abc_Last"
    />

    <Ex_1_Child_PropMutationWithdata course="Cse" subject="DS" gread="A" />
    <Ex_1_Child_PropMutationWithdata course="IT" subject="DBMS" gread="B" />

    <PropValidation user_name="u1" UserSchool="usrSch" />
    <PropValidation user_name="u2" UserSchool="usrSch2" UserLocation="UK" />
  </div>
</template>

<script>
import Ex_1_Child from "./Ex_1_Child.vue";
import Ex_1_Child2 from "./Ex_1_Child2.vue";
import Ex_1_Child_PropMutation from "./Ex_1_Child_PropMutation.vue";
import Ex_1_Child_PropMutationWithdata from "./Ex_1_Child_PropMutationWithdata().vue";
import PropValidation from "./PropValidation.vue";
export default {
  components: {
    Ex_1_Child,
    Ex_1_Child2,
    Ex_1_Child_PropMutation,
    Ex_1_Child_PropMutationWithdata,
    PropValidation,
  },

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
    };
  },
};
</script>