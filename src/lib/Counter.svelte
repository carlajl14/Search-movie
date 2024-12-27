<script>
    export let initialCounter = 0;
    export let maxCounter = 9;

    let contador = initialCounter;
  
    function handleClick() {
      contador++;
    }

    // Se va a ejecutar cada vez que cambie el valor de contador, es una declaración reactiva
    $: isEvenOrOdd = contador % 2 === 0 ? 'Is Even' : 'Is Odd';

    $:  if (contador > maxCounter) { // Si el contador es mayor a 9, se reinicia a 9
            contador = maxCounter;
        }
</script>
  
<style>
   span{
    color: red;
   }
</style>
  
<button on:click={handleClick}>Incrementar</button>
<span>{contador}</span>
<span>{isEvenOrOdd}</span>
<!-- Otra opción de renderizado del valor de la variable contador -->
<!-- <span>{contador % 2 === 0 ? 'Is Even' : 'Is Odd'}</span> -->
  