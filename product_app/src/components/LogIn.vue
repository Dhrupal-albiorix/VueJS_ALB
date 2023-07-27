<template>
  <div>
    <p>login</p>
    <div class="form-field">
      <label for="useremail">Email:</label>
      <input
        type="email"
        class="text-input"
        id="useremail"
        v-model="userinfo.email"
        required
      />
    </div>
    <br />
    <div class="form-field">
      <label for="password">Password:</label>
      <input type="password" class="text-input" v-model="userinfo.psw" />
    </div>
    <button class="login-button" @click="login">Log In</button>
  </div>
</template>

<script>
import { ref } from "vue";
import router from "../router/index.js";
import { fetchFirebaseData } from "../resuable/firebaseUtils.js";
export default {
  setup() {
    const userinfo = ref({});
    const allusers = ref([]);
    function login() {
      const userToFind = allusers.value.find(
        (user) =>
          user.usermail === userinfo.value.email &&
          user.userpsw === userinfo.value.psw
      );

      if (userToFind) {
        console.log("User found:", userToFind);
        router.push("UsersData");
      } else {
        router.push("sign-up");
      }
    }
    const fetchData = async () => {
      try {
        allusers.value = await fetchFirebaseData();
      } catch (error) {
        console.error("Error:", error);
      }
    };

    // Call the fetchData function in the created hook
    fetchData();

    return {
      userinfo,
      login,
      allusers,
    };
  },
};
</script>


<style>
</style>