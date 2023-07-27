<template>
  <div>
    <div>
      <div>
        <div class="card-group">
          <div class="card" v-for="(users, index) in _allusers" :key="index">
            <div class="card-body">
              <h5 class="card-title">Name : {{ users.username }}</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                Mail : {{ users.usermail }}
              </h6>

              <p class="card-text">Psw : {{ users.userpsw }}</p>
              <button
                class="btn btn-outline-warning btn-sm"
                @click="edit(index)"
              >
                Edit
              </button>
              <button
                class="btn btn-outline-danger btn-sm"
                @click="remove(index)"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import {
  fetchFirebaseData,
  deleteFirebaseData,
} from "../resuable/firebaseUtils.js";
import router from "../router/index.js";
export default {
  setup() {
    const _allusers = ref([]);
    const fetchData = async () => {
      try {
        _allusers.value = await fetchFirebaseData();
      } catch (error) {
        console.error("Error:", error);
      }
    };

    // Call the fetchData function in the created hook
    fetchData();

    function edit(index) {
      localStorage.setItem("edit_user_index", index);
      router.push("/EditUser");
    }

    async function remove(index) {
      let all_users = await fetchFirebaseData();
      const userData = all_users[index];
      await deleteFirebaseData(all_users[index].id, userData);
      _allusers.value.splice(index, 1);
    }

    return {
      _allusers,
      edit,
      remove,
    };
  },
};
</script>

<style>
</style>
