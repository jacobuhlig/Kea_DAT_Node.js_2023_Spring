// https://www.boredapi.com/api

console.log(`Hello world`);

// task - fetch from boredapi and console log it

fetch("https://www.boredapi.com/api/activity")
  .then((response) => response.json()) // is a bytestream a convertible stream
  .then((result) => {
    // task - make the activity visible in the quest header tag
    document.getElementById("quest").innerText = result.activity;

    // This is an alternate way to do the same as above.
    // The one below uses variables, and the above (preferred) doesn't
    // const questDiv = document.getElementById("quest");
    // questDiv.innerText = result.activity;
  });
