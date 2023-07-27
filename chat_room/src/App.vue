<template>
  <div>
    <div v-if="!joined">
      <input v-model="username" placeholder="Enter your username" />
      <button @click="joinRoom">Join Chat Room</button>
    </div>
    <div v-else>
      <div v-for="msg in messages" :key="msg.id">
        <strong>{{ msg.username }}:</strong> {{ msg.message }}
      </div>
      <input v-model="message" placeholder="Type your message" />
      <button @click="sendMessage">Send</button>
    </div>
  </div>
</template> 

<script>
import SocketioService from "../src/services/socketio.service";

export default {
  setup() {},
  data() {
    return {
      joined: false,
      username: "",
      message: "",
      messages: [],
      roomName: "general" // Set your default room name here
    };
  },
  created() {
    SocketioService.setupSocketConnection();
    SocketioService.listenForMessages((message) => {
      this.messages.push(message);
    });
  },
  beforeUnmount() {
    SocketioService.disconnect();
  },
  methods: {
    joinRoom() {
      if (this.username !== "") {
        SocketioService.joinRoom(this.roomName, this.username);
        this.joined = true;
      }
    },
    sendMessage() {
      if (this.message !== "") {
        SocketioService.sendMessage({
          room: this.roomName,
          username: this.username,
          message: this.message
        });
        this.message = "";
      }
    }
  }
}; 
</script>
