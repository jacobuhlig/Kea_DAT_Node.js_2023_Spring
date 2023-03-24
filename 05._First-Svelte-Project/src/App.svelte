<script>
  import FavoriteBirds from "./lib/FavoriteBirds.svelte";
  import Greeter from "./lib/Greeter.svelte";
  import Garden from "./lib/Garden.svelte";
  import GardenGate from "./lib/GardenGate.svelte";
</script>

<Greeter />
<Greeter />
<Greeter />
<Greeter name="Uncle Bob" greeting="Goodbye" />
<Greeter name="Martin" />

<FavoriteBirds />

<GardenGate />

<Garden />
