let nombres = ["articulo1", "articulo2", "articulo3"];
let cantidad = [1, 5, 10];

// Paso 3: Definir la función adicionaOSustrae
function adicionaOSustrae(nombre, cantidadParametro, accion) {
    // Buscar el índice del nombre en el arreglo nombres
    let indice = nombres.indexOf(nombre);
    
    // Verificar si el nombre existe en el arreglo nombres
    if (indice !== -1) {
        // Determinar si se va a adicionar o sustraer
        if (accion === "adicionar") {
            cantidad[indice] += cantidadParametro;
        } else if (accion === "sustraer") {
            cantidad[indice] -= cantidadParametro;
        } else {
            console.log("Acción no válida");
        }
    } else {
        console.log("El nombre no existe en el arreglo");
    }
}

// Paso 4: Definir la función realizarAccion
function realizarAccion(control) {
    // Solicitar el nombre del artículo y la cantidad
    let nombre = prompt("Ingrese el nombre del artículo:");
    let cantidadParametro = parseInt(prompt("Ingrese la cantidad:"));

    // Verificar si el control es "adicionar" o "sustraer"
    if (control === "adicionar" || control === "sustraer") {
        // Llamar a la función adicionaOSustrae con los parámetros correspondientes
        adicionaOSustrae(nombre, cantidadParametro, control);
    } else {
        console.log("Acción no válida");
    }
}

// Paso 5: Mostrar información de los artículos y su cantidad al hacer clic en el div padre
function mostrarInformacion() {
    for (let i = 0; i < nombres.length; i++) {
        alert("nombre: " + nombres[i] + "; cantidad: " + cantidad[i]);
    }
}

// Obtener referencia al div padre
let divPadre = document.getElementById("divPadre");

// Agregar un event listener al div padre para mostrar la información al hacer clic
divPadre.addEventListener("click", mostrarInformacion);

// Prevenir burbujeo de eventos al hacer clic en los divs hijo
let divAdicionar = document.getElementById("adi");
let divSustraer = document.getElementById("sus");

divAdicionar.addEventListener("click", function(event) {
    event.stopPropagation();
    realizarAccion("adicionar");
});

divSustraer.addEventListener("click", function(event) {
    event.stopPropagation();
    realizarAccion("sustraer");
});