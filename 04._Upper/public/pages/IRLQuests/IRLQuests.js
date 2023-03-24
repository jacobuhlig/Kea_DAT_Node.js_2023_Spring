// https://www.boredapi.com/api

console.log(`Hello world`);



function fetchQuest(activityQueryString="") {
  fetch("https://www.boredapi.com/api/activity"+activityQueryString)
    .then((response) => response.json()) // is a bytestream a convertible stream
    .then((result) => {
      // task - make the activity visible in the quest header tag
      document.getElementById("quest").innerText = result.activity;
    });
}

fetchQuest();


// task - fetch from boredapi and console log it


    // This is an alternate way to do the same as above.
    // The one below uses variables, and the above (preferred) doesn't
    // const questDiv = document.getElementById("quest");
    // questDiv.innerText = result.activity;

function getNewQuest() {
  const dropdown = document.getElementById("activity-dropdown");
  fetchQuest(`?type=${dropdown.value}`);
}

  document.getElementById("fetch-new-quest-btn").addEventListener("click", getNewQuest);