<template>
  <div>
    <div>
      <h1>Props validation</h1>
    </div>

    <div>
      <p>{{ user_name }}</p>
      <p>{{ UserSchool }}</p>
      <p>{{ UserLocation }}</p>
      <p>GoodGread :{{ GoodGread }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user_name: String,

    UserSchool: {
      type: String,
      required: true,
    },

    UserLocation: {
      type: String,
      required: false,
      default: "India",
    },

    GoodGread: {
      type: Boolean,
      required: false,
      default: true,
      validationFun: function (value) {
        return value === 1 || value === 0;
      },
    },
  },
};
</script>