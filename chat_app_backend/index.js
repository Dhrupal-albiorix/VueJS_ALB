const app = require('express')();
const http = require('http').createServer(app);

//initialize a new instance of socket.io
//cors options to allow our vue localhost url
const io = require('socket.io')(http, {
    cors: {
        origins: ['http://localhost:8080']
    }
});

app.get('/', (req, res) => {
    res.send('<h1>Hey Socket.io</h1>');
});

//listen on the connection and disconnection events for incoming sockets
//'connection' & disconnect eventa are a built-in events fired
//----------------------------------------------------------------------//
//When a new client connects to the server, the 'connection' event is triggered, and the corresponding 
// event handler is executed.Within this handler, you have access to the 'socket' object, which represents 
// the connection between the server and that specific client.
// Since the 'disconnect' event is specific to each individual socket,
// it makes sense to set up the listener for the 'disconnect' event inside the 'connection' event handler.By doing so,
// you can easily associate the 'disconnect' event with the appropriate 'socket' object,
//and when that particular client disconnects, the 'disconnect' event handler is triggered.
io.on('connection', (socket) => {
    console.log('a user connected');

    // Listen for joining a specific chat room
    socket.on('join_room', (roomName) => {
        socket.join(roomName);
        console.log(`User joined room: ${roomName}`);
    });

    // Listen for leaving a specific chat room
    socket.on('leave_room', (roomName) => {
        socket.leave(roomName);
        console.log(`User left room: ${roomName}`);
    });

    // Handle incoming messages in a room
    socket.on('message', (data) => {
        console.log(`Message received in room ${data.room}: ${data.message}`);
        io.to(data.room).emit('message', {
            username: data.username,
            message: data.message
        });
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

http.listen(3000, () => {
    console.log('http://localhost:3000/');
});
