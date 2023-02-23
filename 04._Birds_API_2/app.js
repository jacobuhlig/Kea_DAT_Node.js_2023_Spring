'use strict';

// ----------------Setup----------------- //

const express = require("express");
const birds = require('./birds.js');
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



// -----------------POST------------------- //

// Creating a bird
app.post("/birds", (req, res) => {
    const { ...bird } = req.body;
    const newBird = birds.createBird(bird);
    res.send({ data: newBird });
});



// -----------------GET------------------- //

// Get all birds
app.get("/birds", (req, res) => {
    res.send({ data: birds.birds });
});

// Get single bird (by id)
app.get("/birds/:id", (req, res) => {
    const { id } = req.params;
    const foundBird = birds.findById(id);
    res.send({ data: foundBird });
});



// -----------------UPDATE------------------- //

// Update single bird
app.patch("/birds/:id", (req, res) => {
    const { id } = req.params;
    const { ...bird } = req.body;
    const updatedBird = birds.updateBird(id, bird);
    res.send({ data: updatedBird });
});



// -----------------DELETE------------------- //

// Delete single bird
app.delete("/birds/:id", (req, res) => {
    const { id } = req.params;
    const foundBird = birds.deleteBird(id);
    res.send({ data: foundBird });
});
