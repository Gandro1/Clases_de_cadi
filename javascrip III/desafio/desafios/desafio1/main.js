// variables
let ci = document.getElementById("cedula")
let nom = document.getElementById("nombre")
let tl = document.getElementById("telefono")
let direc = document.getElementById("direccion")
let cliente = document.querySelector("ul")
let codigo = document.getElementById("codig")
let descripcion = document.getElementById("descripcion")
let precio = document.getElementById("precio")
let cantidad = document.getElementById("cantidad")
let botones = document.querySelectorAll("button")
let reclient = botones[0]
let reVenta = botones[1]


//eventos-------------------------------------------------
reclient.addEventListener("click", () => client())
reVenta.addEventListener("click", () => venta())

// funciones----------------------------------------------
function client(){
    console.log("click a cliente")
    //objeto para la evaluacion del cliente
    let variables ={
        "Cedula":ci.value,
        "Nombre":nom.value,
        "Telefono":tl.value,
        "Direccion":direc.value
    }
    // verifico si tiene algun campo vacio
    let campVacios=Object.values(variables).some(valor => valor.trim() === "")
    if(campVacios){
        alert("Llena todos los campos del formulario")
        return
    }
    //ciclo para crear y llenar los h2 que ingrece el cliente
    for (let key in variables) {
        if(variables.hasOwnProperty(key)){
            let datos = document.createElement("h2");
                datos.id="datoss"
                datos.textContent += `${key}: ${variables[key]}`
                cliente.appendChild(datos)
            }
        }
        
}

function venta(){
    let tabla = document.querySelector("table");
    let filaa= false
    let arrVentas=[]
    console.log("entro a ventas")
    //Objeto de ventas
    let ven ={
        "Codigo": codigo.value,
        "Descripcion": descripcion.value,
        "Precio": precio.value,
        "Cantidad": cantidad.value
    }
    // verifico si tiene algun campo vacio
    let campVacios=Object.values(ven).some(valor => valor.trim() === "")
    if(campVacios){
        alert("Llena todos los campos del formulario")
        return
    }
    //Ciclo para agregar los datos que ingrecen
    for (const key in ven) {
        if (ven.hasOwnProperty(key)) {
            arrVentas.push(ven[key])
        }
    }
    console.log(arrVentas)

    // desafio de las tablas
    //variables
    let tbody = tabla.querySelector("tbody")
    let celda = tbody.querySelectorAll("td");
    let primeraFila = tabla.querySelector("tbody tr:first-child")
    let celdaPrimeraFila = primeraFila.querySelectorAll("td")
    let algunaCelfaVacia = false //verificar si alguna celda esta Vacia

    //llenando las celdas del tbody
    celdaPrimeraFila.forEach(celda =>{
        if(celda.innerText.trim() === ""){
            algunaCelfaVacia = true
        }
    })
    if(algunaCelfaVacia){
        celda.forEach((celdas, index) => {
            celdas.innerText = arrVentas[index];
        });
    }else{
        // crear nueva Fila
        let newFila = tbody.insertRow(-1);            
        //creacion de la celda
        for (let l = 0; l < arrVentas.length; l++) {
                let newCelda = newFila.insertCell(-1)    
            newCelda.innerText= arrVentas[l]   
    }
    }

            



    //recorriendo las celdas
    for (let e = 0; e < tabla.rows.length; e++) {
        let fila = tabla.rows[e]
        for (let c = 0; c < fila.cells.length; c++) {
            let valor = fila.cells[c].innerText;
            console.log(`Valor en la fila ${e}, Celda ${c}: ${valor}`)
            
        }
        
    }
    
}

