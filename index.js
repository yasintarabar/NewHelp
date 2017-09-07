/*
Ayan Bhattacharjee
2017
*/

// node modules in use, installed by npm or included
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const crypto = require('crypto');
const GoogleAuth = require('google-auth-library');


// server port
const port = process.env.PORT || 3000


//not sure if i need the stuff right below this or what it really does

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.use(express.static('src'));






io.on('connection', function(socket){
socket.on('newRoomName',(roomname) => {
  socket.broadcast.emit('newRoomName', roomname);
});
});





// http sever up and running confirmation
http.listen(port, function(){
  console.log('listening on *:' + port);
});
