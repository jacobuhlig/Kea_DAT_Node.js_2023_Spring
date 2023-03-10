const express = require("express");

const app = express();

app.use(express.static("public"));


// Pages

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/frontpage/frontpage.html");
});



// Time

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];



// API

app.get("/api/time", (req, res)  => {
  res.send({data: weekdays[new Date().getDay()]});
});



// port

const PORT = 8080;

app.listen(PORT, (error) => { // This is a way of error handling
    if (error) { // the type of error is undefined
        console.log(error);
        return;
    } else {
        console.log(`Server is running on port ${PORT}`);
    }
});