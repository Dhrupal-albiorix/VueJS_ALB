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
  props: {
    s: Object,
  },
  data() {
    return {
      editMode: false,
      editedStudentName: this.studentName,
    };
  },

  methods: {
    toggleEditMode() {
      this.editMode = true;
    },
    saveEdit() {
      console.log(this.s.rollNo, this.editedStudentName);
      // this.$emit("edit-event", this.editedStudentName, this.s.rollNo);
      this.$emit("edit-event", this.editedStudentName, this.s.rollNo);
      this.editMode = false;
    },
    cancelEdit() {
      this.editMode = false;
    },
  },
};
</script>
