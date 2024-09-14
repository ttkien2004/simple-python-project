const express = require('express');
const http = require('http')
const cors = require('cors')
const { Server } = require('socket.io')

const app = express();

// Middleware
app.use(express.json())

app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

app.use(cors())
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",        
    }
})

io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`)


    socket.on("join_room", (data) =>{ 
        // When you join the room, you call this function
        socket.join(data);
    })
    socket.on("send_message", (data) => {
        // console.log(data);
        // socket.broadcast.emit("receive_message", data)
        socket.to(data.room).emit("receive_message", data);
    })
})

server.listen(5001, () => {
    console.log("Server is running")
})