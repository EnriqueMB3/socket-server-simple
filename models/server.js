const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const Sockets = require('./sockets');

class Server {
    constructor() {
        console.log('Configurando servidor...');
        this.app = express();
        this.port = process.env.PORT || 4500;
        //httpServer

        this.server = http.createServer(this.app);
        //Configuraciones Sockets

        this.io = socketio(this.server, /* Configuraciones */ );
    }


    middlewares() {
        this.app.use(express.static(path.resolve(__dirname, '../public')));

    }


    configurarSockets() {
        new Sockets(this.io)
    }

    execute() {

        //Inicializar Middlewares
        console.log('Inicializando Middlewares...');
        this.middlewares();

        console.log('Inicializando Sockets...');
        this.configurarSockets();



        console.log('Arrancando Servidor...');
        //Inicializar Server
        this.server.listen(this.port, () => {
            console.log('Running Server on port:', this.port);
        })
    }

}

module.exports = Server;