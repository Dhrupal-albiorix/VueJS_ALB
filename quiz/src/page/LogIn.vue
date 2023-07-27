<template>
  <div class="login-container">
    <div class="form-container">
      <h2 class="form-title">Log In</h2>
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
      <div class="form-field">
        <label for="password">Password:</label>
        <input type="password" class="text-input" v-model="userinfo.psw" />
      </div>
      <button class="login-button" @click="login">Log In</button>
      <div class="signup-link">
        <router-link to="/signup" class="signup-link-text">Sign Up</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userinfo: {
        email: "",
        psw: "",
      },
      isAdmin: false,
    };
  },

  methods: {
    login() {
      let user_records = JSON.parse(localStorage.getItem("users")) || [];
      let duplicate = user_records.find((user) => {
        return (
          user.usermail == this.userinfo.email &&
          user.userpsw == this.userinfo.psw
        );
      });

      if (duplicate) {
        if (
          duplicate.usermail === "admin@admin.com" &&
          duplicate.userpsw === "admin"
        ) {
          this.isAdmin = true;
        } else {
          this.isAdmin = false;
        }
        localStorage.setItem("admin", this.isAdmin);
        localStorage.setItem("duplicate", JSON.stringify(duplicate));

        this.$router.replace("/");
      } else {
        this.$router.replace("/signup");
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form-container {
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
}

.form-title {
  text-align: center;
  font-size: 24px;
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

.login-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
}

.login-button:hover {
  background-color: #0056b3;
}

.signup-link {
  text-align: center;
  margin-top: 20px;
}

.signup-link-text {
  color: #007bff;
  text-decoration: none;
}

.signup-link-text:hover {
  text-decoration: underline;
}
</style>
