let spin
let boton

spin= document.getElementById("spin")
boton = document.querySelector("button.btn-success");
form= document.querySelector("form")

//evento
document.addEventListener("DOMContentLoaded",addSpinner())
window.onload = quitSpinner()
boton.addEventListener("click", ()=> nombre())

form.addEventListener("submit", (e) =>{
        e.preventDefault()
        nombre()
    })
//funciones
function addSpinner(){
spin.style.display = "flex"
}

function quitSpinner(){
spin.style.display= "none"
}

function nombre(){
    // console.log("nombre")
    let inp= document.getElementById("nombre")
    ele=inp.value.trim()
    console.log(ele)
    if(ele != ""){
        let h1Anterior= document.querySelector("#nombre-mensaje")
        if(h1Anterior){
            h1Anterior.remove()
        }
        let h1Nue= document.createElement("h1")
        h1Nue.id="nombre-mensaje"
        h1Nue.textContent= `Bienvenido ${ele}`
        form.insertAdjacentElement("afterend", h1Nue)
    }
    if(ele == ""){
        console.log("bacio")
        // h1nue.textContent=  ""
        h1=document.getElementById("nombre-mensaje")
        if(h1){
            h1.remove()
        }
        // form.insertAdjacentElement("afterend", h1Nue)

    }
}

function aa(){
    let nombre = document.getElementById("nombre").value.trim();
    if (nombre !== "") {
      let h1Anterior = document.querySelector("#nombre-mensaje");
      if (h1Anterior) {
        h1Anterior.remove(); // Eliminar el h1 anterior si existe
      }
      let h1Nuevo = document.createElement("h1");
      h1Nuevo.id = "nombre-mensaje";
      h1Nuevo.textContent = `Bienvenido ${nombre}`;
      form.insertAdjacentElement("afterend", h1Nuevo); // Insertar el nuevo h1 después del formulario
    }

}