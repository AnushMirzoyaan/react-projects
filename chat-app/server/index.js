const express = require('express')
const socket = require('socket.io')
const app = express()
const cors = require('cors')

//fixing cors error
app.use(cors({
    origin: '*'
}))


const server = app.listen("3001", () => {
    console.log("Server running on Port 3001...")
})

let io = socket(server, {
    cors: { origin: '*', credentials: true}
})

io.on('connection', (socket) => {

    socket.on('join_room', (data) => {
        socket.join(data)
        console.log("User joined room: " + data)
    })

socket.on("send_message",  (data) => {
    socket.to(data.room).emit("receive_message", data.content)
})

    socket.on('disconnect', () => {
        console.log("USER DISCONNECTED")
    })
})