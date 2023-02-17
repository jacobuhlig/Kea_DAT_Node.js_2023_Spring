const spaceships = [
  { name: "Chinese Weather Baloon", isPriceless: false, cost: 1_000_000 },
  { name: undefined, type: "UFO", isPriceless: true, cost: Number.MAX_SAFE_INTEGER },
  { name: "Apollo 13", versionNumber: 13 , isPriceless: false, cost: 2_000_000 }
];

// assignment - task loop and console log each element
// Hint - forEach loop

// spaceships.forEach((spaceship, index, array) => console.log(index, spaceship, array));



// assignment - task for all spaceship make the owner China
const spaceshipsWithOwners = spaceships.map(spaceship => {
  spaceship.owner = "China";
  return { ...spaceship, owner: "China" }; // this creates a new key-value pair
});

// console.log(spaceshipsWithOwners);


// assignment - add a cost of isPriceless: true to all spaceshipWithOwners

// console.log(spaceshipsWithOwners);

// const pricelessSpaceships = spaceshipsWithOwners.map(spaceship => {
//   spaceship.isPriceless = true;
//   return spaceship;
// });

// console.log(pricelessSpaceships);





// assignment - give me the priceless and not priceless spaceships in two lists

const priceless = spaceships.filter(spaceship => spaceship.isPriceless === true);
const notPriceless = spaceships.filter(spaceship => spaceship.isPriceless === false);

// console.log(`Priceless:`);
// console.log(priceless); 
// console.log(`Not priceless:`);
// console.log(notPriceless); 




// assignment - find a spaceship that costs less than 2 million yuan / dollars / whatever spacebucks

// This didn't work, because the filter method only finds the first
// const affordable = spaceships.filter(spaceship => spaceship.cost < 2_000_000);
// const notAffordable = spaceships.filter(spaceship => spaceship.cost > 2_000_000);

// console.log(`Affordable:`);
// console.log(affordable); 
// console.log(`Not affordable:`);
// console.log(notAffordable); 



const affordable = spaceships.find(spaceship => spaceship.cost < 2_000_000);

console.log(affordable);


