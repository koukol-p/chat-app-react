const express = require("express");
const cors = require("cors");
const http = require("http");
const dotenv = require("dotenv");

dotenv.config();



const server = http.createServer();
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.use((socket, next) => {
  const contactNumber = socket.handshake.auth.contactNumber;
  if (!contactNumber) {
    return next(new Error("invalid contact number"));
  }
  console.log("CN: ", contactNumber);
  socket.contactNumber = contactNumber;
  next();
})
io.on("connection", (socket) => {
  const users = [];
  for (let [id, socket] of io.of("/").sockets) {
    users.push({
      userID: id,
      contactNumber: socket.contactNumber,
    });
  }
  socket.emit("users", users);
})

server.listen(process.env.PORT || 5000, () => {
  console.log("listening on *:5000");
});
