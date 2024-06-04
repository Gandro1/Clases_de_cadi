var colores = ["white", "blue", "red", "yellow", "green", "violet", "royalblue", "purple", "orange", "magenta", "lime", "aqua", "black", "palegreen", "lightgreen"]
var a="";
var b="";
var c="";
var d="";
var e="";
var indice1=0;
var indice2=0;
var indice3=0;
var indice4=0;
var indice5=0;




function irArriba() {
    confirm("Desea ir arriba?")
    if (confirm) {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }

}


function cambiarFondo(colores){
    var colores = ["white", "blue", "red", "yellow", "green", "violet", "royalblue", "purple", "orange", "magenta", "lime", "aqua", "black", "palegreen", "lightgreen"]
     indice1=Math.floor((Math.random() * 15));
     indice2=Math.floor((Math.random() * 15));
     indice3=Math.floor((Math.random() * 15));
     indice4=Math.floor((Math.random() * 15));
     indice5=Math.floor((Math.random() * 15));

    a=colores[indice1];
    b=colores[indice2];
    c=colores[indice3];
    d=colores[indice4];
    e=colores[indice5];
    //console.log(a)
    //console.log(b)
    //console.log(c)
    //console.log(d)
    //console.log(e)

    document.body.style.background=`linear-gradient(to right bottom, ${a},${b},${c},${d},${e})`;
}
cambiarFondo(colores);

function cambiarTitulo(){
    let respuesta=(prompt("Desea cambiar el titulo? (SI/NO)")).toUpperCase();
    if(respuesta=="SI"){
        nuevoTitulo=prompt("Introduzca el nuevo titulo")
        document.title=nuevoTitulo;
    }
        
    
    

}


