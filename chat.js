const express=require('express');
const app=express();
const socketio=require('socket.io');

app.use(express.static(__dirname+'/public'))

const expressServer=app.listen(9000);
const io=socketio(9000);


io.on('connection',(socket)=>{
    socket.emit('messageFromSender');
    socket.on('messageToServer',(dataFromClient)=>{
        console.log(dataFromClient);
    })
})



