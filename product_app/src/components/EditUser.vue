<!-- UserEdit.vue -->
<template>
  <div>
    <p>edit</p>
    <sign-up
      :userData="user"
      @UsernameChange="(username) => (user.username = username)"
      @UsermailChange="(usermail) => (user.usermail = usermail)"
      @UserpswChange="(userpsw) => (user.userpsw = userpsw)"
    />
    <button @click="updateUser">Update</button>
  </div>
</template>

<script>
import { reactive } from "vue";
import {
  fetchFirebaseData,
  updateFirebaseData,
} from "../resuable/firebaseUtils.js"; // Import the updateFirebaseData function
import SignUp from "./SignUp.vue";
import router from "../router/index.js";

export default {
  components: { SignUp },
  setup() {
    const user = reactive({
      id: "",
      username: "", // Set default empty value
      usermail: "",
      userpsw: "",
    });

    const fetchData = async () => {
      try {
        let all_users = await fetchFirebaseData();
        const userData = all_users[localStorage.getItem("edit_user_index")];
        user.id = all_users[localStorage.getItem("edit_user_index")].id;
        user.username = userData.username;
        user.usermail = userData.usermail;
        user.userpsw = userData.userpsw;
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();

    async function updateUser() {
      await updateFirebaseData(user.id, user);
      router.push("UsersData");
    }

    return {
      user,
      updateUser,
    };
  },
};
</script>
