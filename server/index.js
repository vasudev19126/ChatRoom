const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server, {
    cors: {
      origin : "*"
    }
});

io.on('connection', (socket) =>{
    console.log("a user connected");
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on("message", function(payload){
        io.emit("message", payload);
    });
});

server.listen(3001, () => {
    console.log('listening on *:3001');
});



