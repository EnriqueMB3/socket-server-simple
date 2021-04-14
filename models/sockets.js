class Sockets {

    constructor(io) {
        this.io = io;
        this.socketEvents();
    }

    socketEvents() {
        //onConnection
        this.io.on('connection', (socket) => {

            //EscucharEvemto
            socket.on('mensaje-respuesta', (data) => {
                console.log(data);
                this.io.emit('mensaje-respuesta', data);
            });

        });
    }


}

module.exports = Sockets;