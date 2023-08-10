Funcion monto_porc<-calcular_por(monto,porc)
	monto_porc=monto*porc/100
FinFuncion
SubAlgoritmo entradas(pfabrica Por Referencia)
	mostrar "cual es el precio de fabrica?"
	leer pfabrica
FinSubAlgoritmo

SubProceso calculos(pfabrica, pventa Por Referencia,ganancia Por Referencia,comivendedor Por Referencia,pbase Por Referencia,iva Por Referencia,pventa Por Referencia) 
	ganancia=calcular_por(pfabrica,25)
	pbase =calcular_por(pfabrica,25)+calcular_por(pfabrica,20)+pfabrica
	pventa=pbase+calcular_por(pbase,16)
	comivendedor=calcular_por(pfabrica,20)
	iva=calcular_por(pbase,16)
	pventaart=pbase+iva

	
FinSubAlgoritmo
SubAlgoritmo salida(pfabrica, pventa, ganancia,comivendedor,pbase,iva,pventa)
	mostrar " precio fa " pfabrica
	mostrar "precio venta " pventa
	mostrar "la ganancia es " ganancia
	mostrar "la comicion del vendedor " comivendedor
	Mostrar "precuio antes del iva " pbase
	Mostrar "iva " iva	
	mostrar "precio total " pventa

FinSubAlgoritmo

Algoritmo sin_titulo
	entradas(pfabrica)
	calculos(pfabrica,pventa,ganancia,comivendedor,pbase,iva,pventa)
	salida(pfabrica, pventa, ganancia,comivendedor,pbase,iva,pventa)
FinAlgoritmo
