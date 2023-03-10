// // const jokes = require("./jokes.json");
// import jokes from "./jokes.json" assert { type: "json" };

// export default jokes;

// todo - fetch a joke from api, and log it to the console
// the api url: https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit

import fetch from "node-fetch";
import Sentiment from "sentiment";
const sentiment = new Sentiment();

// fetch(
//   "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
// )
//   .then((response) => response.json()) // is a bytestream a convertible stream
//   .then((result) => {
//     console.log(result);
//   });

async function getJoke() {
  const URL =
    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
  const response = await fetch(URL);
  const result = await response.json();
  console.log(result);

  const jokeToAnalyze = result.joke || `${result.setup} ${result.delivery} `; // a safety feature - exceptions
  const { score } = sentiment.analyze(jokeToAnalyze);
  if (score < 0) {
    // I don't like that joke .. I want to get a new one
    getJoke();
  }
  return result;
}

// console.log(sentiment.analyze("Node is shit"));

// Result of the above console log:
// score: -4,
//   comparative: -1.3333333333333333,
//   calculation: [ { shit: -4 } ],
//   tokens: [ 'node', 'is', 'shit' ],
//   words: [ 'shit' ],
//   positive: [],
//   negative: [ 'shit' ]

console.log(await getJoke());

export default { getJoke };
