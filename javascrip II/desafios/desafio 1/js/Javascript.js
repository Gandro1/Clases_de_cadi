//variables
click1 = new String
nombop=["a1","a2","a3"]
cantiop=[1,5,10]
var nombre=new String
var cantidad=new Number
var valor = new Number
let click = new Number
var posicion = new Number
var opcion= document.getElementById("adi");
var opcion2= document.getElementById("sus")
var result
var clon = false

//nombre del producto, llamando a la funcion y asegurar que el nombre se encuentre en el arreglo
while (clon== false){
    nombre=prompt("Porfavor Ingrese el nombre del articulo")
    clon=nombop.includes(nombre)
    posicion= nombop.indexOf(nombre)
    if(clon== false){
    alert(`El nombre que ingreso "${nombre}" no se encuentra en ningun articulo, por favor ingrese uno nuevo`)
    }
}



//evento click
opcion.addEventListener("click",(event)=>{
    event.stopPropagation();
    valor=realizarAccion(click)
    while(cantidad<1){
        cantidad = parseInt(prompt("Ingrese un número positivo"))
        if(cantidad<0){
            alert("numero invalido")
        }
    }
    result=adicionaOSustrae(nombre,cantidad,valor)
    // cantiop.splice(posicion,1,result)
    resultado()
})   
opcion2.addEventListener("click",(event)=>{
    event.stopPropagation();
    valor=realizarAccion(click)
    while(cantidad<1){
        cantidad = parseInt(prompt("Ingrese un número positivo"))
        if(cantidad<0){
            alert("numero invalido")
        }
    }
    result=adicionaOSustrae(nombre,cantidad,valor)
    // cantiop.splice(posicion,1,result)
    resultado()
})   

//funcion de el evento click
function realizarAccion(accion){
    if(accion===0){
        console.log("CLick en Adicionar")
        return "Adicionar"
    }else{
        console.log("Click en Sustraer")
        return "Sustraer"
    }
}

//funcion para saber que accion tomar
function adicionaOSustrae(nom,numero,accion){
    posicion= nombop.indexOf(nom)
    if(accion==="Adicionar"){
        cantiop[posicion] += numero
    }else if(accion==="Sustraer"){
        cantiop[posicion] -= numero
    }
    // cantiop.splice(posicion,1,nu)
    return  cantiop[posicion]
}

function resultado(){
    console.log(`Nombre ${nombop[posicion]}, Numero ${cantiop[posicion]}`)
}
