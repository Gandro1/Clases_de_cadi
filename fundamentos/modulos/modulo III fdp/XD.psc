Funcion mont_por=calcular_porc(ini,porcentaje)
	mont_por=ini*porcentaje/100
FinFuncion

SubProceso entradas(nombre_cliente Por Referencia,tipo_mer Por Referencia,cant_mer Por Referencia)
	mostrar"Bienvenido a Mermeladas del campo,"
	mostrar"Indique su nombre "
	leer nombre_cliente
	mostrar"Que tipo de mermelada va a llevar(Fresa,Melocoton,Guayaba o Piña)? "
	mostrar"Para seleccionar alguna de ellas debe colocar (F,M,G,P)"
	leer tipo_mer
	mostrar"Cuantas unidades?"
	leer cant_mer
FinSubProceso


SubProceso procedimiento(precio_b Por Referencia,tipo_mer Por Referencia,precioini Por Referencia,precio_t Por Referencia,porc Por Referencia,cant_mer Por Referencia)
	precio_b=5
	precioini=precio_b*cant_mer
	si (mayusculas(tipo_mer)="F" o Mayusculas(tipo_mer)="M") Entonces
		porc=25
	SiNo
		si (mayusculas(tipo_mer)="G" o Mayusculas(tipo_mer)="P") Entonces	
			porc=10
		FinSi

	FinSi
	fun_porc=calcular_porc(precioini,porc)
	precio_t=precioini+fun_porc
FinSubProceso

SubProceso salidas(nombre_cliente,tipo_mer,cant_mer,precioini,precio_b,precio_t,fun_porc)
	mostrar"-------FACTURA--------"
	mostrar"Nombre del cliente " nombre_cliente
	mostrar"Tipo de mermelada " tipo_mer 
	mostrar"Cantidad de unidades " cant_mer
	mostrar"Precio sin porcentaje " precioini
	mostrar"Total " precio_t
	mostrar"--------Disfrute--------"
FinSubProceso


Algoritmo tienda_mer
	entradas(nombre_cliente,tipo_mer,cant_mer)
	procedimiento(precio_b,tipo_mer,precioini,precio_t,porc,cant_mer)
	salidas(nombre_cliente,tipo_mer,cant_mer,precioini,precio_b,precio_t,fun_porc)
	
FinAlgoritmo
