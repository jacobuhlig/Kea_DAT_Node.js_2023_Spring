// Variable declaration
module.exports = {

    // ----------------Birds---------------- //

    birds: [
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
    ],



    // ----------------GET---------------- //

    findById: function (id) {
        const foundBird = this.birds.find(bird => bird.id === Number(id));
        if (foundBird) {
            return foundBird
        }
        else {
            return `Bird with id: ${id} doesn't exist.`
        };
    },



    // -----------------POST-------------------- //

    createBird: function (bird) {
        const idToCome = this.birds.length; //The length of the birds array
        const newBird = { id: idToCome, ...bird };
        this.birds.push(newBird);
        return newBird;
    },



    // -----------------UPDATE------------------- //

    updateBird: function (id, bird) {
        const foundBird = this.birds.find(bird => bird.id === Number(id));
        if (!foundBird) { return `Bird with id: ${id} doesn't exist.` };
        if (bird.species) { foundBird.species = bird.species };
        if (bird.color) { foundBird.color = bird.color };
        return foundBird;
    },



    // -----------------DELETE------------------- //

    deleteBird: function (id) {
        //Deletes elements from the original array, instead of returning a new and modified one (this was on purpose)
        const index = this.birds.findIndex(bird => bird.id === Number(id));
        // -1 === false
        if (index !== -1) {
            this.birds.splice(index, 1);
            return true;
        } else {
            return `Bird with id: ${id} doesn't exist.`;
        }
    }
}
