<<<<<<< HEAD
var nombmedi=[]
var preciomed=[]
var precio= new Number
var posicion=new Number
var nombre= new String
var pregunta= new String
var i= 0
var clon = false
do {
    i++ 
    nombre=prompt(`Porfavor ingrese el nombre del medicamento numero:${i}`)
    clon=nombmedi.includes(nombre)
    // console.log(clon)
    if (clon==true){
        posicion=nombmedi.indexOf(nombre)
        pregunta=prompt(`Ya ingreso un medicamento con ese nombre, tiene como precio: ${preciomed[posicion]}
         ¿Quiere cambiar el precio del medicamento? por favor responda Si o No`)
         if(pregunta=="si"||pregunta=="SI"||pregunta=="Si"||pregunta=="sI"){
            precio=prompt("Re-ingrese el precio del medicamento")
            preciomed.splice(posicion,1,precio)
         }
    }
    if(clon==false){
        precio=prompt("Ingrese el precio del producto")
        nombmedi.push(nombre)
        preciomed.push(precio)
    }
    salir=prompt("¿Desea Registrar otra medicina? por favor responda Si o No")
    if(salir=="no"||salir=="No"||salir=="nO"||salir=="NO"){
        salir=="no"
    }else{
        salir=="s"
    }
} while (!(salir=="no"));

for (let i = 0; i < nombmedi.length; i++) {
    console.log(`Nombre ${i+1}° medicamento:${nombmedi[i]}, que tiene como precio: ${preciomed[i]}`)
    console.log("")
    
=======
var nombmedi=[]
var preciomed=[]
var precio= new Number
var posicion=new Number
var nombre= new String
var pregunta= new String
var i= 0
var clon = false
do {
    i++ 
    nombre=prompt(`Porfavor ingrese el nombre del medicamento numero:${i}`)
    clon=nombmedi.includes(nombre)
    // console.log(clon)
    if (clon==true){
        posicion=nombmedi.indexOf(nombre)
        pregunta=prompt(`Ya ingreso un medicamento con ese nombre, tiene como precio: ${preciomed[posicion]}
         ¿Quiere cambiar el precio del medicamento? por favor responda Si o No`)
         if(pregunta=="si"||pregunta=="SI"||pregunta=="Si"||pregunta=="sI"){
            precio=prompt("Re-ingrese el precio del medicamento")
            preciomed.splice(posicion,1,precio)
         }
    }
    if(clon==false){
        precio=prompt("Ingrese el precio del producto")
        nombmedi.push(nombre)
        preciomed.push(precio)
    }
    salir=prompt("¿Desea Registrar otra medicina? por favor responda Si o No")
    if(salir=="no"||salir=="No"||salir=="nO"||salir=="NO"){
        salir=="no"
    }else{
        salir=="s"
    }
} while (!(salir=="no"));

for (let i = 0; i < nombmedi.length; i++) {
    console.log(`Nombre ${i+1}° medicamento:${nombmedi[i]}, que tiene como precio: ${preciomed[i]}`)
    console.log("")
    
>>>>>>> eeedd12 (Primer commit)
}