  <template>
  <div>
    <section class="login" id="login">
      <div class="form">
        <form @submit.prevent="submit()">
          <input
            type="text"
            placeholder="Username"
            class="text"
            id="username"
            v-model="credentials.name"
            required
          /><br />
          <input
            type="password"
            placeholder="••••••••••••••"
            class="password"
            v-model="credentials.psw"
          /><br />

          <button type="submit">log in</button>
        </form>
      </div>
    </section>
  </div>
</template>

  <script>
export default {
  data() {
    return {
      credentials: {
        name: "",
        psw: "",
      },

      isadmin: false,
      isuser: true,
      adminValue: true,
    };
  },

  methods: {
    submit() {
      const isAdmin =
        this.credentials.name === "admin" && this.credentials.psw === "admin";
      if (isAdmin) {
        this.isadmin = true;
        this.isuser = false;
        localStorage.setItem("admin", this.isadmin);
        localStorage.setItem("adminvalue", this.adminValue);
        // this.$router.push("/homepage"); //this will not replcae route..so user will be able to
        //go to login page even after succsful login..so bad idea to use
        this.$router.replace("/homepage");
      } else {
        localStorage.setItem("user", this.isuser);
        this.$router.replace("/homepage");
        localStorage.removeItem("admin");
        localStorage.removeItem("adminvalue");
      }
    },
  },
};
</script>

  <style scoped>
body {
  background: #010101;
  font-family: Assistant, sans-serif;
  display: flex;

  /* min-height: 90vh; */
}
.login {
  width: 50%;
  color: white;
  background: #000000;
  background: linear-gradient(to right, #000000, #484949);
  margin: auto;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.3),
    0px 30px 60px 1px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  padding: 50px;
}
.login .head {
  display: flex;
  align-items: center;
  justify-content: center;
}
.login .head .company {
  font-size: 2.2em;
}
.login .msg {
  text-align: center;
}
.login .form input[type="text"].text {
  border: none;
  background: none;
  box-shadow: 0px 2px 0px 0px white;
  width: 100%;
  color: white;
  font-size: 1em;
  outline: none;
}
.login .form .text::placeholder {
  color: #d3d3d3;
}
.login .form input[type="password"].password {
  border: none;
  background: none;
  box-shadow: 0px 2px 0px 0px white;
  width: 100%;
  color: white;
  font-size: 1em;
  outline: none;
  margin-bottom: 20px;
  margin-top: 20px;
}
.login .form .password::placeholder {
  color: #d3d3d3;
}
</style>