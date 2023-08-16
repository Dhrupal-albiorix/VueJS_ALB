<template>
  <div>
    <div>sign up</div>
    <form @submit.prevent="submitForm">
      <div class="form-field">
        <label for="username">Name:</label>
        <input
          type="text"
          class="text-input"
          id="username"
          v-model="userinfo.username"
          required
        />
      </div>
      <div class="form-field">
        <label for="useremail">Email:</label>
        <input
          type="email"
          class="text-input"
          id="useremail"
          v-model="userinfo.usermail"
          required
        />
      </div>
      <div class="form-field">
        <label for="userpsw">Password:</label>
        <input
          type="password"
          class="text-input"
          v-model="userinfo.userpsw"
          required
        />
      </div>
      <button type="submit" class="signup-button">Sign Up</button>
    </form>
    <router-link to="/ComposableProduct">products</router-link>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { postFirebaseData } from "../resuables/firebase_utiles";

let userinfo = reactive({
  username: "",
  usermail: "",
  userpsw: "",
});

//top level await ....use await without async
// const post = await fetch(
//   `https://scriptsetup-1fb79-default-rtdb.firebaseio.com/users.json`
// ).then((a) => a.json());
// console.log(post);

const submitForm = async () => {
  try {
    await postFirebaseData(
      `https://scriptsetup-1fb79-default-rtdb.firebaseio.com/users.json`,
      userinfo
    );
    console.log("User information added successfully!");
  } catch (error) {
    console.error("Error:", error);
  }
};
</script>
