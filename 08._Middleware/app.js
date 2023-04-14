import express from 'express';
const app = express();

// Routers
import router from './routers/roomRouter.js';
app.use(router);



// function get(path, cb) {
//   // match
//   let req, res, next = {};
//   cb(req, res, next);
// }

function guard(req, res, next) {
  console.log(`Are you allowed to enter?`);
  if (req.query.name === "Jacob") {
    req.myName = "Jacob"
    console.log(req.myName);
    next(); // if this line is returned, then the else-statement isn't necessary.
  }
  else {
    res.send({ message: 'You are not allowed to enter' })
  }
}

import roomRouter from './routers/roomRouter.js';
app.use(roomRouter);

app.get("/frontdoor", guard,  (req, res, next) => {
  res.send({ message: 'Please enter' });
});


function butler(req, res, next) {
  console.log("This way...");
  res.send({ message: 'It will never reach room 1' });
  // next();
}


router.use("/room", butler);



router.get("/room", (req, res, next) => {
  next();
  // res.send({ message: 'Room 1' });
});

router.get("/room", (req, res, next) => {
  res.send({ message: 'Room 2' });
  next();
});

app.get("*", (req, res, next) => {
  res.send("<h1>404 Not Found</h1>");
});







const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));