let nombre = [ "Hugo","Martín","Lucas","Mateo","Leo","Daniel","Alejandro","Pablo","Manuel","Álvaro","Adrián","David","Mario","Enzo","Diego","Marcos","Izan","Javier","Marco","Álex","Bruno","Oliver","Miguel","Thiago","Antonio","Marc","Carlos","Ángel","Juan","Gonzalo"]
let costo = 8
let ganancia = []
let suma = 0
for (let i = 0; i < 16; i++) {
    let empreza = ventas(nombre,i)
    ganancia.push(empreza) 
}

function ventas(arr,index){
    let nombreAleatorio = Math.floor(Math.random() * arr.length)
    //crear el li y agregarle su id unico
    const lista = document.createElement("li")
    lista.id= `li-N°${index}`
    let kilos = kilogramos();
    let pagar = kilos*costo;
    let descuento = (pagar*15)/100
    //crear y agregar h5 en el li
    
        const h5 = document.createElement("h5")
        
        // agregandole ids a los h5 de los li
         // Crear h5 en el li
        const nomb = document.createElement("h3");
        nomb.id = `li-${index}-h5-1`;
        const compra = document.createElement("h3");
        compra.id = `li-${index}-h5-2`;
        const total = document.createElement("h3");
        total.id = `li-${index}-h5-3`;

        // datos a mostrar del cliente
        nomb.textContent = `Nombre del cliente: ${nombre[nombreAleatorio]}`;
        if (kilos > 10) {
            compra.textContent = `${nombre[nombreAleatorio]} compró ${kilos}KG y se ha ganado el descuento de 15%`;
            total.textContent = `Total a pagar ${pagar - descuento}$`;
        } else {
            compra.textContent = `${nombre[nombreAleatorio]} compró ${kilos}KG de carne`;
            total.textContent = `Total a pagar ${pagar}$`;
        }

        lista.appendChild(nomb);
        lista.appendChild(compra);
        lista.appendChild(total);
        // Agregando la lista al document
        document.getElementById("contenedor").appendChild(lista);

        let totalDEmpresa;
        if (kilos > 10) {
            totalDEmpresa = pagar - descuento;
        } else {
            totalDEmpresa = pagar;
        }
    
        return totalDEmpresa;
    }

function kilogramos(){
    let kilos= Math.floor(Math.random() * 50)
    return kilos
}

for (let i = 0; i < ganancia.length; i++) {
    suma += ganancia[i];
}
let primerHijo = document.body.firstChild;
let todo = document.createElement("h1")
todo.textContent= `Total para la empresa ${suma}`

document.body.insertBefore(todo, primerHijo);