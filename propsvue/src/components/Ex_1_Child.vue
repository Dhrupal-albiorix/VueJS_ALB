<template>
  <div>
    <div><h1>First Child component</h1></div>

    <!-- <p>{{ friend.Email_id }}</p>
    <p>{{ friend.F_name }}</p>
    <p>{{ friend.Phone_Number }}</p> -->

    <p>{{ name }}</p>
    <p>{{ PhoneNumber }}</p>
    <p>{{ EmailAdderess }}</p>
  </div>
</template>

<script>
export default {
  //names with whcih elements are declered in props must not be used anywhare else in whole component
  //bcz same name inside data and prop will be used to mutate data
  props: ["name", "PhoneNumber", "EmailAdderess"],

  data() {
    return {
      friend: {
        id: "idOneF1",
        F_name: "friend_1",
        Phone_Number: "02674-665-45",
        Email_id: "f1@k.k",
      },
    };
  },
};
</script>