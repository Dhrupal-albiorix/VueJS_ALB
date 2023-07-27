<template>
  <div>
    <div class="form-container">
      <form @submit.prevent="handleSubmit">
        <input-component />
        <button-component />
      </form>
    </div>

    <user-data>
      <template v-slot:usarData>
        <div v-for="(person, i) in userArr" :key="i" class="user-item">
          <p>{{ i }} : {{ person.username }}</p>
          <button @click="edit(i)">Edit</button>
          <button @click="update(i)">Update</button>
        </div>
      </template>
    </user-data>
  </div>
</template>

<script>
import ButtonComponent from "./ButtonComponent.vue";
import InputComponent from "./InputComponent.vue";
import UserData from "./UserData.vue";
export default {
  components: { InputComponent, ButtonComponent, UserData },

  data() {
    return {
      form: {
        username: "",
        password: "",
      },

      userArr: [],
    };
  },
  provide() {
    return {
      form: this.form,
    };
  },
  methods: {
    handleSubmit() {
      // Handle form submission
      console.log("Form submitted!", this.form);
      this.userArr.push({ ...this.form });
      console.log(this.userArr);
    },

    edit(i) {
      console.log(i);
      console.log(this.userArr[i]);
      this.form.username = this.userArr[i].username;
    },

    update(i) {
      this.userArr[i].username = this.form.username;
    },
  },
};
</script>

<style scoped>
/* Styles specific to this component */
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
}

.user-item {
  background-color: #f0f0f0;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  display: block;
}

p {
  color: #333;
  font-size: 1rem;
  margin: 0;
}
</style>