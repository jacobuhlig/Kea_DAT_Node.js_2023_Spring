'use strict'
// assignment make all the rocks one year older and save the value to rocksAgedOneYear

const rocks = [
  {name: "Pet rock", age: 50},
  {name: "Led Zeppelin", age: 55},
  {name: "Dwayne Johnson", age: 50},
  {name: "Neptune", age: 100_00_000_000}
];



// The preferred method
// map is here used to alter variables of an object

// note: when we're given these exercises, Anders uses the 'undefined' type, to indicate 'This is where we're supposed to solve the problem'. Therein, replacing the 'undefined'.


// console.log("1. first solution");

// const rocksAgedOneYear = rocks.map(rock => ({
//   name: rock.name,
//   age: rock.age + 1
// }));

// console.log(rocksAgedOneYear);



console.log("1. second solution");

const rocksAgedOneYear1 = rocks.map(rock => ({
  ...rock, age: rock.age+1
}));

console.log(rocksAgedOneYear1);



// Not the ideal solution, as it alters the original array
// console.log("1. third solution");

// const rocksAgedOneYear2 = rocks.map(rock => {
//   rock.age++
//   return rock;
// });

// console.log(rocksAgedOneYear2);



// Works, but isn't the norm
// const length = rocks.length;

// for (let i = 0; i < length; i++) {
  //   const age = rocks[i].age += 1;
  //   console.log(age);
  // }
  
  // Loop methods: map, filter, find, reduce, sort, forEach
  // map: returns a an array (is also highly parallelized)
  // filter: doesn't return 'one to one'
  
  
  
  
  
  
  
  
  // assignment give me the 3 rocks that have even ages
  
  console.log("2. first solution");
  
  const evenAgedRocks = rocks.filter(newRock => {
    return newRock.age % 2 === 0;
  });
  
  console.log(evenAgedRocks);