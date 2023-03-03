// const express = ("express");
import express from "express";
const app = express();

//The new way to do refer to the path
import path from "path";

// This is not necessarily the best method, because the user would then have to serve the actual path, every time a site, would want to be accessed
// app.use(express.static("public"));

// const jokes = require("./util/jokes"); //Omitting the extension ".js", is allowed, much to the chagrin of the Node developer
// import jokes from "./util/jokes.js";

const partOfPath = "public/pages/"; // could possibly result in another

app.get("/", (req, res) => {
  res.sendFile(path.resolve(partOfPath + "frontpage/frontpage.html"));
});

app.get("/quests", (req, res) => {
  res.sendFile(path.resolve(partOfPath + "IRLQuests/IRLQuests.html"));
});

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
