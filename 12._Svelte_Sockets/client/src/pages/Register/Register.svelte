<script>
  import { BASE_URL, myUsername } from "../../stores/globalStore.js";
  
  let username = "";

  async function handleRegistration() {
    console.log(username);
    fetch($BASE_URL + "/register", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ username }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    myUsername.set(username);
  }
</script>

<h1>Register page</h1>

<input placeholder="username..." bind:value= {username}>
<button on:click={handleRegistration}>Register now</button>
