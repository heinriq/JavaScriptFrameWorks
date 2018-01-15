const express = require('express')
const app = express()

const http = require('http').Server(app) //Merge de server
const io = require('socket.io')(http)

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home')
});

http.listen(3000, () => {
    console.log('Servidor subiu')
});

io.on('connection', function(socket){
    console.log('Alguem conectou');
    
    socket.on('chat_message', function(mensagemDoUsuario){
        console.log(mensagemDoUsuario)
        io.emit(mensagemDoUsuario);
    })
});