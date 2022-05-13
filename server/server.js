const WebSocket = require('ws')
const PORT = 5000

const ws = new WebSocket.Server({
    port: PORT
})

ws.on('connection', (socket, request, user) => {
    // Notice that a client has connected to the server
    console.log("a client just connected")

    socket.on('message',(msg) => {
        // Broadcast message to all connected clients
        ws.clients.forEach((client) => {
            client.send(`${user} said ${msg}`)
        })
    })
})

console.log("Server is running at Port" + PORT)