const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const router = require('./router');
const {addUser, removeUser, getUser, getUsersInRoom} = require('./utils/socketUsers');
const cors = require('cors');

const Port = process.env.Port || 5000;
const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(router);

const io = socketio(server);

io.on('connection', (socket) => {
    console.log('User Connected');

    socket.on('join', ({name, room}, callback) => {
        const {error, user} = addUser({id: socket.id, name, room});

        if(error) return callback(error);

        socket.broadcast.to(user.room).emit('message', {user: 'Bot', text: `${user.name} has joined..!!`});

        socket.join(user.room);
        callback();
    });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);

        // console.log(user, message);
        io.to(user.room).emit('message', {user: user.name, text: message});

        callback();
    });

    socket.on('disconnect', () => {
        console.log('User Disconnected');
    });
});

server.listen(Port, () => {
    console.log('Server is running on Port: '+Port);
});