// const socket = io.connect("http://localhost:3001");
const socket = io();

function handleplaysound(){
    console.log("clicked hps");
    // io.sockets.emit('play',{ name : "playing test sound"});
    // io.sockets.emit('broadcast',{ description: ' clients connected!'});
    socket.emit('clientEvent', 'Sent an event from the client!');

};
socket.on('playonall',msg =>{
    console.log("hlo garv, wait for 2 sec");
    console.log(msg);

    var x = document.getElementById("myAudio");

    setTimeout(()=>{
        x.currentTime=0;
        x.play();
    },2000);
})
// socket.on('playonclient',msg =>{
//     console.log('client changed');
// });

// socket.on('broadcast',function(data) {
//     // document.body.innerHTML = '';
//     // document.write(data.description);
//     console.log("hlo");
//  });