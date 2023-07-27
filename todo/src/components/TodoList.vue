<template>
  <div>
    <input type="text" v-model="todoItem" />
    <button type="submit" @click="add()">Add</button>
    <todoItem
      v-for="(friend, index) in itemArr"
      :key="index"
      :input="friend"
      @delete-event="deleteEvent(index)"
    />
  </div>
</template>

<script>
import todoItem from "../components/TodoItem.vue";
export default {
  components: {
    todoItem,
  },

  data() {
    return {
      todoItem: "",
      itemArr: [],
    };
  },

  methods: {
    add() {
      this.itemArr.push(this.todoItem);
      console.log(this.itemArr);
    },

    deleteEvent(index) {
      console.log(index);
      this.itemArr.splice(index, 1);
    },
  },
};
</script>