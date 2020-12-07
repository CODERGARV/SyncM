//making new
const { v4: uuidv4 } = require('uuid');
var bodyParser = require('body-parser');
const express = require('express');
const { connected } = require('process');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/',(req,res) => {
	res.render('first');
})

app.post('/createRoom', function(req, res){
  console.log(req.body);
  console.log("hlo crete room");
  const username=req.body.username;
  res.redirect(`/${uuidv4()}`);
});

app.post('/joinRoom', function(req, res){
  console.log(req.body);
  console.log("hlo join room");
  const username=req.body.username;
  const roomid=req.body.roomid;
  res.redirect(`/${roomid}`);
});

app.get('/:roomid',(req,res) => {
  console.log("hi g g");
	res.render('room',{ roomid: req.params.roomid});
})

io.on("connection",(socket) => {
  console.log("connected with io");
  // socket.on('joinRoom',({username,roomid})=>{
  //   socket.join(roomid);
  //   console.log(`${username} has joined`);
  // })
  socket.on('clientEvent', function(data) {
    console.log(data);
    console.log("inside play button")
    io.sockets.emit('playonall',{msg:"playing on all client"});
  });

  socket.on('clientEventPause', function(data) {
    console.log(data);
    io.sockets.emit('pauseonall',{msg:"pausing on all client"});
  });

})

server.listen(3001);