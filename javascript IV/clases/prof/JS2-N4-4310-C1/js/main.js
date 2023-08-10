/**
 * DECLARACIONES DE VARIABLES, ARRAYS, OBJETOS
 */
//Arreglo de las jugadas
var jugadas = [];
//El objeto jugador
var j = new Object();
j.usuario = "";
j.correo = "";
j.telefono = "";
j.password = "";
j.score = 0;

// CONSTRUCTOR PARA EL OBJETO JUGADOR
function Jugador() {
  this.usuario = "";
  this.correo = "";
  this.password = "";
  this.telefono = "";
  this.score = 0;
}

// constructor par cada jugada
function Jugada(seleccion, jugador) {
  this.seleccion = seleccion;
  this.jugador = jugador;
}

/**
 * Crear la clase Player cuyos atributos son los mismos utilizados hasta ahora. Ademas crear metodos para:
 * -Obtener el score
 * -Aumentar el score con parametros
 * -Restar del score con parametros
 */
class Player{
  constructor(u, c, t, p){
    this.usuario = u;
    this.correo = c;
    this.telefono = t;
    this.password = p;
    this.score = 0
  }
  getScore(){
    return this.score;
  }
  aumentarScore(a){
    this.score += a;
  }
  restarScore(a){
    this.score -= a;
  }
}
 
var p = new Player();

//asignacion del objeto Modal del modal de captura de datos del jugador capitulo 1
const myModal = new bootstrap.Modal('#exampleModal');

/**
 * Declaraciones de metodos genericos
 */
function registrarUsuario(){
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')
  // let btnSubmit = document.getElementById("registrarse");
  // btnSubmit.setAttribute("data-bs-dismiss", 'modal');

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
        return;
      }

      form.classList.add('was-validated')
      //Registro del player
      p = new Player($('#formReg')[0][0].value, $('#formReg')[0][1].value, $('#formReg')[0][2].value, $('#formReg')[0][3].value);
      // j.usuario = $('#formReg')[0][0].value;
      // j.correo = $('#formReg')[0][1].value;
      // j.telefono = $('#formReg')[0][2].value
      // j.password = $('#formReg')[0][3].value;
      // console.log($('#formReg')[0][0].value);
      $("main").prepend(`<h1 class="text-info">Bienvenido ${p.usuario} </h1>`);
      myModal.hide();
      console.log(p);
      event.preventDefault();
    }, false)
  });
}

function cargarJugada(){
  if(j.usuario == ""){
    alert("Debes registrarte!");
    myModal.show();
    return;
  }else{
    if($("#jugada").val() == ""){
      alert("Debes indicar una jugada!");
    }else{
      console.log($("#jugada").val());
      let jug = $("#jugada").val();
      let player = j;
      jugadas.push(new Jugada(jug, player));
      $("#jugada").val("");
    }
  }
}

function verJugadas() {
  console.log(jugadas);
}

function mostrarScore() {
  let sc = p.getScore();
  console.log(sc);
  $("#score > h2 span").text(sc);
}

/**
 * Ejecucion de jquery
 */
$(function() {

});

