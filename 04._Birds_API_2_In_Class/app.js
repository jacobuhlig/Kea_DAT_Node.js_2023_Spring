const express = require("express");
const app = express();


app.use(express.json()); // parses the body as json


const PORT = 8080;

app.listen(PORT, (error) => { // This is a way of error handling
    if (error) { // the type of error is undefined
        console.log(error);
        return;
    } else {
        console.log(`Server is running on port ${PORT}`);
    }
});

// ------------------------------- //

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
];

// ------------------------------- //

app.post("/birds", (req, res) => {
  res.send({data: birds})
})



app.patch("/birds/:id", (req, res) => {
  let foundBird = birds.findIndex(bird => bird.id === Number(req.params.id));
  if (foundBird === -1) { res.send({message:`Bird with id: ${id} doesn't exist.` })};
  if (bird.species) { foundBird.species = bird.species };
  if (bird.color) { foundBird.color = bird.color };
  return foundBird;
});



app.delete("/birds/:id", (req, res) => {
        const index = this.birds.findIndex(bird => bird.id === Number(id));
        // -1 === false
        if (index !== -1) {
            birds.splice(index, 1);
            return true;
        } else {
            res.status(404).send({data: index, message: `Bird with id: ${req.params.id} doesn't exist.`});
        }
    });



