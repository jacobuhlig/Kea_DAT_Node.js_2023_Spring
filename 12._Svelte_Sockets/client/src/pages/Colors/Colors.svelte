<!-- fixme: console log the color when the user picks one -->

<script>
  import { dataset_dev } from 'svelte/internal';
  import {colorsList, myUsername} from '../../stores/globalStore.js';

import io from 'socket.io-client';

const socket = io("localhost:8080");

let chosenColor = "#000000";

// fix it
  function handleColorChosen() {
    console.log(`button clicked`, chosenColor);
    socket.emit("a client chose a color", { data: chosenColor,
    username: $myUsername });
  }

  socket.on("a new color just dropped", (data) => {
    // socket.emit("a client chose a color", { data: chosenColor });

    // don't do this... do it the Svelte way 
    // by adding it to a store and let App.svelte subscribe to it
    document.body.style.backgroundColor = data.data;

    colorsList.update(list => {
      list.push({
        color: data.color,
        username: data.username
      });
      return list;
    });
  });
</script>

<input type="color" bind:value={chosenColor}>
<button on:click={handleColorChosen}>Send color</button>