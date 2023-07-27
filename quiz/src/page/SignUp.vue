<template>
  <div class="signup-container">
    <section class="signup" id="signup">
      <div class="form">
        <form @submit.prevent="submit">
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
      </div>
      <router-link to="/login" class="login-link">Login</router-link>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userinfo: {
        username: "",
        usermail: "",
        userpsw: "",
      },
    };
  },
  methods: {
    submit() {
      let user_records = JSON.parse(localStorage.getItem("users")) || [];
      let duplicate = user_records.find(
        (user) => user.usermail == this.userinfo.usermail
      );

      if (duplicate) {
        alert("User with this email already exists");
        this.$router.replace("/login");
      } else {
        this.$store.dispatch("add_user", this.userinfo);
        this.$store.dispatch("signup");
        this.$router.replace("/login");
      }
    },
  },
};
</script>

<style scoped>
.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.signup {
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
}

.form {
  margin-bottom: 20px;
}

.form-field {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
}

.text-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.signup-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
}

.signup-button:hover {
  background-color: #0056b3;
}

.login-link {
  display: block;
  text-align: center;
  color: #007bff;
  text-decoration: none;
  margin-top: 20px;
}

.login-link:hover {
  text-decoration: underline;
}
</style>
