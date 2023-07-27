<template>
  <nav class="navbar">
    <router-link to="/home" class="nav-link">Home</router-link>
    <div v-if="isAdmin" class="admin-link">
      <router-link to="/user" class="nav-link">User</router-link>
    </div>
    <button @click="logout" class="logout-button">Log out</button>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isAdmin: false,
    };
  },

  methods: {
    logout() {
      localStorage.removeItem("duplicate");
      this.$router.replace("/login");
    },
  },

  created() {
    let typeOfUser = localStorage.getItem("admin");
    this.isAdmin = typeOfUser === "true";
  },
};
</script>

<style scoped>
.navbar {
  background-color: #f5f5f5;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-link {
  margin-right: 10px;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #555;
}

.admin-link {
  margin-left: 10px;
}

.logout-button {
  background-color: #f44336;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.logout-button:hover {
  background-color: #d32f2f;
}

@media screen and (max-width: 600px) {
  .navbar {
    flex-wrap: wrap;
  }
  
  .admin-link {
    margin-left: 0;
    margin-top: 10px;
  }
  
  .logout-button {
    padding: 8px 16px;
  }
}
</style>
