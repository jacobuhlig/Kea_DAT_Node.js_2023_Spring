import express from "express";
const app = express();
app.use(express.static("public"));

import http from "http";
const server = http.createServer(app);

import { Server } from "socket.io";
const io = new Server(server);

io.on("connection", (socket) => {
  console.log(`A client connected`, socket.id);

  socket.on("client chose a color", (data) => {

    // broadcasts to ALL sockets in the io namespace
    io.emit("a color was chosen", data);

    // send to all EXCEPT the socket itself
    // socket.broadcast.emit("a color was chosen", data);
    
    // ONLY emits to the socket itself
    // socket.emit("a color was chosen", data);
  });

  // Tests deleted from Anders' repo
  // socket.on("ready event", (data) => {
  //   console.log("From the ready event:", data.data);
  // });

  //   socket.on('color event', (color) => {
  //     console.log("From the ready event:", color.color);
  //   });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log("Server is running on port", PORT));


