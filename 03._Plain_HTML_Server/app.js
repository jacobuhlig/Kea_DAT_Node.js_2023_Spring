const { response } = require("express");
const express = require("express");
const app = express();

app.use(express.static("public"));

// const tanksUtil = require("./util/tanks.js");
// console.log(tanksUtil.getTanks());

const { getTanks, addTank } = require("./util/tanks.js");
// console.log(getTanks());

let visitorCount = 0;

/* Pages */

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/frontpage/frontpage.html");
});

app.get("/tanks", (req, res) => {
  res.sendFile(__dirname + "/public/tanks/tanks.html");
});

app.get("/visitors", (req, res) => {
  res.sendFile(__dirname + "/public/visitors/visitors.html");
});

app.get("/museumguards", (req, res) => {
  res.sendFile(__dirname + "/public/museumGuards/guards.html");
});

app.get("/proxy", async (req, res) => {
  // task - make a request to https://google.com
  // task serve the text data
  fetch("https://google.com")
    .then((response) => response.text())
    .then((result) => res.send(result));
});

/* API */

// task create three routers called tanksRouter.js, visitorsRouter.js, guardsRouter.js
// 

app.get("/api/tanks", (req, res) => {
  res.send({ data: getTanks() });
});

app.get("/api/visitors", (req, res) => {
  res.send({ data: visitorCount });
});

app.put("/api/visitors", (req, res) => {
  res.send({ data: ++visitorCount });
});

// This is really important, because it enables
app.get("/api/guards", (req, res) => {
  if (req.query.passport === "theskyisblue") {
    return res.redirect("/api/tanks");
  }
  res.send({
    message:
      "You are not allowed to see the tanks. Type in the correct query string, with the key being passport, to gain access.",
  });
});

const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("Server is running on port", PORT);
});
