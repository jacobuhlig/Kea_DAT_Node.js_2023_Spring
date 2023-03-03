const { tanks } = require("./tanks.json");

// console.log(module);

function getTanks() {
  return tanks;
}


function addTank() {
  tanks.push(tank);
  return tanks;
}

module.exports = {
  getTanks,
  addTank
  // The following is the same
  // getTanks : getTanks,
  // addTank: addTank
};

// const tanks1 = [
//     { name: "Leopard", nationality: "Germany" },
//     { name: "Tiger", nationality: "Germany", year: 1943 },
//     { name: "M1 Abrams", version: "M1" }
// ];