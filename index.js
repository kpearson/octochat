const express = require('express');
const app = express();
const http = require('http').Server(app);  // connect http server to express
const io = require('socket.io')(http);

const path = require('path');

const redis = require('redis');
const client = redis.createClient();
const publishingClient = redis.createClient();

app.use(express.static('public'));

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

io.on('connection', function (socket) {
  console.log('Someone has connected');

  socket.on('message', function (channel, message) {
    console.log(channel, message)
    io.sockets.emit('message', {
      msg:  message.msg
    });
    publishingClient.publish('community', JSON.stringify(message));
  });
});

http.listen(process.env.PORT || 3000, function(){
  console.log('Your server is up and running on Port 3000. Good job!');
});

