var socket = io();

socket.on('message', function (message) {
  $('.messages').append(message.msg + "</br>");
});

$('#send-message').click(function() {
  socket.send('message', {
    msg: "message received"
  });
});
