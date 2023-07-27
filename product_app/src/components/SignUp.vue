<template>
  <div>
    <div v-if="routeName === '/sign-up'">sign up</div>
    <form @submit.prevent="submit">
      <div class="form-field">
        <label for="username">Name:</label>
        <input
          type="text"
          class="text-input"
          id="username"
          v-model="userinfo.username"
          @change="handleUsernameChange"
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
          @change="handleUsermailChange"
          required
        />
      </div>
      <div class="form-field">
        <label for="userpsw">Password:</label>
        <input
          type="password"
          class="text-input"
          v-model="userinfo.userpsw"
          @change="handleUserpswChange"
          required
        />
      </div>
      <button
        type="submit"
        v-if="routeName === '/sign-up'"
        class="signup-button"
      >
        Sign Up
      </button>
    </form>
    <router-link v-if="routeName === '/sign-up'" to="/Login">Login</router-link>
  </div>
</template>

<script>
import { reactive, ref, watch } from "vue";
import { useRoute } from "vue-router";
import router from "../router/index.js";

export default {
  props: {
    userData: Object,
  },
  setup(props, context) {
    const userinfo = reactive({
      username: props.username,
      usermail: props.useremail,
      userpsw: props.userpsw,
    });

    if (props) {
      watch(props, (newValue) => {
        userinfo.username = newValue.userData.username;
        userinfo.usermail = newValue.userData.usermail;
        userinfo.userpsw = newValue.userData.userpsw;
      });
    }

    const routeName = ref("");
    const route = useRoute();
    //route.params will only have data if you nav igate to a route with dynamic segments.
    routeName.value = route.fullPath;

    const submit = async () => {
      try {
        console.log("inside signup setup", "b4");
        const response = await fetch(
          "https://vuefirebase-c332f-default-rtdb.firebaseio.com/person.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userinfo), // Convert the userinfo object to JSON
          }
        );

        if (response.ok) {
          console.log("User information stored successfully!");
          userinfo.value = {};
          router.push("Login");
        } else {
          console.error("Failed to store user information.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    function handleUsernameChange() {
      context.emit("UsernameChange", this.userinfo.username);
    }
    function handleUsermailChange() {
      context.emit("UsermailChange", this.userinfo.usermail);
    }
    function handleUserpswChange() {
      context.emit("UserpswChange", this.userinfo.userpsw);
    }

    return {
      routeName,
      userinfo,
      submit, // Add the submit method to the returned object
      handleUsernameChange,
      handleUsermailChange,
      handleUserpswChange,
    };
  },
};
</script>