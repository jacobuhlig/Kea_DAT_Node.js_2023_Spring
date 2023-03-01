

function start() {
  fetch("/api/time")
  .then(response => response.json())
  .then(result => {
    
    const dayDiv = document.getElementById("verify-day-wrapper");
    const createP = document.createElement("p");

    dayDiv.innerHTML = "";
    
    if(result.data === "Friday") {
      createP.innerText = "YES! It's " + result.data;
    } else {
      createP.innerText = `No it's not it's ${result.data}, stupid`;
    }
  
    dayDiv.appendChild(createP);
  });
};