<<<<<<< HEAD
// 1. Definir e inicializar las siguientes variables.
// a: number
// b: string (numerico)
// c: string (palabra)
// d: boolean
// e: undefined
// 2. Vamos a permutar operaciones aritmeticas con las variables.
// Ej: a + b; b + a; Demostrar la conmutacion.
// 3. Resultados impresos en la consola
// 4. Agregar en algunas de ellas un condicional donde nos indique con el uso de la funcion isNan(), si el resultado es un numero o no.
var a = 34;
var b = "10";
var c = "Eduardo";
var d = true;
var e = undefined;

//+
console.log(`a:  ${a}, b:  "${b}", c: "${c}", d: ${d}, e: ${e}`);;
console.log("Suma");
console.log("");
//a
console.log(`"a + b : ${a + b}`);
console.log(`"b + a : " ${b + a}`);
console.log(`"a + c : " ${a + c}`);
console.log(`"c + a : " ${c + a}`);
console.log(`"a + d : " ${a + d}`);
if(isNaN(a+d)){
    console.warn("no es numero");
}else{
    console.warn("es numero");
}
console.log(`"d + a : " ${d + a}`);
console.log(`"a + e : " ${a + e}`);
console.log(`"e + a : " ${e + a}`);
//b
console.log(`"b + c : " ${b + c}`);
console.log(`"b + d : " ${b + d}`);
console.log(`"b + e : " ${b + e}`);
//c
console.log(`"c + d : " ${c + d}`);
console.log(`"c + e : " ${c + e}`);
//d
console.log(`"d + e : " ${d + e}`);

//*
console.log("");
console.log(`a:  ${a}, b:  "${b}", c: "${c}", d: ${d}, e: ${e}`);
console.log("Multiplicacion");
console.log("");
//a
console.log(`"a * b : " ${a * b}`);
console.log(`"b * a : " ${b * a}`);
console.log(`"a * c : " ${a * c}`);
console.log(`"c * a : " ${c * a}`);
console.log(`"a * d : " ${a * d}`);
console.log(`"d * a : " ${d * a}`);
console.log(`"a * e : " ${a * e}`);
console.log(`"e * a : " ${e * a}`);
//b
console.log(`"b * c : ${b * c}`);
console.log(`"b * d : " ${b * d}`);
console.log(`"b * e : " ${b * e}`);
//c
console.log(`"c * d : " ${c * d}`);
console.log(`"c * e : " ${c * e}`);
//d
console.log(`"d * e : " ${d * e}`);

//-
console.log("");
console.log(`a:  ${a}, b:  "${b}", c: "${c}", d: ${d}, e: ${e}`);
console.log("Resta");
console.log("");
//a
console.log(`"a - b : " ${a - b}`);
console.log(`"b - a : " ${b - a}`);
console.log(`"a - c : " ${a - c}`);
console.log(`"c - a : " ${c - a}`);
console.log(`"a - d : " ${a - d}`);
console.log(`"d - a : " ${d - a}`);
console.log(`"a - e : " ${a - e}`);
console.log(`"e - a : " ${e - a}`);
//b
console.log(`"b - c : " ${b - c}`);
console.log(`"b - d : " ${b - d}`);
console.log(`"b - e : " ${b - e}`);
//c
console.log(`"c - d : " ${c - d}`);
console.log(`"c - e ${c - e}`);
//d
console.log(`"d - e : " ${d - e}`);

//division
console.log("");
console.log(`a:  ${a}, b:  "${b}", c: "${c}", d: ${d}, e: ${e}`);
console.log("Division");
console.log("");
//a
console.log(`"a / b : ${a / b}`);
console.log(`"b / a : ${b / a}`);
console.log(`"a / c : ${a / c}`);
console.log(`"c / a : ${c / a}`);
console.log(`"a / d : ${a / d}`);
console.log(`"d / a : ${d / a}`);
console.log(`"a / e : ${a / e}`);
console.log(`"e / a : ${e / a}`);
//b
console.log(`"b / c : ${b / c}`);
console.log(`"b / d : ${b / d}`);
console.log(`"b / e : ${b / e}`);
//c
console.log(`"c / d : ${c / d}`);
console.log(`"c / e : ${c / e}`);
//d
=======
// 1. Definir e inicializar las siguientes variables.
// a: number
// b: string (numerico)
// c: string (palabra)
// d: boolean
// e: undefined
// 2. Vamos a permutar operaciones aritmeticas con las variables.
// Ej: a + b; b + a; Demostrar la conmutacion.
// 3. Resultados impresos en la consola
// 4. Agregar en algunas de ellas un condicional donde nos indique con el uso de la funcion isNan(), si el resultado es un numero o no.
var a = 34;
var b = "10";
var c = "Eduardo";
var d = true;
var e = undefined;

//+
console.log(`a:  ${a}, b:  "${b}", c: "${c}", d: ${d}, e: ${e}`);;
console.log("Suma");
console.log("");
//a
console.log(`"a + b : ${a + b}`);
console.log(`"b + a : " ${b + a}`);
console.log(`"a + c : " ${a + c}`);
console.log(`"c + a : " ${c + a}`);
console.log(`"a + d : " ${a + d}`);
if(isNaN(a+d)){
    console.warn("no es numero");
}else{
    console.warn("es numero");
}
console.log(`"d + a : " ${d + a}`);
console.log(`"a + e : " ${a + e}`);
console.log(`"e + a : " ${e + a}`);
//b
console.log(`"b + c : " ${b + c}`);
console.log(`"b + d : " ${b + d}`);
console.log(`"b + e : " ${b + e}`);
//c
console.log(`"c + d : " ${c + d}`);
console.log(`"c + e : " ${c + e}`);
//d
console.log(`"d + e : " ${d + e}`);

//*
console.log("");
console.log(`a:  ${a}, b:  "${b}", c: "${c}", d: ${d}, e: ${e}`);
console.log("Multiplicacion");
console.log("");
//a
console.log(`"a * b : " ${a * b}`);
console.log(`"b * a : " ${b * a}`);
console.log(`"a * c : " ${a * c}`);
console.log(`"c * a : " ${c * a}`);
console.log(`"a * d : " ${a * d}`);
console.log(`"d * a : " ${d * a}`);
console.log(`"a * e : " ${a * e}`);
console.log(`"e * a : " ${e * a}`);
//b
console.log(`"b * c : ${b * c}`);
console.log(`"b * d : " ${b * d}`);
console.log(`"b * e : " ${b * e}`);
//c
console.log(`"c * d : " ${c * d}`);
console.log(`"c * e : " ${c * e}`);
//d
console.log(`"d * e : " ${d * e}`);

//-
console.log("");
console.log(`a:  ${a}, b:  "${b}", c: "${c}", d: ${d}, e: ${e}`);
console.log("Resta");
console.log("");
//a
console.log(`"a - b : " ${a - b}`);
console.log(`"b - a : " ${b - a}`);
console.log(`"a - c : " ${a - c}`);
console.log(`"c - a : " ${c - a}`);
console.log(`"a - d : " ${a - d}`);
console.log(`"d - a : " ${d - a}`);
console.log(`"a - e : " ${a - e}`);
console.log(`"e - a : " ${e - a}`);
//b
console.log(`"b - c : " ${b - c}`);
console.log(`"b - d : " ${b - d}`);
console.log(`"b - e : " ${b - e}`);
//c
console.log(`"c - d : " ${c - d}`);
console.log(`"c - e ${c - e}`);
//d
console.log(`"d - e : " ${d - e}`);

//division
console.log("");
console.log(`a:  ${a}, b:  "${b}", c: "${c}", d: ${d}, e: ${e}`);
console.log("Division");
console.log("");
//a
console.log(`"a / b : ${a / b}`);
console.log(`"b / a : ${b / a}`);
console.log(`"a / c : ${a / c}`);
console.log(`"c / a : ${c / a}`);
console.log(`"a / d : ${a / d}`);
console.log(`"d / a : ${d / a}`);
console.log(`"a / e : ${a / e}`);
console.log(`"e / a : ${e / a}`);
//b
console.log(`"b / c : ${b / c}`);
console.log(`"b / d : ${b / d}`);
console.log(`"b / e : ${b / e}`);
//c
console.log(`"c / d : ${c / d}`);
console.log(`"c / e : ${c / e}`);
//d
>>>>>>> eeedd12 (Primer commit)
console.log(`"d / e : ${d / e}`);