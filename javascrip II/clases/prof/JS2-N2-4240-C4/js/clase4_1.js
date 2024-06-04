// FORMAS DE DECLARAR UNA FUNCION

//La forma declarativa 
//Usando la palabra reservada function seguido del nombre y seguido de parentesis dentro de los parentesis los parametros formales (si es que los lleva) y entre llaves {} el bloque codigo (block scope).
function primeraFuncion() {
    //bloque de codigo
}

//IIFE Inmediatly Invoked Function Expression
//Primero tenemos unos parentesis que envuelven a la funcion anonima, esta requiere el uso de la palabra reservada function seguido de los parentesis de esta funcion y luego las llaves {} que indican el block scope. Despues de esto la invocacion inmediata (otra vez los parentesis pero para indicar la ejecucion)
(function (){
    console.log("IIFE ejecutado");
}) ();

//Funcion Expression
//asignar a una variable usando cualquier palabra reservada para la variable (var, let, const) la declaras y la asignas a la funcion anonima.
//-----> let variableFuncionAnonima = function () {}
//asignado un metodo a un objeto (mejor explicado mas adelante...)
//---->{
//     ...
//     propiedad: function(){},
//     ...
// }
//asignado a un callback, es decir al llamado como respuesta de un evento
// Ej: window.onload = function () {let spin = document.getElementById("spin"); spin.style.display = "none"}

//Funcion Arrow
//Es otra manera de escribir las funciones anonimas
// Se puede hacer de varias maneras
//Si no tienes ningun parametro se puede escribir asi:
// () => {}
//Si tiene un unico parametro, se puede escribir asi:
// unicoParametro => {}
// Si tiene varios parametros, se escribe asi:
// (unParam, dosParam,...) => {}


//ARREGLOS
// FOREACH
// Metodo de arreglos, recibe por parametro una funcion anonima cuyos parametros son:
// el valor en la posicion, el numero de la posicion o indice (recordar que los arrays son indice base cero), el nombre del arreglo en sí

let cap1 = "El Motorola Moto G Stylus es un nuevo integrante de la serie Moto G que incorpora un stylus para su operación. El Moto G Stylus tiene una pantalla Full HD+ de 6.4 pulgadas y está potenciado por un procesador Snapdragon 665 acompañado de 4GB de memoria RAM y 128GB de almacenamiento interno. Con una cámara triple de 48 MP + 16 MP + 2 MP en su posterior, el Moto G Stylus tiene una cámara frontal de 16 megapixels, y completa sus características con una batería de 4000 mAh con soporte para carga rápida, parlantes stereo, lector de huellas y Android 10.";

let arregloCapacidades = [4, 6, 8, 12, 16];

console.log(arregloCapacidades.find(a => a > 6));
console.log(arregloCapacidades.findIndex(a => a > 6));
console.log(arregloCapacidades.findIndex(a => a > 16));

let arrayTelefonos = ["A23: 4/128", "Poco X5 PRO: 8/256", "Infinix Hot 12: 6/128", "Hot 20: 6/128", "Moto G: 8/256", "Hot 20 I: 4/128"];

let arrayVacio = [];
console.log(arrayVacio.every(e => e.length > 1));

// debugger;

let telefonosRequeridos = arrayTelefonos.filter(a => a.includes("8/256"));
console.log(arrayTelefonos.some(a => a.includes("2/64")));
console.log(arrayTelefonos.every(e => e.length < 25));
console.log(telefonosRequeridos);

let dobleCapacidades = arregloCapacidades.map(k => k * 2);
console.log(dobleCapacidades);