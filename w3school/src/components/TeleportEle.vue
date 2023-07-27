<template>
  <div>
    <div>
      <h1>Teleport</h1>
    </div>

    <button @click="toggleModal">Open Modal</button>

    <teleport to="body">
      <div v-if="showModal" class="modal">
        <h2>Modal Content</h2>
        <p>This content will be teleported to the body element.</p>
        <button @click="closeModal">Close Modal</button>
      </div>
    </teleport>

    <div class="other-content">
      <h3>Other Content</h3>
      <p>This content will stay in its original location.</p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "App",
  setup() {
    const showModal = ref(false);

    const toggleModal = () => {
      showModal.value = !showModal.value;
    };

    const closeModal = () => {
      showModal.value = false;
    };

    return {
      showModal,
      toggleModal,
      closeModal,
    };
  },
};
</script>

<style>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 2rem;
}
</style>
