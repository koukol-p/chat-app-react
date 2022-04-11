
const server = require("http").createServer();
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
//array of all currently connected clients  
let clients = [];

const filterByRoom = (allClients, roomId) => {
  const roomClients = Array.from(io.sockets.adapter.rooms.get(roomId));
  //filter an array of all connected clients and keep only those in specified room
  const filtered  = allClients.filter(c => roomClients.find(cid => cid === c.ID));
  return filtered;


}
io.on("connection", (socket) => {
  console.log("user connected");
  
  
  socket.on("join_room", ({userName, roomId}) => {
    socket.userName = userName;
    clients.push({ID: socket.id, userName})
    socket.join(roomId);
    io.to(roomId).emit("status", filterByRoom(clients, roomId));  
    console.log(`User ${userName} joined room ${roomId}`)
    socket.on("disconnect", () => {
      clients = clients.filter(c => c.ID !== socket.id)
      io.to(roomId).emit("status", filterByRoom(clients, roomId));  
    })
  })
  socket.on("message", ({userName, msg, room}) => {
    io.to(room).emit("message", {userName, msg});
  })
 
})



const PORT = 5000;
server.listen(PORT, () =>
  console.log(`server listening at http://localhost:${PORT}`)
);