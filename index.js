const Server = require("./models/server");
require('dotenv').config();
const server = new Server();

server.execute();


// //Servidor de Express
// const express = require('express')
// const app = express();
// //Servidor de sockets
// const server = require('http').createServer(app);


// //Desplegar
// app.use(express.static(__dirname + '/public'))

// //Servidor del socket server
// const io = require('socket.io')(server);
// io.on('connection', (socket) => {
//     socket.emit('mensaje-bienvenida', {
//         msg: 'Bienvenido al server',
//         fecha: new Date()
//     });

//     socket.on('mensaje-respuesta', (data) => {
//         io.emit('mensaje-respuesta', data);
//     });




// });
// server.listen(3000, () => {
//     console.log('Server corriendo en el puerto 3000')
// });