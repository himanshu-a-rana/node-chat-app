const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

let app = express();
let server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('disconnet', () => {
    console.log('User was disconneted');
  });
});

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

// app.listen(port, ()=> {
//   console.log(`Server is up on port ${port}`);
// });

// console.log(__dirname + '/../public');
// console.log(publicPath);

