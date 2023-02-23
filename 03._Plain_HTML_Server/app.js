'use strict';

const express = require("express");
const app = express();

app.use(express.static("public")); // static is the relevant word word for the conjunction of frontend files

console.log(__dirname);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/frontpage/frontpage.html");
});


app.get("/tanks", (req, res) => {
  res.sendFile(__dirname + "/public/tanks/tanks.html");
})


const PORT = 8080;


app.listen(PORT, (error) => { // This is a way of error handling
  if (error) { // the type of error is undefined
    console.log(error);
    return;
  } else {
    console.log(`Server is running on port ${PORT}`);
  }
});