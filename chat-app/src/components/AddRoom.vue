<template>
  <div>
    <div>
      <a href="" @click="$router.go(-1)">Room List</a>
       <router-link to="/room/:nickname">(Room Listm)</router-link>
      <form @submit="onSubmit">
        <input
          id="roomname"
          v-model.trim="room.roomName"
          placeholder="Enter Room Name"
        />
        <button type="submit" variant="primary" :disabled="!room.roomName">
          Save
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from '@/Firebase';
import { getDatabase, ref, push, set } from 'firebase/database';

export default {
  data() {
    return {
      ref: ref(getDatabase(), 'chatrooms'),
      room: { roomName: '' },
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();

      const newRoomRef = push(this.ref);
      set(newRoomRef, {
        roomName: this.room.roomName,
      })
        .then(() => {
          this.$router.go(-1);
        })
        .catch((error) => {
          alert('Error adding document: ', error);
        });
    },
  },
};

</script>

<style>
</style>