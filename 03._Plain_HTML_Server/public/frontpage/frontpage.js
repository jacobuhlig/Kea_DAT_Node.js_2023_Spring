// assignment redirect a user to /visitors after they've been to the museum for 3 seconds... write everything in this file
console.log(`Hello`);

setTimeout(() => {
  console.log(`test`);
  // window.location.href = "/visitors";
  window.location.replace("/visitors");
}, 3000);
