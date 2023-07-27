<template>
  <div>
    <nav-bar />

    <div>
      <div class="container">
        <table>
          <tr>
            <th>USer Name</th>
            <th>User Email</th>
            <th>Visite full profile</th>
          </tr>
          <tr v-for="(user, index) in users" :key="index">
            <td>{{ user.username }}</td>
            <td>{{ user.usermail }}</td>
            <td>
              <button @click="go_to_user(index)">
                <i class="fa fa-user" aria-hidden="true"></i>
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
import NavBar from "../page/Navbar/NavBar.vue";
export default {
  beforeRouteEnter(to, from, next) {
    let a = localStorage.getItem("admin");
    const isAuthenticated = localStorage.getItem("duplicate");
    console.log(a);
    if (a != "true" || !isAuthenticated) {
      next("/login");
    } else {
      next();
    }
  },

  components: { NavBar },

  data() {
    return {
      users: JSON.parse(localStorage.getItem("users")) || [],
      quizes: JSON.parse(localStorage.getItem("quizzes")) || [],
    };
  },

  methods: {
    go_to_user(index) {
      localStorage.setItem("visit_user", index);
      this.$router.push({
        name: "/full-profile",
      });
    },
  },
};
</script>

<style scoped>
.container {
  margin: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #f5f5f5;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.fa-user {
  margin-right: 5px;
}
</style>

