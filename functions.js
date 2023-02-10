
// Possible because of hoisting
// console.log(random(0, 10));

// function random(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) - min);
// }

// const randomAnonymousFunction = function (min, max) {
//   return Math.floor(Math.random() * (max - min + 1) - min);
// };

// console.log(randomAnonymousFunction(0, 10));


// const randomArrowFunction = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) - min);
// };

// const randomArrowFunctionCompact = (min, max) => Math.floor(Math.random() * (max - min + 1) - min);





function genericActionPerformer(genericAction, genericName) {
  // do stuff...

  return genericAction(genericName);
}

const subtract = (name) => `${name} is subtracting.`;

// task without touching the two functions above but still using them below
// task make it console.log Tobias is subtracting.


// console.log(genericActionPerformer(subtract, "Tobias"));



const walk = (name) => `${name} is walking`;

/* assignment
    Make it say Nicolas is walking
*/

// console.log(genericActionPerformer(walk, "Nicolas"));



/* assignment
    read: andrea
*/

const read = (name) => `${name} is reading.`;

console.log(genericActionPerformer(read, "Andrea"));
console.log(genericActionPerformer((name) => `${name} is reading.`, "Andrea"));
