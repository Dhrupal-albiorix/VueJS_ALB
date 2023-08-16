<template>
  <div>
    <p>Log in Form</p>
    <div>
      <h2>Login</h2>

      <form @submit="onSubmit">
        <input
          id="nickname"
          placeholder="Enter your nickname"
          v-model.trim="login.nickname"
        />
        <button type="submit" variant="primary" :disabled="!login.nickname">
          Login
        </button>
      </form>
    </div>
  </div>
</template>
   
<script>
export default {
  data() {
    return {
      login: { nickname: "" },
    };
  },

  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.$router.push({
          name: "RoomList",
         params: { nickname: this.login.nickname }
      });
    },
  },
};
</script>

<style>
</style>