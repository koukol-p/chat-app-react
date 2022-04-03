const express = require("express");
const cors = require("cors");
const http = require("http");
const dotenv = require("dotenv");

dotenv.config();

const userRoutes = require("./routes/userRoutes");
const connect = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

// DB connection
connect();

const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(socket.id, "connected");

  socket.on("message", (data) => {
    console.log(data);
    io.emit("message", data);
  });

  socket.on("disconnect", (socket) => {
    console.log(socket.id, "disconnected");
  });
});

app.use("/api/user", userRoutes);

server.listen(process.env.PORT || 5000, () => {
  console.log("listening on *:5000");
});