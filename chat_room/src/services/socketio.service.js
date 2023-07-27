// socketio.service.js
import { io } from 'socket.io-client';

class SocketioService {
    socket;
    constructor() { }

    setupSocketConnection() {
        this.socket = io(process.env.VUE_APP_SOCKET_ENDPOINT);
        this.socket.on('connect', () => {
            console.log('Connected to Socket.io');
        });
    }

    disconnect() {
        if (this.socket) {
            this.socket.disconnect();
        }
    }

    joinRoom(roomName, username) {
        this.socket.emit('join_room', roomName);
        this.socket.emit('my message', `${username} joined the chat.`);
    }

    leaveRoom(roomName, username) {
        this.socket.emit('leave_room', roomName);
        this.socket.emit('my message', `${username} left the chat.`);
    }

    sendMessage(data) {
        this.socket.emit('message', data);
    }

    listenForMessages(callback) {
        this.socket.on('message', (data) => {
            callback(data);
        });
    }
}

export default new SocketioService();
