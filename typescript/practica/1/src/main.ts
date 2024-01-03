let mensaje: string = "Hola mundo";
let aviso ="El aviso es: ";
console.log(aviso);

mensaje ="Hola mundo 2";
console.log(mensaje); 
function chancitofeliz(config: any){
}

let animales=["perro","gato","pajaro"];
let num: number[] =[1,2,3];
let num2 = [];
let num3: Array<number> = []
// num.map( x => x.) auto completado muestra los metodos de sus clases

let tupla: [number, string[]] = [1,["hola","mundo"]]; 

const chica = 's'
const mediana = 'm'
const grande = 'l'
const extraGrande = 'xl'

enum Talla {
    Chica = 's',
    Mediana = 'm',
    Grande = 'l',
    ExtraGrande = 'xl'
}
const variable = Talla
console.log(variable)

const enum LoadingStatus {Idle, Loading, Success, Error}