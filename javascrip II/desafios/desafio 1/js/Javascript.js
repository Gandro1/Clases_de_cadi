<<<<<<< HEAD
click1 = new String
nombop=["articulo1","articulo2","articulo3"]
cantiop=[1,5,10]
var nombre=new String
var cantidad=new Number
var valor = new Number
var posicion = new Number
var opcion= document.getElementById("adi");
var opcion2= document.getElementById("sus")
var result
var clon = false
nombre=prompt("Porfavor ingrece el nombre del articulo")

// console.log(clon)

opcion.onclick = clickop;
opcion2.onclick = clickop2;
function clickop(){
opcion=document.getElementById("adi")
alert("El usuario dio click a Adiciona")
//stopPropagation()
}
function clickop2(){
opcion2=document.getElementById("sus")
alert("El ususario dio Click a sustraer")
//stopPropagation()
}

if(opcion.onclick){
click1="Adicion"
}else{if(opcion2.onclick){
click1="Sustraer"
}}
console.log(click1)

function adicionaosustrae(a,b,c){
if(click1=="Adicion"){
clon=nombop.includes(nombre)
if (clon==true){
posicion=nombop.indexOf(nombre)
}
valor=posicion+cantiop[posicion]
cantiop.splice(posicion,1,valor)
return cantiop
}else{if(click1=="sus"){
clon=nombop.includes(nombre)
if (clon==true){
posicion=nombop.indexOf(nombre)
}
valor=posicion-cantiop[posicion]
cantiop.splice(posicion,1,valor)
return cantiop
}}
}
adicionaosustrae(nombop,cantiop,click1)
=======
click1 = new String
nombop=["articulo1","articulo2","articulo3"]
cantiop=[1,5,10]
var nombre=new String
var cantidad=new Number
var valor = new Number
var posicion = new Number
var opcion= document.getElementById("adi");
var opcion2= document.getElementById("sus")
var result
var clon = false
nombre=prompt("Porfavor ingrece el nombre del articulo")

// console.log(clon)

opcion.onclick = clickop;
opcion2.onclick = clickop2;
function clickop(){
opcion=document.getElementById("adi")
alert("El usuario dio click a Adiciona")
//stopPropagation()
}
function clickop2(){
opcion2=document.getElementById("sus")
alert("El ususario dio Click a sustraer")
//stopPropagation()
}

if(opcion.onclick){
click1="Adicion"
}else{if(opcion2.onclick){
click1="Sustraer"
}}
console.log(click1)

function adicionaosustrae(a,b,c){
if(click1=="Adicion"){
clon=nombop.includes(nombre)
if (clon==true){
posicion=nombop.indexOf(nombre)
}
valor=posicion+cantiop[posicion]
cantiop.splice(posicion,1,valor)
return cantiop
}else{if(click1=="sus"){
clon=nombop.includes(nombre)
if (clon==true){
posicion=nombop.indexOf(nombre)
}
valor=posicion-cantiop[posicion]
cantiop.splice(posicion,1,valor)
return cantiop
}}
}
adicionaosustrae(nombop,cantiop,click1)
>>>>>>> eeedd12 (Primer commit)
console.log(adicionaosustrae(nombop,cantiop,click1))