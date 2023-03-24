// const express = ("express");
import express from "express";
const app = express();

//The new way to do refer to the path
import path from "path";

// This is not necessarily the best method, because the user would then have to serve the actual path, every time a site, would want to be accessed
app.use(express.static("public"));

// const jokes = require("./util/jokes"); //Omitting the extension ".js", is allowed, much to the chagrin of the Node developer
import jokes from "./util/jokes.js";

//Below gives us a buffer of bytes (binary),
//then we've converted it into readable html using 'toString()'
import fs from "fs";

import templateEngine from "./util/templateEngine.js";

// Components
// task - read the navbar and the footer here
// const navbar = fs.readFileSync("./public/components/navbar/navbar.html").toString();
// const footer = fs.readFileSync("./public/components/footer/footer.html").toString();

// Pages
// const frontpageElement = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();
// const IRLQuestsElement = fs.readFileSync("./public/pages/IRLQuests/IRLQuests.html").toString();
// const jokesElement = fs.readFileSync("./public/pages/jokes/jokes.html").toString();
// console.log(frontpageElement);
// console.log(IRLQuestsElement);
// console.log(jokesElement);


const partOfPath = "./public/pages/";

// Constructed pages
const frontpagePath = templateEngine.readPage(partOfPath + "frontpage/frontpage.html");
const frontpagePage = templateEngine.renderPage(frontpagePath, {
  tabTitle: "Upper | Welcome"
});



const IRLQuestsPath = templateEngine.readPage(partOfPath + "IRLQuests/IRLQuests.html");
const IRLQuestsPage = templateEngine.renderPage(IRLQuestsPath,  {
  tabTitle: "Upper | IRL Quests"
});


// todo SPA



// Endpoints
app.get("/", (req, res) => {
  res.send(frontpagePage)
});

app.get("/jokes", async (req, res) => {
    const jokesPage = await templateEngine.renderJokePage();
    res.send(jokesPage);    
});

app.get("/quests", (req, res) => {
  res.send(IRLQuestsPage)
});

console.log(process.env);

// Status message
const PORT = process.env.PORT || 8082;
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
