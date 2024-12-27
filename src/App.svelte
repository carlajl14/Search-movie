<script>
  // import Counter from "./lib/Counter.svelte";
  import Input from "./lib/Input.svelte";

  const commonProps = { maxCounter: 5}
</script>

<!-- <Counter initialCounter={2} {... commonProps}/>
<Counter initialCounter={10} {... commonProps}/>
<Counter {... commonProps} /> -->

<style>
  h1{
    font-size: 32px;
  }

  section {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
</style>

<section>
  <h1>Search movies</h1>
  <Input />
</section>