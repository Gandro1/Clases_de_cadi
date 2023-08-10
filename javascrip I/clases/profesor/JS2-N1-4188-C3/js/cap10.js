<<<<<<< HEAD
// Una fábrica produce 4 tallas de franelas cuyos precios son: Talla Precio (Bs.) S 50000 M 55000 L 60000 XL 65000  La fábrica tiene la siguiente política de descuento según la cantidad de unidades a comprar: Entre 6 y 11 unidades tendrá un descuento del 5% Entre 12 y 24 unidades tendrá un descuento del 10% Más de 2 docenas el descuento será del 15%. 
// Teniendo los siguientes datos de una operación de compra: nombre del cliente, cantidad de unidades a comprar y talla de franela seleccionada; deben generarse las siguientes salidas: nombre del cliente, cantidad de unidades solicitadas, monto del descuento (incluya el porcentaje) y monto a pagar. NOTA: En una operación de compra sólo se compra una sola talla.
// Switch - Operador Ternario ( ? : ) - conversiones de String.

//Declaracion de variables
var cliente = "";
var cantidad = 0;
var talla = "";
var precioUnitario = 0;
var subtotal = 0;
var descuento = 0;
var montoDescuento = 0;
var total = 0;

//Entradas de los datos
cliente = prompt("Ingrese su nombre");
talla = prompt("Existen 4 tallas de franelas S, M, L y XL, debera seleccionar alguna").toUpperCase();
cantidad = parseInt(prompt("Indique la cantidad de franelas a comprar"));

//Proceso
switch(talla){
    case "S":
        precioUnitario = 50000;
        break;
    case "M":
        precioUnitario = 55000;
        break;
    case "L":
        precioUnitario = 60000;
        break;
    case "XL":
        precioUnitario = 65000;
        break;
    default:
        alert("Ha escrito una talla incorrecta");
}

descuento = (cantidad >= 6 && cantidad <= 11) ?  5 :
            (cantidad >= 12 && cantidad <= 24) ? 10 :
            (cantidad > 24) ? 15 : 0;
console.log(`descuento: ${descuento}`);

subtotal = precioUnitario * cantidad;
montoDescuento = subtotal * descuento / 100;
total = subtotal - montoDescuento;

//Salidas
=======
// Una fábrica produce 4 tallas de franelas cuyos precios son: Talla Precio (Bs.) S 50000 M 55000 L 60000 XL 65000  La fábrica tiene la siguiente política de descuento según la cantidad de unidades a comprar: Entre 6 y 11 unidades tendrá un descuento del 5% Entre 12 y 24 unidades tendrá un descuento del 10% Más de 2 docenas el descuento será del 15%. 
// Teniendo los siguientes datos de una operación de compra: nombre del cliente, cantidad de unidades a comprar y talla de franela seleccionada; deben generarse las siguientes salidas: nombre del cliente, cantidad de unidades solicitadas, monto del descuento (incluya el porcentaje) y monto a pagar. NOTA: En una operación de compra sólo se compra una sola talla.
// Switch - Operador Ternario ( ? : ) - conversiones de String.

//Declaracion de variables
var cliente = "";
var cantidad = 0;
var talla = "";
var precioUnitario = 0;
var subtotal = 0;
var descuento = 0;
var montoDescuento = 0;
var total = 0;

//Entradas de los datos
cliente = prompt("Ingrese su nombre");
talla = prompt("Existen 4 tallas de franelas S, M, L y XL, debera seleccionar alguna").toUpperCase();
cantidad = parseInt(prompt("Indique la cantidad de franelas a comprar"));

//Proceso
switch(talla){
    case "S":
        precioUnitario = 50000;
        break;
    case "M":
        precioUnitario = 55000;
        break;
    case "L":
        precioUnitario = 60000;
        break;
    case "XL":
        precioUnitario = 65000;
        break;
    default:
        alert("Ha escrito una talla incorrecta");
}

descuento = (cantidad >= 6 && cantidad <= 11) ?  5 :
            (cantidad >= 12 && cantidad <= 24) ? 10 :
            (cantidad > 24) ? 15 : 0;
console.log(`descuento: ${descuento}`);

subtotal = precioUnitario * cantidad;
montoDescuento = subtotal * descuento / 100;
total = subtotal - montoDescuento;

//Salidas
>>>>>>> eeedd12 (Primer commit)
alert(`Estimado: ${cliente}, la talla seleccionada es: ${talla}, la cantidad indicada es: ${cantidad} \n El subtotal es: ${subtotal} \n El porcentaje de descuento es: ${descuento} \n El monto de descuento es: ${montoDescuento} \n El total a pagar es: ${total}` );