let scrolll
let bodyy
//variables para los colores
const colores = ["#FF5733", "#FFBD33", "#33FF77", "#33A7FF", "#3333FF", "#DD33FF", "#FF33A7", "#FF3333", "#33FFBD", "#77FF33", "#A7FF33", "#FFD933", "#FF7733", "#33FFD9", "#9933FF"];
let ini
let bton

//accediendo a los elementos
bodyy= document.querySelectorAll("body")
ini = document.querySelector(`nav ul li:first-child`)
scrolll= document.getElementById("btnSubir")
let headerr= document.querySelector("header")
bton = document.getElementById("btnTitle")
let titulo= document.querySelector("h1")
//eventos
scrolll.addEventListener("click",(e)=>{
    e.stopPropagation()
    if(confirm("¿Decea ir arriba?")){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
})
document.body.addEventListener("click",(e)=>{
    e.stopPropagation();
    cambiarFondo();
})

ini.addEventListener("click", (e)=>{
    e.stopPropagation()
    let ventanaAn= window.innerWidth / 2
    let ventanaLa= window.innerHeight / 2
    window.open("./login.html","",`width=${ventanaAn},height=${ventanaLa}`)
})

bton.addEventListener("click",(e)=>{
    e.stopPropagation()
    let valor 
    if(valor=  prompt("Ingrece el nuevo titulo")){
        titulo.textContent= valor
    }else{
        titulo
    }
})

headerr.addEventListener("click", (e)=> e.stopPropagation())

//Funciones

function colorAleatorio(){
    return colores[Math.floor(Math.random() * colores.length)]
}


function cambiarFondo(){
    console.log("funcion cambiarfondo")
    const a = colorAleatorio();
    const b = colorAleatorio();
    const c = colorAleatorio();
    const d = colorAleatorio();
    const e = colorAleatorio();
    const gradient = `linear-gradient(to right bottom, ${a}, ${b}, ${c}, ${d}, ${e})`;
    document.body.style.background = gradient
}