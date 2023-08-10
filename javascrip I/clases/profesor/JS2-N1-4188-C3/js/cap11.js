<<<<<<< HEAD
//Validar los prompt con el uso de ciclos. Por ejemplo el do-while.

//Declaracion de variables
var cliente = "";
var cantidad = 0;
var talla = "";
var precioUnitario = 0;
var subtotal = 0;
var descuento = 0;
var montoDescuento = 0;
var total = 0;
var tallaValida = true;
var cantInvalida = false;
var i;

//Entradas de los datos y Proceso
cliente = prompt("Ingrese su nombre");

do{
    talla = prompt("Existen 4 tallas de franelas S, M, L y XL, debera seleccionar alguna").toUpperCase();
    switch(talla){
        case "S":
            precioUnitario = 50000;
            tallaValida = true;
            break;
        case "M":
            precioUnitario = 55000;
            tallaValida = true;
            break;
        case "L":
            precioUnitario = 60000;
            tallaValida = true;
            break;
        case "XL":
            precioUnitario = 65000;
            tallaValida = true;
            break;
        default:
            alert("Ha escrito una talla incorrecta");
            tallaValida = false;
    }
}while(!tallaValida);

do{
    cantidad = parseInt(prompt("Indique la cantidad de franelas a comprar"));
    (isNaN(cantidad)) ? alert("Debe escribir un numero") : 
                        (cantidad <= 0) ? cantInvalida = true : cantInvalida = false;
                        (cantInvalida) ? alert("Debe escribir un numero mayor a cero") : console.log(cantInvalida);
}while(isNaN(cantidad) || cantInvalida);

descuento = (cantidad >= 6 && cantidad <= 11) ?  5 :
            (cantidad >= 12 && cantidad <= 24) ? 10 :
            (cantidad > 24) ? 15 : 0;
console.log(`descuento: ${descuento}`);

subtotal = precioUnitario * cantidad;
montoDescuento = subtotal * descuento / 100;
total = subtotal - montoDescuento;

//Salidas
alert(`Estimado: ${cliente}, la talla seleccionada es: ${talla}, la cantidad indicada es: ${cantidad} \n El subtotal es: ${subtotal} \n El porcentaje de descuento es: ${descuento} \n El monto de descuento es: ${montoDescuento} \n El total a pagar es: ${total}` );

//Lista de los años bisiestos entre el 2016 y el 2040
for(i = 2016; i<=2040; i+=4){
    console.log(i);
=======
//Validar los prompt con el uso de ciclos. Por ejemplo el do-while.

//Declaracion de variables
var cliente = "";
var cantidad = 0;
var talla = "";
var precioUnitario = 0;
var subtotal = 0;
var descuento = 0;
var montoDescuento = 0;
var total = 0;
var tallaValida = true;
var cantInvalida = false;
var i;

//Entradas de los datos y Proceso
cliente = prompt("Ingrese su nombre");

do{
    talla = prompt("Existen 4 tallas de franelas S, M, L y XL, debera seleccionar alguna").toUpperCase();
    switch(talla){
        case "S":
            precioUnitario = 50000;
            tallaValida = true;
            break;
        case "M":
            precioUnitario = 55000;
            tallaValida = true;
            break;
        case "L":
            precioUnitario = 60000;
            tallaValida = true;
            break;
        case "XL":
            precioUnitario = 65000;
            tallaValida = true;
            break;
        default:
            alert("Ha escrito una talla incorrecta");
            tallaValida = false;
    }
}while(!tallaValida);

do{
    cantidad = parseInt(prompt("Indique la cantidad de franelas a comprar"));
    (isNaN(cantidad)) ? alert("Debe escribir un numero") : 
                        (cantidad <= 0) ? cantInvalida = true : cantInvalida = false;
                        (cantInvalida) ? alert("Debe escribir un numero mayor a cero") : console.log(cantInvalida);
}while(isNaN(cantidad) || cantInvalida);

descuento = (cantidad >= 6 && cantidad <= 11) ?  5 :
            (cantidad >= 12 && cantidad <= 24) ? 10 :
            (cantidad > 24) ? 15 : 0;
console.log(`descuento: ${descuento}`);

subtotal = precioUnitario * cantidad;
montoDescuento = subtotal * descuento / 100;
total = subtotal - montoDescuento;

//Salidas
alert(`Estimado: ${cliente}, la talla seleccionada es: ${talla}, la cantidad indicada es: ${cantidad} \n El subtotal es: ${subtotal} \n El porcentaje de descuento es: ${descuento} \n El monto de descuento es: ${montoDescuento} \n El total a pagar es: ${total}` );

//Lista de los años bisiestos entre el 2016 y el 2040
for(i = 2016; i<=2040; i+=4){
    console.log(i);
>>>>>>> eeedd12 (Primer commit)
}