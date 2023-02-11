// ------------------------------------------ //

const express = require("express");
const birds = require('./variables.js');
const app = express();

app.use(express.json());

app.listen(8080);

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
