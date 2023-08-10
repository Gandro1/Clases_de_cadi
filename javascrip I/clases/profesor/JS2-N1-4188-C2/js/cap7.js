<<<<<<< HEAD
console.warn("CAPITULO 7");
var edad;
var sexo;
var descuento;
var precio;
var precioBs;
var tasaCambio;
var montoAPagar;

precio = 17;
tasaCambio = 22.43;
precioBs = precio * tasaCambio;

sexo = "F";
console.log("sexo: " + sexo);

edad = Math.round(Math.random() * 75);
console.log("edad: " + edad);

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

montoAPagar = precioBs - (precioBs * descuento / 100);
console.log(`El monto a pagar es: ${montoAPagar}`);
=======
console.warn("CAPITULO 7");
var edad;
var sexo;
var descuento;
var precio;
var precioBs;
var tasaCambio;
var montoAPagar;

precio = 17;
tasaCambio = 22.43;
precioBs = precio * tasaCambio;

sexo = "F";
console.log("sexo: " + sexo);

edad = Math.round(Math.random() * 75);
console.log("edad: " + edad);

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

montoAPagar = precioBs - (precioBs * descuento / 100);
console.log(`El monto a pagar es: ${montoAPagar}`);
>>>>>>> eeedd12 (Primer commit)
