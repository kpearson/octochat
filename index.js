const express = require('express');
const app = express();
const http = require('http').Server(app);  // connect http server to express
const io = require('socket.io')(http);

const path = require('path');

const redis = require('redis');
const listeningClient = redis.createClient();

io.on('connection', function (socket) {
  console.log('Someone has connected');
});

listeningClient.subscribe('channel');
listeningClient.on('message', function (channel, message) {
  var message = JSON.parse(message)
  console.log(message.body)
  io.send('message', {
    msg: message.body
  });
  // console.log(channel, message, 'node');
});


http.listen(process.env.PORT || 3000, function(){
  console.log('Your server is up and running on Port 3000. Good job!');
});

