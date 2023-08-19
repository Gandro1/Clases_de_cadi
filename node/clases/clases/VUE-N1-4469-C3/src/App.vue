<script setup>
  import Productos from "./components/Productos.vue";
  //Importaciones dentro de setup
  import { ref, unref } from "vue";

  let info = ref('Informacion!!!')
  let cantidadPokemon = ref(0)

  let alternarComponente = ref(true)

  function desmontarComponente() {
    alternarComponente.value = !alternarComponente.value

    if(!alternarComponente.value){
      let instanciaComponente = unref(alternarComponente)
      instanciaComponente.unmount();
    }
  }

  //variables reactivas del formulario
  let nombre = ref('')
  let email = ref('')
  let preferencias = ref([])
  let sexo = ref('Masculino')
  let ciudad = ref('')

  let logueado = ref(false)

/**
 * Logs a message to the console.
 * @param {Event} e - The event object.
 * @param {string} info - The information to log.
 */
function deseoLoguear(e, info) {
  console.log(`Deseo ${info}`);
  if (e) {
    console.log(e.target.tagName);
  }
}
/**
 * Display an alert message and log the target tag name if provided.
 * @param {string} msg - The message to display in the alert.
 * @param {Event} e - The event object.
 */
function mecanicas(msg, e) {
  alert(msg);
  if (e) {
    console.log(e.target.tagName);
  }
}
function respuestaSubHeader() {
  alert(info.value)
}
function evitarCopiar(e) {
  if(e.ctrlKey && e.key === 'c') {
    alert('No puedes copiar!!!')
    e.preventDefault();
  }
}


// watchEffect(async ()=>{
//   const resp = await fetch('
// https://jsonplaceholder.typicode.com/users
// ')
//   .then(resp=>resp.json())
//   usuarios.value = await resp
// }) 
</script>

<template>
  <header>
   <div @click="respuestaSubHeader" id="subHeader">
    <div @click.stop.once="cantidadPokemon++">Cargar Pokemons</div>
    <div @click.stop="mecanicas('deseo saber de las mecanicas')">Game mechanics</div>
    <div>Pokemon games</div>
    <div @click.stop="deseoLoguear">Login/Register</div>
    <div @click.stop="">
      <form @submit.prevent action="" method="get">
        <input @keydown="evitarCopiar" type="text" name="search" id="search" placeholder="Busqueda aqui...">
        <input type="submit" value="Buscar">
      </form>
    </div>
   </div>
  </header>

  <main>
    <p>Cantidad de Pokemones: {{ cantidadPokemon }}</p>
    <input type="text">
    <div id="register">
      <form @submit.prevent action="" method="get">
        <h2>Login</h2>
        <div>
          <label for="name">Nombre</label>
          <input type="text" name="name" placeholder="copia tu nombre aqui" v-model="nombre">
        </div>
        <div>
          <label for="password">Contraseña</label>
          <input type="password" name="email" placeholder="copia tu contraseña aqui">
        </div>
        <div>
          <h3 for="preferencias">Preferencias:</h3>
          <label for="fire">Fire</label>
          <input type="checkbox" name="fire" id="fire" value="fire" v-model="preferencias">
          <label for="water">Water</label>
          <input type="checkbox" name="water" id="water" value="water" v-model="preferencias">
          <label for="electric">Electric</label>
          <input type="checkbox" name="electric" id="electric" value="electric" v-model="preferencias">
        </div>
        <div>
          <p for="sexo">Sexo: </p>
          <label for="male">Masculino</label>
          <input type="radio" name="sexo" id="male" value="Masculino" checked v-model="sexo">
          <label for="female">Femenino</label>
          <input type="radio" name="sexo" id="female" value="Femenino" v-model="sexo">
        </div>
        <div>
          <p>Ciudad: {{ ciudad }}</p>
          <select name="ciudad" id="ciudad" v-model="ciudad">
            <option value="">Seleccione la ciudad:</option>
            <option value="Buenos Aires">Buenos Aires</option>
            <option value="Cordoba">Cordoba</option>
            <option value="Mendoza">Mendoza</option>
            <option value="Rosario">Rosario</option>
            <option value="Salta">Salta</option>
            <option value="San Juan">San Juan</option>
            <option value="San Luis">San Luis</option>
            <option value="Santa Fe">Santa Fe</option>
            <option value="Tucuman">Tucuman</option>
            <option value="Tierra del Fuego">Tierra del Fuego</option>
            <option value="Corrientes">Corrientes</option>
            <option value="Misiones">Misiones</option>
            <option value="Neuquen">Neuquen</option>
          </select>
        </div>
        <input @click="logueado = !logueado" type="submit" value="Enviar">
      </form>
    </div>
    <div v-if="logueado">
      <h1>Bienvenido {{ nombre }}</h1>
      <h2 style="font-style: italic;">Sexo: {{ sexo }}</h2>
      <h2>Ciudad: {{ ciudad }}</h2>
      <h2>Tus preferencias de pokemon son: {{ preferencias }}</h2>
    </div>
    <div v-else>
      <h1>Inicia sesion para la experiencia COMPLETA!!!</h1>
    </div>
    <div v-show="logueado">
      <h1>Controlado por v-show</h1>
    </div>
    <div style="background-image: url('https://i.ytimg.com/vi_webp/H3cA6VSgdj8/maxresdefault.webp'); background-size: 80% 100%; background-position: center; background-repeat: no-repeat; height: 350px;"></div>
    <hr> <hr> <hr> 
    <!-- Importacion del componente productos -->
    <button @click="desmontarComponente">Desmontar componente</button>
    <div v-if="alternarComponente">
      <Productos />
    </div>
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
  #register{
    display: flex;
    justify-content: center;
    background-color: antiquewhite;
    padding: 2%;
    width: 30%;
    margin: 0 auto;
    border: #282727 solid 2px;
    border-radius: 8px;

  }
  #register form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
