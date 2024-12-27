<script>
  import Movie from "./Movie.svelte";
  let value = "";
  let response = [];

  const handleInput = (event) => (value = event.target.value);

  $: if (value.length > 2) {
    fetch("https://www.omdbapi.com/?s=" + value + "&apikey=422350ff")
      .then((res) => {
        if (!res.ok) {
          throw new Error('Something bad happened with the fetching of movies');
        }
        return res.json();
      })
      .then((data) => response = data.Search || []); // Por sino hay un array de películas
  }
</script>

<input placeholder="Search movies..." {value} on:input={handleInput} />

{#await response}
  <strong>Loading...</strong>
{:then movies}
<!-- Ejemplo de renderizado condicional -->
  {#each movies as { Title, Year, Poster }}
    <Movie title={Title} year={Year} poster={Poster} />
  {:else}
    <strong>No hay resultados</strong>
  {/each}
{:catch error}
  <strong>There has been an error</strong>
{/await}
