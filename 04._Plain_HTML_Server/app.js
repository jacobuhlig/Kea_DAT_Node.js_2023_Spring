const express = require("express");
const app = express();

app.use(express.json()); // parses the body as json

console.log(__dirname);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/frontpage.html");
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



