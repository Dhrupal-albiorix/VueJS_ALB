<template>
  <div>
    <header-component>
      <template v-slot="HeaderComponent">
        <nav class="navbar">
          <ul class="nav-list">
            <li class="nav-item">{{ HeaderComponent.headerText }}</li>
            <li class="nav-item">Home</li>
            <li class="nav-item">About</li>
            <li class="nav-item">Services</li>
            <li class="nav-item">Contact</li>
          </ul>
        </nav>
      </template>
    </header-component>

    <div>
      <general-component />
    </div>

    <footer-component>
      <template v-slot="FooterComponent">
        <div class="footer">
          <p>{{ FooterComponent.FooterText }}</p>
          <div class="demo-content">
            <h3>Demo Footer Content</h3>
            <p>
              This is just a demo footer content. You can replace it with your
              own content.
            </p>
          </div>
        </div>
      </template>
    </footer-component>
  </div>
</template>

<script>
import GeneralComponent from "./GeneralComponent.vue";
import FooterComponent from "./FooterComponent.vue";
import HeaderComponent from "./HeaderComponent.vue";
export default {
  components: { HeaderComponent, FooterComponent, GeneralComponent },
};
</script>

<style scoped>
.header {
  background-color: #f0f0f0;
  padding: 1rem;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 0.5rem 1rem;
}

.nav-list {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.nav-item {
  color: #fff;
  margin-right: 1rem;
  cursor: pointer;
}

.footer {
  background-color: #f0f0f0;
  padding: 1rem;
}

.footer {
  background-color: #f0f0f0;
  padding: 1rem;
  text-align: center;
  font-size: 0.8rem;
  color: #333;
}

.demo-content {
  margin-top: 1rem;
}
</style>