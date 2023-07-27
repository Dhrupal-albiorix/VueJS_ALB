<template>
  <div>
    <div>
      <nav class="navbar">
        <router-link to="homepage">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/setting">Setting</router-link>
        <template v-if="navbar_admin">
          <router-link to="/admin">admin</router-link>
        </template>
        <template>
          <router-link to="/user">user</router-link>
        </template>
        <button @click="clear">log out</button>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navbar_admin: false,
    };
  },

  created() {
    this.isAdmin();
  },

  methods: {
    isAdmin() {
      let a = localStorage.getItem("admin");
      if (a) {
        this.navbar_admin = true;
      } else {
        this.navbar_admin = false;
      }
    },

    clear() {
      localStorage.clear();
      this.$router.replace("/");
    },
  },
};
</script>

<style>
.navbar {
  position: fixed;
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0);
}
</style>
