<!-- Import Colors.svelte -->
<script>
  import { onMount } from 'svelte';
  import { BASE_URL, myUsername } from "./stores/globalStore.js";
  
  import Colors from './pages/Colors/Colors.svelte';
  import ChosenColorsList from './components/ChosenColorsList/ChosenColorsList.svelte';
  import Register from './pages/Register/Register.svelte';

  onMount(async () => {
    const response = await fetch($BASE_URL + "/users/me", {
      credentials: "include"
    });
    const result = await response.json();
    console.log(result);
    myUsername.set(result.data);
  });
</script>

{#if $myUsername}
  <Colors />
  <ChosenColorsList />
{:else}
  <Register />
{/if}
