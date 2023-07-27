<template>
  <div>
    <div class="stuComp">
      <p>Name : {{ s.stName }}</p>
      <p>N0 : {{ s.rollNo }}</p>
    </div>

    <template v-if="!editMode">
      <button @click="toggleEditMode">Edit</button>
    </template>
    <template v-else>
      <input type="text" v-model="editedStudentName" />
      <button @click="saveEdit">Save</button>
      <button @click="cancelEdit">Cancel</button>
    </template>
  </div>
</template>

<script>
export default {
  inject: ["editProduct"],

  props: {
    s: Object,
  },
  data() {
    return {
      editMode: false,
      editedStudentName: this.s.stName, // Corrected property name
    };
  },

  methods: {
    toggleEditMode() {
      this.editMode = !this.editMode;
    },

    saveEdit() {
      // Call the editProduct method provided by the parent component
      this.editProduct(this.editedStudentName, this.s.rollNo);
      this.toggleEditMode();
    },

    cancelEdit() {
      this.editedStudentName = this.s.stName; // Corrected property name
      this.toggleEditMode();
    },
  },
};
</script>

<style scoped>
/* Styles */
</style>
