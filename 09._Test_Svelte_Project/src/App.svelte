<script>
  import Check from "./pages/check/Check.svelte";
  import Frontpage from "./pages/frontpage/Frontpage.svelte";
  import { Router, Route, Link } from "svelte-navigator";



</script>

<h1>My First Heading</h1>

<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="check">Check</Link>
  </nav>

  <Route path="/">
    <Frontpage/>
  </Route>
    
  <Route path="check" component={Check} />
</Router>


<Check>

  
</Check>

<Frontpage>
  <h2>Can you see me ?</h2>
</Frontpage>



<style>

</style>