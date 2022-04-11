
const server = require("http").createServer();
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});


io.on("connection", (socket) => {
  console.log("user connected");
  socket.on("join_room", ({userName, roomId}) => {
    
    socket.join(roomId);
    console.log(`User ${userName} joined room ${roomId}`)
  })
})



const PORT = 5000;
server.listen(PORT, () =>
  console.log(`server listening at http://localhost:${PORT}`)
);