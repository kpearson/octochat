var socket = io();

socket.on('message', function (message) {
    $('.messages').append(message.msg + "</br>");
});

$('#send-message').click(function() {
    var $userText = $("#user-message").val();
    socket.send('message', {
        msg: $userText
    });
});

$(document).ready(function() {
    $(".dropdown-button").dropdown();
});
