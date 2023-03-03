import express from "express";
const app = express();

import path from "path";

app.use(express.static("public"));

// Pages

app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/index.html"));
  // res.sendFile(__dirname + "public/index.html");
});

// Time

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// API

app.get("/api/time", (req, res) => {
  res.send({ data: weekdays[new Date().getDay()] });
});

// port

const PORT = 3000;

app.listen(PORT, (error) => {
  // This is a way of error handling
  if (error) {
    // the type of error is undefined
    console.log(error);
  }
  console.log(`Server is running on port ${PORT}`);
});
