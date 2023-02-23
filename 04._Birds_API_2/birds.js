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
    }

}
