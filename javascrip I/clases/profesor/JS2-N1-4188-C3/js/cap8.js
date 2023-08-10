<<<<<<< HEAD
console.warn("CAPITULO 8");
var edad;
var sexo;
var descuento;
var precio;
var precioBs;
var tasaCambio;
var montoAPagar;

if(confirm("Desea comprar una entrada?")){
    precio = 17;
    tasaCambio = prompt("Ingrese la tasa de cambio");
    //solicitud de la tasa de cambio
    console.log(`tasa cambio al momento de consultar al usuario: ${tasaCambio}`);
    if(tasaCambio == ""){
        tasaCambio = 0;
    }else{
        if(tasaCambio == null){
            tasaCambio = 0;
        }
    }
    console.log(`tasa cambio al validar: ${tasaCambio}`);
    //  CONVERTIR EL STRING DEL PROMPT EN NUMBER
    //para convertir un string en number, existen varias funciones, dejaremos una de ellas
    // parsefloat(param); donde parametro es el string que desas convertir
    tasaCambio = parseFloat(tasaCambio);
    console.log(`tasa cambio al convertirlo en number: ${tasaCambio}`);
    
    precioBs = precio * tasaCambio;
    
    sexo = prompt("Ingrese su sexo");
    //solicitud de la tasa de cambio
    console.log(`sexo al momento de consultar al usuario: ${sexo}`);
    if(sexo == ""){
        sexo = "M";
    }else{
        if(sexo == null){
            sexo = "M";
        }
    }
    console.log(`sexo al validar: ${sexo}`);
    
    // edad = Math.round(Math.random() * 75);
    // console.log("edad: " + edad);
    
    edad = prompt("Ingrese su edad");
    //solicitud de la tasa de cambio
    console.log(`edad al momento de consultar al usuario: ${edad}`);
    if(edad == ""){
        edad = 0;
    }else{
        if(edad == null){
            edad = 0;
        }
    }
    console.log(`edad al validar: ${edad}`);
    
    if(edad <= 2){
       descuento = 100;
    }else{
        if(edad <= 6){
            descuento = 50;
        }else{
            if(edad <= 15){
                descuento = 25;
            }else{
                if(edad >= 55){
                    if(sexo == "F"){
                        descuento = 30;
                    }
                }else{
                    if(edad >= 60){
                        if(sexo == "M"){
                            descuento = 30;
                        }
                    }else{
                        descuento = 0;
                    }
                }
            }
        }
    }
    
    console.log("descuento: " + descuento);

    //calculo del monto a pagar
    montoAPagar = precioBs - (precioBs * descuento / 100);
    console.log(`El monto a pagar es: ${montoAPagar}`);
    alert(`El monto a pagar es: ${montoAPagar}`);
}else{
    alert("Gracias por su visita");
}


=======
console.warn("CAPITULO 8");
var edad;
var sexo;
var descuento;
var precio;
var precioBs;
var tasaCambio;
var montoAPagar;

if(confirm("Desea comprar una entrada?")){
    precio = 17;
    tasaCambio = prompt("Ingrese la tasa de cambio");
    //solicitud de la tasa de cambio
    console.log(`tasa cambio al momento de consultar al usuario: ${tasaCambio}`);
    if(tasaCambio == ""){
        tasaCambio = 0;
    }else{
        if(tasaCambio == null){
            tasaCambio = 0;
        }
    }
    console.log(`tasa cambio al validar: ${tasaCambio}`);
    //  CONVERTIR EL STRING DEL PROMPT EN NUMBER
    //para convertir un string en number, existen varias funciones, dejaremos una de ellas
    // parsefloat(param); donde parametro es el string que desas convertir
    tasaCambio = parseFloat(tasaCambio);
    console.log(`tasa cambio al convertirlo en number: ${tasaCambio}`);
    
    precioBs = precio * tasaCambio;
    
    sexo = prompt("Ingrese su sexo");
    //solicitud de la tasa de cambio
    console.log(`sexo al momento de consultar al usuario: ${sexo}`);
    if(sexo == ""){
        sexo = "M";
    }else{
        if(sexo == null){
            sexo = "M";
        }
    }
    console.log(`sexo al validar: ${sexo}`);
    
    // edad = Math.round(Math.random() * 75);
    // console.log("edad: " + edad);
    
    edad = prompt("Ingrese su edad");
    //solicitud de la tasa de cambio
    console.log(`edad al momento de consultar al usuario: ${edad}`);
    if(edad == ""){
        edad = 0;
    }else{
        if(edad == null){
            edad = 0;
        }
    }
    console.log(`edad al validar: ${edad}`);
    
    if(edad <= 2){
       descuento = 100;
    }else{
        if(edad <= 6){
            descuento = 50;
        }else{
            if(edad <= 15){
                descuento = 25;
            }else{
                if(edad >= 55){
                    if(sexo == "F"){
                        descuento = 30;
                    }
                }else{
                    if(edad >= 60){
                        if(sexo == "M"){
                            descuento = 30;
                        }
                    }else{
                        descuento = 0;
                    }
                }
            }
        }
    }
    
    console.log("descuento: " + descuento);

    //calculo del monto a pagar
    montoAPagar = precioBs - (precioBs * descuento / 100);
    console.log(`El monto a pagar es: ${montoAPagar}`);
    alert(`El monto a pagar es: ${montoAPagar}`);
}else{
    alert("Gracias por su visita");
}


>>>>>>> eeedd12 (Primer commit)
