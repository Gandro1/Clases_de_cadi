<<<<<<< HEAD
var sueldo = 50000;
var sub = new Number;
var total = new Number;
var bonoviejo = new Number;
var ventas = new Number;
var vendedores = new Number;
var edad = new Number;
var porcentaje = new Number;
var i = new Number;
var b = new Number
var porr = new Number;
var sexo = new String;
var sex = new String;
var ed = false;
var viejo = false;

vendedores = prompt("¿Cuantos trabajadores son? ");

var arreglo = new Array(vendedores)
for(i=1;i<=arreglo;i++){
    do{
        sexo = prompt(`Vendedor N° ${i}, Ingrece su sexo: M=(Masculino), F=(Femenino) `);
        switch(sexo){
            case "M": sex ="Masculino ";
            break;
            case "F": sex ="Femenino ";
            break;
            default:
                alert("A ingresado una letra Invalida, porfavor ingrese de nuevo");
        }
    }while(!(sexo ="M ") || !(sexo ="F"));
    do{
        edad = prompt(`Vendedor N° ${i}, Ingrece su edad `);
        ed=(edad>0) ? true : alert("la edad tiene que ser mayor a 0 ");
    }while(!(edad>=1));

    ventas = prompt(`Vendedor N° ${i}, Ingrece total de ventas hechas este mes `);

if(ventas>=75000 && ventas<=90000){
    porr=5;
}else{
    if(ventas>=200000 && ventas<=300000){
        porr=7;
    }else{
        if(ventas>=1000000 && ventas<=1500000){
            porr=10;
        }else{
            porr=6
        }
    }
}
console.log(`porcentaje ${porr} `);
if(sexo=="M"){
    if(edad>=60){
        bonoviejo=40000
        viejo=true
    }else{
        bonoviejo=0
        viejo=false
    }
}else{
    if(sexo=="F"){
        if(edad>=55){
            bonoviejo=40000
            viejo=true
        }else{
            bonoviejo=0
            viejo=false
        }
    }
}

porcentaje= sueldo * porr  / 100
sub=sueldo+porcentaje
total= sueldo + porcentaje + bonoviejo

}
for(b=1;b<=arreglo;b++){
    alert(`El trabajador N°${b}, sexo: ${sex}, edad: ${edad}. monto mensual de sus ventas:  ${sueldo}BS, esta basado en: su sueldo base: ${ventas}BS, el procentaje de comision por ventas: ${porr}%,  el monto de comision por venta: ${sub}, bono tercera edad: ${bonoviejo}. Total; ${total}`)
}
=======
var sueldo = 50000;
var sub = new Number;
var total = new Number;
var bonoviejo = new Number;
var ventas = new Number;
var vendedores = new Number;
var edad = new Number;
var porcentaje = new Number;
var i = new Number;
var b = new Number
var porr = new Number;
var sexo = new String;
var sex = new String;
var ed = false;
var viejo = false;

vendedores = prompt("¿Cuantos trabajadores son? ");

var arreglo = new Array(vendedores)
for(i=1;i<=arreglo;i++){
    do{
        sexo = prompt(`Vendedor N° ${i}, Ingrece su sexo: M=(Masculino), F=(Femenino) `);
        switch(sexo){
            case "M": sex ="Masculino ";
            break;
            case "F": sex ="Femenino ";
            break;
            default:
                alert("A ingresado una letra Invalida, porfavor ingrese de nuevo");
        }
    }while(!(sexo ="M ") || !(sexo ="F"));
    do{
        edad = prompt(`Vendedor N° ${i}, Ingrece su edad `);
        ed=(edad>0) ? true : alert("la edad tiene que ser mayor a 0 ");
    }while(!(edad>=1));

    ventas = prompt(`Vendedor N° ${i}, Ingrece total de ventas hechas este mes `);

if(ventas>=75000 && ventas<=90000){
    porr=5;
}else{
    if(ventas>=200000 && ventas<=300000){
        porr=7;
    }else{
        if(ventas>=1000000 && ventas<=1500000){
            porr=10;
        }else{
            porr=6
        }
    }
}
console.log(`porcentaje ${porr} `);
if(sexo=="M"){
    if(edad>=60){
        bonoviejo=40000
        viejo=true
    }else{
        bonoviejo=0
        viejo=false
    }
}else{
    if(sexo=="F"){
        if(edad>=55){
            bonoviejo=40000
            viejo=true
        }else{
            bonoviejo=0
            viejo=false
        }
    }
}

porcentaje= sueldo * porr  / 100
sub=sueldo+porcentaje
total= sueldo + porcentaje + bonoviejo

}
for(b=1;b<=arreglo;b++){
    alert(`El trabajador N°${b}, sexo: ${sex}, edad: ${edad}. monto mensual de sus ventas:  ${sueldo}BS, esta basado en: su sueldo base: ${ventas}BS, el procentaje de comision por ventas: ${porr}%,  el monto de comision por venta: ${sub}, bono tercera edad: ${bonoviejo}. Total; ${total}`)
}
>>>>>>> eeedd12 (Primer commit)
