const server = require('net').createServer();

let counter = 0;
const sockets = new Map();

function timestamp() {
    const d = new Date();
    return `${d.getHours()}:${d.getMinutes()}`;
}

server.on('connection', socket => {
    socket.id = ++counter;

    console.log('Client connected');
    socket.write(`Please input your name, client ${socket.id}\n`);

    socket.on('data', (data) => {
        if (!sockets.has(socket.id)) {
            socket.name = data.toString().trim();
            sockets.set(socket.id, socket);
            socket.write(`Hello ${socket.name}!\n`);
            return;
        }
        sockets.forEach((value, key) => {
            if (socket.id !== key) {
                value.write(`${socket.name} ${timestamp()}: ${data}`);
            }
        })
    })

    socket.on('end', () => {
        console.log('Client Disconnected');
        sockets.delete(socket.id);
    })

})


server.listen(3000, () => {
    console.log('Server started');
})