<template>
  <div>
    <div>
      <div>
        <label>Username:</label>
        <input type="text" v-model="form.username" />
        <br />
        <br />
        <label>Password:</label>
        <input type="password" v-model="form.password" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["form"],
};
</script>