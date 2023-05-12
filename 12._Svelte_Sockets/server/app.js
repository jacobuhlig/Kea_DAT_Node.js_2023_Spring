import express from 'express';
const app = express();

import http from 'http';
const server = http.createServer(app);

import { Server } from 'socket.io';
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["*"]
  }
});

io.on('connection', (socket) => {
  console.log(`A socket connected`);
  socket.on("a client chose a color", (data) => {
    console.log(data);
    io.emit("a new color just dropped", data);
  });
});

app.get("/something", (req, res) => {
  res.send("Something");
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log(`Server is running on port`, PORT));