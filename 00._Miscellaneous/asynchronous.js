/*
Why: Because JavaScript is single-threaded

Example:
Fetching over a network
Heavy calculations
Cryptographic functions
Reading/writing to files
*/

// Solution 1: Callbacks
// Con: Callback hell, pyramid of doom
// Callback hell is the idea that you have a lot of nested callbacks
// Pyramid of doom relates to callback hell, and is the idea that you have a lot of nested functions

// Example
// function hello(someString, cb) {
//     console.log(someString);
//     cb();
//   }


// Solution 2: Promises
// Two states:
// pending or fullfilled
//  - rejected
//  - resolved

// Example
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     try {
//       throw error;
//       resolve("Yaaay");
//     } catch {
//       reject("Naaay");
//   }}, 3000);
// })
// .then(successMessage => console.log("Success message: ", successMessage))
// .catch(errorMessage => console.log("Error message: ", errorMessage));


// Task - create a function called celebrate that returns a promise that celebrates or not (up to you) 
function celebrate(name) {
  return new Promise((resolve, reject) => {
    if (name) {
      resolve(`Banzai, ${name}, banzai`);
    } else {
      reject("No one to celebrate");
    }
})
};

// task: call celebrate and handle the resolve/reject
// celebrate().then(celebrationMessage => console.log(celebrationMessage))


// task create a function called "somethingGoodSomethingBad" 
// it should return a new promise
// it should utilize both resolve and reject
// create a timeout to simulate asynchronous behavior

async function somethingGoodSomethingBad() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve("Good");
      } catch {
        reject("Bad");
    }}, 3000);
  })
}

// task: call somethingGoodSomethingBad and handle the resolve/reject
// somethingGoodSomethingBad()
// .then(console.log)
// .catch(console.log);



// Solution 3: Async/Await
// const somethingGoodSomethingBad = await somethingGoodSomethingBad();
// console.log(somethingGoodSomethingBad);

async function getSomethingGoodSomethingBad() {
  const somethingGoodSomethingBadMessage = await somethingGoodSomethingBad();
  const celebrationMessage = await celebrate("Jacob");
  console.log(somethingGoodSomethingBadMessage, celebrationMessage);
}

getSomethingGoodSomethingBad();

function Parallel() {
  Promise.all([somethingGoodSomethingBad(), celebrate("Jacob")]);
};

Parallel();