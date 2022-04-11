
const server = require("http").createServer();
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.use((socket, next) => {
  const contactNumber = socket.handshake.auth.contactNumber;
  if (!contactNumber) {
    return next(new Error("invalid CNe"));
  }
  socket.contactNumber = contactNumber;
  next();
});
io.on("connection", (socket) => {
  socket.on("setup", (userData) => {
    socket.join(userData.contactNumber);
    console.log(userData)
    socket.emit("connected");
  })

  socket.on("join chat", (room) => {
    socket.join(room);
    console.log("User joined room ",room)
  })
})



const PORT = 5000;
server.listen(PORT, () =>
  console.log(`server listening at http://localhost:${PORT}`)
);