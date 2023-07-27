<template>
  <div>
    <div v-if="!editMode">
      <button @click="toggleEditMode">Edit</button>
    </div>
    <div v-else>
      <input type="text" v-model="editedStudentName" />
      <button @click="saveEdit">Save</button>
      <button @click="cancelEdit">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stname", "stRoll"],

  inject: ["editProduct"],

  data() {
    return {
      editMode: false,
      editedStudentName: this.stname, // Corrected property name
    };
  },

  methods: {
    toggleEditMode() {
      this.editMode = !this.editMode;
    },

    saveEdit() {
      this.editProduct(this.editedStudentName, this.stRoll);
      this.toggleEditMode();
    },

    cancelEdit() {
      this.editedStudentName = this.stname; // Corrected property name
      this.toggleEditMode();
    },
  },
};
</script>

<style>
</style>