<!-- fixme: console log the color when the user picks one -->

<script>
import io from 'socket.io-client';

const socket = io("localhost:8080");

let chosenColor = "#0000000";

  function handleColorChosen() {
    console.log(`button clicked`, chosenColor);
    socket.emit("a client chose a color", { data: chosenColor });
  }

  socket.on("a new color just dropped", (data) => {
    // socket.emit("a client chose a color", { data: chosenColor });

    // don't do this... do it the Svelte way 
    // by adding it to a store and let App.svelte subscribe to it
    document.body.style.backgroundColor = data.data;
  });

</script>

<input type="color" bind:value={chosenColor}>
<button on:click={handleColorChosen}>Send color</button>


<style>
  
</style>

