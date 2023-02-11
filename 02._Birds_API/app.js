// ------------------------------------------ //

const express = require("express");
const app = express();

app.use(express.json());

app.listen(8080);

// ------------------------------------------ //
// Variable declaration

const birds = [
  {
    id: 0,
    species: "European Starling",
    color: "Black and iridescent purple/green"
  },
  {
    id: 1,
    species: "American Robin",
    color: "Gray and orange"
  },
  {
    id: 2,
    species: "House Sparrow",
    color: "Brown and gray"
  },
  {
    id: 3,
    species: "Northern Cardinal",
    color: "Red and brown"
  },
  {
    id: 4,
    species: "Blue Jay",
    color: "Blue and white"
  }
]

// ------------------------------------------ //

// Get all birds
app.get("/birds", (req, res) => {
  res.send(
    {
      message: "List of birds",
      birds: birds
    }
  );
});

// Get single bird
app.get(`/birds/:id`, (req, res) => {
  res.send(
    {
      birds: birds[req.params.id]
    }
  );
});

// Get single bird with description
app.get(`/birds/message/:id`, (req, res) => {
  res.send(
    {
      message: `The ${birds[req.params.id].species} is most commonly known to be ${birds[req.params.id].color} in color.`
    }
  );
});

// ------------------------------------------ //
