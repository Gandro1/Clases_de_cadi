"use strict";
const empleado1 = { nombre: "Eduardo", montoVentas: 1000, tiempo: 5 };
const empleado2 = { nombre: "Ana", montoVentas: 1500, tiempo: 3 };
const empleado3 = { nombre: "Carlos", montoVentas: 800, tiempo: 8 };
// Sueldo base
const sueldoBase = 2000;
function calcularSueldo(empleado) {
    const porcentajeVentas = 0.3;
    const porcentajeTiempo = (empleado.tiempo / 100) * sueldoBase;
    const sueldo = sueldoBase + (empleado.montoVentas * porcentajeVentas) + porcentajeTiempo;
    return sueldo;
}
const sueldoEmpleado1 = calcularSueldo(empleado1);
console.log(`${empleado1.nombre} - Sueldo: $${sueldoEmpleado1}`);
console.log("Datos del empleado:", empleado1);
const sueldoEmpleado2 = calcularSueldo(empleado2);
console.log(`${empleado2.nombre} - Sueldo: $${sueldoEmpleado2}`);
console.log("Datos del empleado:", empleado2);
const sueldoEmpleado3 = calcularSueldo(empleado3);
console.log(`${empleado3.nombre} - Sueldo: $${sueldoEmpleado3}`);
console.log("Datos del empleado:", empleado3);
