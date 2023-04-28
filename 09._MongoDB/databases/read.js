import db from "./connections.js";

// const foundShops = await db.shops.find({ city: "Hellerup" }).toArray();
const foundshops = await db.shops.find().toArray();
console.log(foundshops);