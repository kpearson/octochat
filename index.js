const express = require('express');
const app = express();
const http = require('http').Server(app);  // connect http server to express

app.use(express.static('public'));

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

http.listen(process.env.PORT || 3000, function(){
  console.log('Your server is up and running on Port 3000. Good job!');
});

