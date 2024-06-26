import express from 'express';
const app = express();
app.use(express.json());

// app.use(express.static("../client/dist"));

import session from 'express-session';
const sessionMiddleware = session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
});
app.use(sessionMiddleware);

//implement session middleware (found here: https://socket.io/docs/v3/middlewares/)

import cors from 'cors';
app.use(cors({
  credentials: true,
  origin: true
}));

import http from 'http';
const server = http.createServer(app);

import { Server } from 'socket.io';
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["*"]
  }
});

const wrap = middleware => (socket, next) => middleware(socket.request, {}, next);
io.use(wrap(sessionMiddleware))

io.on('connection', (socket) => {
  console.log(`A socket connected`);
  if(socket.request.session.username) {
    console.log("Welcome", socket.request.session.username);
  }

  socket.on("a client chose a color", (data) => {
    console.log(data);
    data.username = socket.request.session.username;
    io.emit("a new color just dropped", data);
  });
});

app.get("/users/me", (req, res) => {
  res.send({date: req.session.username});
});

app.post("/register", (req, res) => {
  req.session.username = req.body.username;
  res.send({date: req.body.username});
});


const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log(`Server is running on port`, PORT));