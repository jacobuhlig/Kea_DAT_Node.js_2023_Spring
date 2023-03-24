<script>
  import Bird from "./Bird.svelte";

  const birds = ["Pigeon", "Eagle", "Chicken", "Turkey", "Owl"];
  const birdEmoji = ["🐦", "🦅", "🐔", "🦃", "🦉"];

  let birdIndex = 0;
  let FavoriteBird = birds[birdIndex];
  let FavoriteBirdEmoji = birdEmoji[birdIndex];

  function changeFavoriteBird() {
    birdIndex = (birdIndex + 1) % birds.length;
    FavoriteBird = birds[birdIndex];
    FavoriteBirdEmoji = birdEmoji[birdIndex];
  }
</script>

<h2>Favorite bird</h2>
<div on:click={changeFavoriteBird} on:keydown={changeFavoriteBird}>
  <Bird name={FavoriteBird} emoji={FavoriteBirdEmoji} />
</div>

<h2>All birds that I know of</h2>
{#each birds as bird}
  <Bird name={bird} />
{/each}

<!-- <Bird name={birds[birdIndex]} emoji={birdEmoji[birdIndex]} /> -->
