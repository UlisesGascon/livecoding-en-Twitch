var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('channel8', function(timestamp){
    const currentTimestamp = new Date().getTime();  
    io.emit('channel8', {
        org: timestamp,
        current: currentTimestamp,
        diff: `${currentTimestamp -  timestamp}ms`
    });
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});