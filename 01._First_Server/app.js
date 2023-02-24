//const app = require("express")();
const express = require("express");
const app = express();

app.use(express.json());

// console.log(app);


// route (entire thing)
// HTTP method
// |  endpoint  callback function
app.get("/", (req, res) => {
  res.send({ message: "Our first route"});
});


let bicycleSpins = 0;
app.get("/spinthebicycle", (req, res) => {
  bicycleSpins += 1;
  res.send({ message: `People have spun the bicycle wheel ${bicycleSpins} times.`});
});


/*assignment
  create a new route that kicks the dinosaur
  and then the dinosaur says ow ow ow
*/

app.get("/kickthedino", (req, res) => {
  res.send({ message: `You kicked the dino
  The Dino says: Ow ow ow.`});
});


app.get("/about", (req, res) => {
  res.send(`
    <h1>About</h1>
    <h3>This is my about page</h3>
  `)
});

// /bat?adjective=spooky
app.get("/bat", (req, res) => {
  console.log(req.query);

  res.send({ message: `The bat is ${req.query.adjective}`})
});


// /bottle/large
app.get("/bottle/:bottleSize", (req, res) => {
  res.send({ bottleSize: req.params.bottleSize });
});



//
app.post("/package", (req, res) => {
  console.log(req.body);
  res.send({ message: req.body });
});

// time
app.get("/time/time", (req, res) => {
  res.send({
    timeUTC: new Date(),
    timeLocal: Date(),
    unixTimestamp: Date.now()
  });
});

// assignment - get the current date and month in English

// console.log(new Date().toLocaleDateString("da-dk", {weekday: "short"})); //fre
// console.log(new Date().toLocaleDateString("da-dk", {weekday: "long"})); //fredag

// console.log(new Date().toLocaleDateString("da-dk", {month: "short"})); //feb.
// console.log(new Date().toLocaleDateString("da-dk", {month: "long"})); //februar

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

app.get("/time/day", (req, res) => {
  res.send({
    data: days[new Date().getDay()]
  });
});


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

app.get("/time/month", (req, res) => {
  res.send({
    data: months[new Date().getMonth()]
  });
});



// console.log(new Date());
// console.log(Date());
// console.log(Date.now());


// app.get("/packages", (req, res) => {
//   console.log(req.body);
//   res.send({ message: req.body });
// });


app.listen(8080);