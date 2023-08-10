<<<<<<< HEAD
var estudiante = new Boolean;
var preestreno = new Boolean;
var sexo = new Boolean;
var sex = new String;
var est =new String;
var importe = 0;
var dia = new Number;
var fecha = new String;
var pres = new String;
var anios = new Number;
var descuento = new Number;
var ticket = new Number;
var Tootal = new Number;
var precio = 10;

//Preguntas para el usuario
dia = prompt("Bienvenido a nuetro cine, ¿Que dia decea ver su pelicula? responda con un numero porfavor 1=lunes 2=Martes.... 7=Domingo " ) ;


//condicionales
if(dia>=1 && dia<=7){
    anios = prompt("¿Cuantos anios tiene? ");
    estudiante = confirm("¿Usted es un estudiante? ");
    sexo = confirm("¿Es usted Mujer? ");
    preestreno = confirm("¿La Pelicula que vera esta en pre-Estreno? ");

 if(dia == 1){
    descuento=50;
    }else{
    if(dia==2 && estudiante==true){
         descuento=50;   
        } else{ 
        if(dia==3 && preestreno==true){    
            descuento="none";
            importe=30;      
        }else{
          if(dia==4 && sexo==true){
               descuento=30;       
        }else{
            if(dia==5 || (dia==6) || (dia==7) && anios<=8){
                descuento=20;
            }
        }  
    }
    }
}   
}else{confirm("Por Favor Ingrece un dia valido. Para comenzar de nuevo precione: F5")
    
} 
if(dia==1){
    fecha="Lunes "
}else{
    if(dia==2){
        fecha="Martes"
    }else{
        if(dia==3){
            fecha="Miercoles"
        }else{
            if(dia==4){
                fecha="Jueves"
            }else{
                if(dia==5){
                    fecha="Viernes"
                }else{
                    if(dia==6){
                        fecha="Sabado"
                    }else{
                        if(dia==7){
                            fecha="Domingo"
                        }
                    }
                }
            }
        }
    }
}

if(anios>=60 && !(dia==1 || (dia==4))){
    descuento=40;
}
if(anios<=8 && !(dia==5 || (dia==6) || (dia==7))){
    descuento=descuento+=20
}

if(sexo==true){
    sex="Femenino ";
}else{
    sex="Masculino";
}

if(estudiante==true){
    est="Es Estudiante ";
}else{
    est="No es Estudiante";
}

if(preestreno==true){
    pres="Es Pre-Estreno ";
}else{
    pres="No es Pre-Estreno ";
}
ticket=Math.round(Math.random() * 31);


//calculos
console.log(`Descuento a aplicar ${descuento}%`);
if(importe==30){
    console.log(`Importe a Aplicar ${importe}%`);
}
console.log(`Costo real del boleto ${precio}$`);
if(descuento>=0){
console.log(`Precio Con descuento aplicado, precio-(precio*descuento/100): ${precio-(precio*descuento/100)} `);
Tootal=precio-(precio*descuento/100)
}else{
    console.log(`Precio Con importe aplicado, precio+(precio*importe/100): ${precio+(precio*importe/100)}`);
    Tootal=precio+(precio*importe/100)
}
if(ticket==21){
    Tootal=0;
}

//recibo del usuario
alert(`Gracias por Comprar comprar la entrada en nuestro cines. para el dia ${fecha}, su numero de ticket es: ${ticket}, Sexo: ${sex}, Edad ${anios}, ${est}, ${pres}. Monto Total a pagar es: ${Tootal}`);
if(ticket==21){
alert("¡Felicidades!!!! Su entrada a sido gratis por ser el ticket N° 21. Que disfrute su pelicula");
}
=======
var estudiante = new Boolean;
var preestreno = new Boolean;
var sexo = new Boolean;
var sex = new String;
var est =new String;
var importe = 0;
var dia = new Number;
var fecha = new String;
var pres = new String;
var anios = new Number;
var descuento = new Number;
var ticket = new Number;
var Tootal = new Number;
var precio = 10;

//Preguntas para el usuario
dia = prompt("Bienvenido a nuetro cine, ¿Que dia decea ver su pelicula? responda con un numero porfavor 1=lunes 2=Martes.... 7=Domingo " ) ;


//condicionales
if(dia>=1 && dia<=7){
    anios = prompt("¿Cuantos anios tiene? ");
    estudiante = confirm("¿Usted es un estudiante? ");
    sexo = confirm("¿Es usted Mujer? ");
    preestreno = confirm("¿La Pelicula que vera esta en pre-Estreno? ");

 if(dia == 1){
    descuento=50;
    }else{
    if(dia==2 && estudiante==true){
         descuento=50;   
        } else{ 
        if(dia==3 && preestreno==true){    
            descuento="none";
            importe=30;      
        }else{
          if(dia==4 && sexo==true){
               descuento=30;       
        }else{
            if(dia==5 || (dia==6) || (dia==7) && anios<=8){
                descuento=20;
            }
        }  
    }
    }
}   
}else{confirm("Por Favor Ingrece un dia valido. Para comenzar de nuevo precione: F5")
    
} 
if(dia==1){
    fecha="Lunes "
}else{
    if(dia==2){
        fecha="Martes"
    }else{
        if(dia==3){
            fecha="Miercoles"
        }else{
            if(dia==4){
                fecha="Jueves"
            }else{
                if(dia==5){
                    fecha="Viernes"
                }else{
                    if(dia==6){
                        fecha="Sabado"
                    }else{
                        if(dia==7){
                            fecha="Domingo"
                        }
                    }
                }
            }
        }
    }
}

if(anios>=60 && !(dia==1 || (dia==4))){
    descuento=40;
}
if(anios<=8 && !(dia==5 || (dia==6) || (dia==7))){
    descuento=descuento+=20
}

if(sexo==true){
    sex="Femenino ";
}else{
    sex="Masculino";
}

if(estudiante==true){
    est="Es Estudiante ";
}else{
    est="No es Estudiante";
}

if(preestreno==true){
    pres="Es Pre-Estreno ";
}else{
    pres="No es Pre-Estreno ";
}
ticket=Math.round(Math.random() * 31);


//calculos
console.log(`Descuento a aplicar ${descuento}%`);
if(importe==30){
    console.log(`Importe a Aplicar ${importe}%`);
}
console.log(`Costo real del boleto ${precio}$`);
if(descuento>=0){
console.log(`Precio Con descuento aplicado, precio-(precio*descuento/100): ${precio-(precio*descuento/100)} `);
Tootal=precio-(precio*descuento/100)
}else{
    console.log(`Precio Con importe aplicado, precio+(precio*importe/100): ${precio+(precio*importe/100)}`);
    Tootal=precio+(precio*importe/100)
}
if(ticket==21){
    Tootal=0;
}

//recibo del usuario
alert(`Gracias por Comprar comprar la entrada en nuestro cines. para el dia ${fecha}, su numero de ticket es: ${ticket}, Sexo: ${sex}, Edad ${anios}, ${est}, ${pres}. Monto Total a pagar es: ${Tootal}`);
if(ticket==21){
alert("¡Felicidades!!!! Su entrada a sido gratis por ser el ticket N° 21. Que disfrute su pelicula");
}
>>>>>>> eeedd12 (Primer commit)
