const express = require("express");
const app = express(); // This is the instantiation of express, essentially

app.use(express.json()); // parses the body as json
const port = 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


const birds = [
  { id: 1, name: 'Violet-backed starling', maleRating: 10, femaleRating: 2 },
];

// console.log(birds.filter(bird => false));
// console.log(birds.filter(bird => true));





app.get("/birds/:id", (req, res) => {
  const foundBird = birds.find(bird => bird.id === Number(req.params.id));  // always returns an element
  console.log(req.params.id);

  res.send({ data: foundBird});
});


// Where have we seen this before (The client server model)
app.get("/birds", (req, res) => {
  res.send({ data: birds});
});
