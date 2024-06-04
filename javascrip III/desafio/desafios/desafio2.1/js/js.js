// variables globales
let form1 = document.forms[0];
let nombre = form1.nombre;
let correo = form1.correo;
let clave = form1.clave;
let telefono = form1.telefono;
let ciudad = form1.ciudad
let terminos = form1.terminos;
const nom = /^[a-zA-Z\s]+$/;
const corr = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const contra = /^[a-zA-Z0-9]{6,10}$/;


//funciones
function validacion() {
    if ((valiForm(nombre, "Es obligatorio llenar este parametro, Nombre y Apellido")) || !(exRegular(nom, nombre, "el campo de nombre y apellido solo admita carateres alfanumericos, sin caracteres especiales"))) {
        return false
    } else {
        if (valiForm(correo, "Es obligatorio llenar este parametro, Correo") || !(exRegular(corr, correo, "En el campo correo se necesita un formato de correo valido"))) {
            return false
        } else {
            if(valiForm(clave, "Es obligatorio llenar este parametro, Contraseña") || !(exRegular(contra, clave, "En el campo Contraseña solo admite caracteres alfanumericos y se debe de ingresar como minimo tenga 6 caracteres y como maximo 10 caracteres"))){
                return false
            }else{
                if(seleccion(ciudad, "Tiene que escojer una ciudad")){
                    return false
                }else{
                    if(check(terminos, "Debes de aceptar los terminos")){
                        return false
                    }else{
                        return true
                }
                }
            }
        }
    }
}

function valiForm(valor, mensaje) {
    if (valor.value.trim() == "") {
        alert(mensaje);
        valor.focus();
        return true
    } else {
        return false
    }
}

function exRegular(ex, variable, mensaje) {
    if (!ex.test(variable.value)) {
        alert(mensaje);
        variable.focus();
        return false;
    }
    return true;
}
function check(check,mensaje){
    if(check.checked == false){
        alert(mensaje)
        check.focus()
        return true
    }else{
        return false
    }
}
function seleccion(selec, mensaje){
    if(selec.selectedIndex == -1){
        alert(mensaje)
        selec.focus()
        return true
    }else{
        return false
    }
}