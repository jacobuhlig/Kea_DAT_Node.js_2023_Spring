// "use strict"

// totalGlobalVariable = "Never ever do this";
// var globalVariable = "Also never do this";

// This will turn out to be false, because var is global
// {
//   var someValue = true;
//   {
//     var someValue = false;
//   }
//   console.log(someValue);
// }


// This will turn out to be true, because let isn't global
// {
//   let someValue = true;
//   {
//     let someValue = false;
//   }
//   console.log(someValue);
// }



// Results in 6, 6, 6, 6, 6, 6
// for (var i = 0; i <= 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }


//Results in 
// for (let i = 0; i <= 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// let a;