const express = require('express');
const http = require('http');
const path = require('path');
const socketio = require('socket.io');

const app = express();
const server = http.Server(app);
const io = socketio(server);

function beamit(socket, back, message){
  socket.emit(back, message);
  socket.broadcast.emit(back, message);
}

app.get('/', (req, res) => {
  res.sendFile(path.resolve('index.html'));
});

app.use(express.static("static"));

const port = process.env.PORT || 6666;

io.on('connection', (socket)=>{
  beamit(socket, 'connection', 'true');
  socket.on('draw', (data)=>{
    beamit(socket, 'returnDraw', data);
  });
});
server.listen(port, () => {
  console.log("server up on port " + port);
});
