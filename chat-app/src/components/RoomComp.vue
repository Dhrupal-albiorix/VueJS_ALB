<template>
  <div>
    <h2>
      Room List
      <router-link to="/add-room">(Add Room)</router-link>
    </h2>
    <div>
      <div
        v-for="room in rooms"
        :key="room.key"
        :to="{
          name: 'Chat',
          params: {
            nickname: nickname,
            roomid: room.key,
            roomname: room.roomName,
          },
        }"
        action
      >
        {{ room.roomName }}
      </div>
    </div>
  </div>
</template>

<script>
import { getDatabase, ref, onValue } from "firebase/database";
import { db } from "@/Firebase";


export default {
  data() {
    return {
      rooms: [],
      nickname: this.$route.params.nickname,
    };
  },

  created() {
    const chatroomsRef = ref(getDatabase(db), "chatrooms");
    onValue(chatroomsRef, (snapshot) => {
      this.rooms = [];
      snapshot.forEach((doc) => {
        let item = doc.val();
        item.key = doc.key;
        this.rooms.push(item);
      });
    });
  },
};
</script>

<style>
</style>
