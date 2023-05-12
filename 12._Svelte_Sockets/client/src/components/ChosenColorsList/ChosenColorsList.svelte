<script>
  import { colorsList } from "../../stores/globalStore";
</script>

{#each $colorsList as colorPick}
  <div style={'backgroundColor'}>
    <h4>colorPick.username</h4>
  </div>  
{/each