// const { v4: uuidv4 } = require('uuid');
// const express = require('express');

// const app = express();
// const server = require('http').Server(app);
// const io = require('socket.io')(server);

// app.set('view engine', 'ejs');
// app.use(express.static('public'));

// app.get('/', (req, res) => {
// 	res.redirect(`/${uuidv4()}`);
// })

// app.get('/:room',(req,res) => {
// 	res.render('room',{ roomId: req.params.room })
// })

// io.on("connection", (socket) => {
//   socket.on("join-room", (roomId, userId) => {
//     socket.join(roomId);
//     socket.to(roomId).broadcast.emit("user-connected", userId);

//     socket.on("message", (message) => {
//       io.to(roomId).emit("createMessage", message);
//     });
//   });
// });

// // app.listen(process.env.PORT || 3000, () => {
// // 	console.log('SERVER HAS STARTED');
// // })

// server.listen(3000);

//making new
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/',(req,res) => {
	res.render('room');
})



io.on("connection",(socket) => {
  console.log("connected with io");

  // io.sockets.emit('broadcast',{ description: ' clients connected!'});

  // socket.on('play',playmsg =>{
  //   console.log(playmsg);
  //   // io.sockets.emit('playonclient',{song:"tu chaiye ye"});
  // })
//   socket.on('broadcast',function(data) {
//     // document.body.innerHTML = '';
//     // document.write(data.description);
//     console.log("hlo");
//  });
  socket.on('clientEvent', function(data) {
    console.log(data);
    io.sockets.emit('playonall',{msg:"playing on all client"});
  });
})

server.listen(3001);