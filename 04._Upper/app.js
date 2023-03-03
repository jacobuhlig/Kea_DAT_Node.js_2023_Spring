// const express = ("express");
import express from "express";
const app = express();

// const jokes = require("./util/jokes"); //Omitting the extension ".js", is allowed, much to the chagrin of the Node developer
// import jokes from "./util/jokes.js";

const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log("The server is running on port", PORT);
});

// function listen(PORT, callback) {
//   try {
//     // starting up the server
//     if (callback) callback();
//   } catch (error) {
//     if (callback) callback(error);
//   }
// }
