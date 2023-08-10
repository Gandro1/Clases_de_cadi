<script setup>
import { reactive,ref } from 'vue';
import { computed } from 'vue';

//variables
const ytDatos = reactive({
  cliente: {
    nombre: "CADI F1 C.A.",
    nroSuscriptores: ref(4.59),
    nroVideos: 170,
    descripcionBreve: "Academia de Sofwarare. Entrenamos perdsonas en el uso de h...",
    imgLogo: {
      primero: [
        "opciones.svg",
        "Logo-youtube.svg"
      ],
      segundo:[
        "lupa.svg",
        "micro.svg"
      ],
      tercero:[
        "Camara.svg",
        "campana.svg",
        "sora_y_shiro.jpg"
      ],
      cuarto:[
        "Inicio.svg",
        "short.svg",
        "Suscripciones.svg",
        "Mi-biblioteca.svg"
      ],
      quinto:[
        "cadif1.jpg",
        "Instagram.avif",
        "Facebook.png"
      ]
    }
  }
});
let imagen1 = ytDatos.cliente.imgLogo.primero;
let imagen2 = ytDatos.cliente.imgLogo.tercero;
let imagen3 = ytDatos.cliente.imgLogo.quinto;
const nombre = ytDatos.cliente.nombre;
const nroSuscriptores= ytDatos.cliente.nroSuscriptores
const nroVideos= ytDatos.cliente.nroVideos
const descripcionBreve= ytDatos.cliente.descripcionBreve
//let suscripcionn = "Suscribirce"
const suscripcion = ref(false);
const noSuscrito = "Suscribirme"
const siSuscrito = "Suscrito"
const Baner = "Baner"
const busqueda = ref('');


//FIN DE VARIABLES//

//FUNCIONES 
function Tamanio(index) {
  return index === 0 ? 'iconospeque' : 'iconos';
}
function sora(index) {
  return index === 2 ? 'sora' : 'iconospeque icon';
}
function toggleSubscription() {
  suscripcion.value = !suscripcion.value;
}

function clickI(event, index) {
  event.stopPropagation();

  if (index === 0) {
    clickB('Cadi f1 c.a');
  } else if (index === 1) {
    clickB('Instagram');
  } else if (index === 2) {
    clickB('Facebook');
  }
}
function clickB(e) {
  alert("Has dado Click en el " + e);
  // e.stopPropagation();
}
var estiloNombre = computed(() => ({
  textTransform: suscripcion.value ? 'uppercase' : 'initial',
}));

</script>

<template>
  <header>
    <div id="contenedor">
      <div>
        <img  v-for="(image, index) in imagen1" :src="`/${image}`" :key="index" :class="Tamanio(index)" alt="">
      </div>
      <div>
        <div class="search-container">
          <input class="search-input" type="Buscar" placeholder="Buscar">
          <button class="search-button">
            <img   :src="ytDatos.cliente.imgLogo.segundo[0]" :key="index" class="iconospeque" alt="">
          </button>
          <img   :src="ytDatos.cliente.imgLogo.segundo[1]" :key="index" class="iconospeque ico" alt="">
        </div>
      </div>
      <div>
        <img  v-for="(image, index) in imagen2" :src="`/${image}`" :key="index" :class="sora(index)" alt="">
      </div>
    </div>
  </header>
  <body>
    <nav class="body">
      <div class="lateral">
        <div class="img">
          <img   :src="ytDatos.cliente.imgLogo.cuarto[0]" :key="index" class=" iconosl" alt="">
          
        </div>
        <div class="label"><span>Inicio</span></div>
        <div>
          <img   :src="ytDatos.cliente.imgLogo.cuarto[1]" :key="index" class=" iconosl" alt="">
        </div>
        <div class="label"><span>Short</span></div>
        <div>
          <img   :src="ytDatos.cliente.imgLogo.cuarto[2]" :key="index" class=" iconosl" alt="">
        </div>
        <div class="label"><span>Suscripciones</span></div>
        <div>
          <img   :src="ytDatos.cliente.imgLogo.cuarto[3]" :key="index" class=" iconosl" alt="">
        </div>
        <div class="label"><span>Mi Biblioteca</span></div>
      </div>

      <div>
        <div @click="clickB('Baner')" class="banerr">
          <div></div>
          <div></div>
          <div></div>
          <div class="enlacess">
            <img v-for="(image, index) in imagen3" :src="`/${image}`" :key="index" @click="clickI($event,index)" class="enlaces" alt="">
          </div>
        </div>
        <div class="container">
        <div><img src="cadif1.jpg" class="sora" alt="" style="height: 200px; width:200px"></div>
        <div class="datos">
          <div>
            <h1 :style="estiloNombre">{{ nombre }}</h1>
           </div>
           <div v-if="suscripcion"><h3 :style="estiloNombre">@cadif1AcademiaSofware {{ nroSuscriptores }} k Suscriptores {{ nroVideos }} Videos</h3></div>
           <div v-else><h3 :style="estiloNombre"><i>@cadif1AcademiaSofware {{ nroSuscriptores }} k Suscriptores {{ nroVideos }} Videos</i></h3></div>
            <div :style="estiloNombre" v-if="suscripcion"><h3>{{ nombre }} {{ descripcionBreve }}</h3></div>
            <div v-else><h3><i>{{ nombre }} {{ descripcionBreve }}</i></h3></div>
          
        </div>
          <div class="subscription-container">
             <button @click="toggleSubscription" id="button" :class="{ subscribed: isSubscribed }">
              <img v-show="suscripcion" src="campana.svg" alt="">
               <span v-if="suscripcion">{{ siSuscrito }}</span>
               <span v-else>{{ noSuscrito }}</span>
              </button>
            </div>
        </div>
      </div>

      <div class="direccionesEnlaces">
        <div><img class="iconospeque" src="flechaIsquierda.svg" alt=""></div>
        <div id="contenedor" class="direcciones">
          <li>VIDEO</li>
          <li>SHORTS</li>
          <li>EN DIRECTO</li>
          <li>LISTAS</li>
          <li>COMUNIDAD</li>
          <li>CANALES</li>
          <li>INFORMACION</li>
        </div>
        <div class="search-container con">
          <input v-model="busqueda" type="Buscar" placeholder="Buscar" class="search-input">
        </div>
        <div><img src="flechaDerecha.svg" class="iconospeque" alt=""></div>
      </div>
      
    </nav>
    <div>
      <h1>Su Busqueda : {{ busqueda }}</h1>
    </div>
  </body>
  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
/* CONTENEDORES */
.con{
  margin-left: 50px !important;
  margin-top: -10px !important;
}
.subscription-container {
  text-align: center;
  margin-top: 50px;
}
.direcciones>li {
  margin-left: 100px;
 width: 100px;
 cursor: pointer;
}
.direccionesEnlaces{
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  width: 100%;
}
.banerr{
  display: grid;
  grid-template-columns: 70% auto;
  grid-template-rows: 70% auto;
  background-image: url(../public/banerdecadi.jpg);
  height: 300px;
  width: 100%;
}
.enlacess{
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: end;

}

.container{
  display: grid;
  grid-template-columns: 20% auto 20%;
  margin-left: 100px;
}
.body{
 display: grid;
 grid-template-columns: 10% auto
}
.lateral{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  height: 100%;
}
#contenedor{
display: flex;
justify-content: space-between;
}
.img{
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.label {
  font-size: 14px;
  color: #333;
  margin-top: 0;
  margin-bottom: 5px;
}
.datos{
  margin-left: 50px;
  margin-top: 50px;
}
/* ICONOS */
.enlaces{
  height: 30px;
  width: 30px;
  margin-right: 20px;
  border-radius: 50%;
  cursor: pointer;
}
.iconos{
  margin-left: 30px;
  height: 80px;
  width: 130px;
  cursor: pointer;
}
.iconosl{
  /* margin-left: 30px; */
  height: 40px;
  width: 50px;
  cursor: pointer;
  margin-bottom: 7px;
}
.icon{
  margin-bottom: 10px !important;
}
.ico{
  margin-bottom: 0 !important;
}
.icoo{
  margin-bottom: 0 !important;
  margin-top: 20px;
}
.iconospeque{
  margin-bottom: 24px;
  margin-left: 30px;
  height: 30px;
  width: 40px;
}

.sora{
  margin-top: 15px;
  margin-left: 5px;
  border-radius: 50%;
  width: 60px;
  height: 50px;
  
}
/* FIN DE ICONOS */

/* estilos del input */
.search-container {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  height: 20px;
  margin: 0 auto;
  margin-top: 18px;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 50px;
}

.search-input {
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  outline: none;
}

.search-input::placeholder {
  color: #ccc;
}

.search-button {
  margin-left: 10px;
  padding: 5px 5px;
  font-size: 16px;
  height: 40px;
  background-color: transparent;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.search-button:hover {
  background-color: #404449;
}

.search-button:focus {
  outline: none;
}
/* OTROS ESTILOS */
#button{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background-color: #2C2C2C;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
li{
  list-style: none;
  
}
span{
  color: #333;
}
h3{
  color: #404449;
}
</style>
