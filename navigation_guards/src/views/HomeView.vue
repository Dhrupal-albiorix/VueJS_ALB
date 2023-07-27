<!-- HomeView.vue -->
<template>
  <div class="home">
    <p>Home</p>
    <p>{{ value }}</p>
    <button @click="change">change</button>
    <br />
    <br />
    <router-link to="/prop">next</router-link>
    <br />
    <br />
    <p v-for="user in users" :key="user.id">
      <router-link
        :to="{
          name: 'prop',
          params: { id: user.id },
        }"
      >
        ({{ user.id }}) {{ user.name }}
      </router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "HomeView",

  beforeRouteUpdate(to, from, next) {
    console.log(
      "%cThis is beforeRoute Update",
      "background: red; color: #ffffff"
    );
    next();
  },

  // beforeRouteUpdate not working : that's expected: beforeRouteUpdate is called when one of the params change.
  // If the route changes you have to use beforeRouteEnter
  // Extra note: beforeRouteUpdate is called when the route changes but a currently displayed route record still matches the url.
  // eg: one of the params change, a parent route being reused because only the child changes.If the route changes,
  // no matter if the component is being reused by Vue, if it's a different route record, you have to use beforeRouteEnter

  beforeRouteLeave(to, from, next) {
    console.log(
      "%cThis is beforeRoute leave",
      "background: red; color: #ffffff"
    );
    next();
  },

  data() {
    return {
      value: 0,
      users: [
        { id: 1, name: "John" },
        { id: 2, name: "Jane" },
        { id: 3, name: "Jack" },
        { id: 4, name: "Jill" },
      ],
    };
  },
  methods: {
    change() {
      this.value = this.value + Math.floor(Math.random() * 100);
      if (this.value > 122) {
        console.log(this.value);
        //must catch err..bcz in case of component nevigation gard beforenter if
        //that huard is redirecting again then hear  this.$router.push("/bfor") will not
        //be fullfield . so it will create err that this task is already not complate and redirection err will occure
        this.$router.push("/bfor").catch((err) => {
          console.log(err);
        });
      }
    },
  },
};
</script>
