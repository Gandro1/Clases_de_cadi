<script setup>
  import { ref } from "vue";

  let info = ref('Deseo Loguear')
  let cantidadPokemon = ref(0)

  function deseoLoguear(e) {
    alert(`Deseo ${info.value}`)
    if (e) {
      alert(e.target.tagName) 
    }
  }
  function mecanicas(msg, e) {
    alert(msg)
    if (e) {
      console.log(e.target.tagName)
    }
  }
</script>

<template>
  <header>
   <div id="subHeader">
    <div @click="cantidadPokemon++">Cargar Pokemons</div>
    <div @click="mecanicas('deseo saber de las mecanicas')">Game mechanics</div>
    <div>Pokemon games</div>
    <div @click="deseoLoguear">Login/Register</div>
    <div>Search</div>
   </div>
  </header>

  <main>
    <p>Cantidad de Pokemones: {{ cantidadPokemon }}</p>
    <div style="background-image: url('https://i.ytimg.com/vi_webp/H3cA6VSgdj8/maxresdefault.webp'); background-size: cover; background-repeat: no-repeat; height: 350px;"></div>
  </main>
</template>

<style scoped>
  header{
    background-color: #323232;
    background-image: url("https://img.pokemondb.net/design/avif/header-lg.avif");
    background-position: center top;
    background-size: 95%;
    background-repeat: no-repeat;
    height: 150px;
    padding: 2%;
    box-sizing: border-box;
  }
  #subHeader{
    width: 95%;
    height: 50%;
    position: relative;
    bottom: -85%;
    z-index: 10;
    background-color: #5c5a5a;
    color: white;
    font-weight: bold;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    border-radius: 8px;
  }
  #subHeader > div{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #subHeader > div:hover{
    background-color: #282727;
    cursor: pointer;
  }
  #subHeader > div:nth-child(1):hover{
    background-color: #282727;
    cursor: pointer;
    border-radius: 8px 0 0 8px;
  }
  #subHeader > div:nth-child(5):hover{
    background-color: #282727;
    cursor: pointer;
    border-radius: 0 8px 8px 0;
  }
</style> 