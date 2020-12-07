console.log("hlo therer")
const socket = io();
function handleplaysound(){
    console.log("clicked playsound");
    socket.emit('clientEvent', 'Sent an event from the client by play button!');

};

function handlepausesound(){
    console.log("clicked pausesound");
    socket.emit('clientEventPause', 'Sent an event from the client by pause button!');

};

socket.on('playonall',msg =>{
    console.log("hlo garv, wait for 2 sec");
    console.log(msg);

    var x = document.getElementById("myAudio");
    x.currentTime=0;
    x.play();
});
socket.on('pauseonall',msg =>{
    console.log("hlo garv, your song is going to paused, wait for 2 sec");
    console.log(msg);

    var x = document.getElementById("myAudio");
    x.currentTime=0;
    x.pause();
})