"use strict";
let empleado1 = {
    nombre: 'Pepe',
    montoVentas: Math.round(Math.random() * 1000),
    tiempoServicio: Math.round(Math.random() * 50),
    sueldoBase: 40
};
let empleado2 = {
    nombre: 'Juan',
    montoVentas: Math.round(Math.random() * 1000),
    tiempoServicio: Math.round(Math.random() * 50),
    sueldoBase: 40
};
let empleado3 = {
    nombre: 'Maria',
    montoVentas: Math.round(Math.random() * 1000),
    tiempoServicio: Math.round(Math.random() * 50),
    sueldoBase: 40
};
function procesarEmpleado(empleado) {
    return Math.round((empleado.montoVentas * 0.30) + ((empleado.sueldoBase * empleado.tiempoServicio) / 100) + (empleado.sueldoBase));
}
let sueldo1 = procesarEmpleado(empleado1);
let sueldo2 = procesarEmpleado(empleado2);
let sueldo3 = procesarEmpleado(empleado3);
console.warn(`Los datos del empleado: ${empleado1.nombre} son: Monto de ventas: ${empleado1.montoVentas}, tiempo de servicio: ${empleado1.tiempoServicio}. Su sueldo es de: ${sueldo1}`);
console.warn(`Los datos del empleado: ${empleado2.nombre} son: Monto de ventas: ${empleado2.montoVentas}, tiempo de servicio: ${empleado2.tiempoServicio}. Su sueldo es de: ${sueldo2}`);
console.warn(`Los datos del empleado: ${empleado3.nombre} son: Monto de ventas: ${empleado3.montoVentas}, tiempo de servicio: ${empleado3.tiempoServicio}. Su sueldo es de: ${sueldo3}`);
