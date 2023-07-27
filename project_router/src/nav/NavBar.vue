<template>
  <div class="navabar">
    <nav>
      <router-link to="/" class="router-link">Home</router-link> |
      <router-link to="/about" class="router-link">About</router-link>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
nav {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: black;
  opacity: 1000;
  padding: 2%;
}

nav .router-link {
  color: rgb(230, 0, 0);
}
nav .router-link:hover {
  color: rgb(180, 230, 0);
}
nav .router-link:active {
  color: rgb(104, 0, 230);
}
</style>