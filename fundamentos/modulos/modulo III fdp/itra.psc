SubAlgoritmo inicial(nota_mayor Por Referencia, nmayor Por Referencia, nombre Por Referencia, nota Por Referencia,)
	mostrar "cuantos estudiantes van a estudiar?"
	Leer cant
	nota_mayor=100
	para i=1 hasta cant Hacer
		
		mostrar "nombre estudiantes "
		leer nombre
		mostrar "cual fue la nota " nombre	
		leer nota
		si nota<nota_mayor Entonces
			nota_mayor=nota
			nmayor=nombre
		FinSi
	FinPara
FinSubAlgoritmo

Algoritmo sin_titulo
	mostrar "Bienvenido. el raspao decerebrado "
	inicial(nota_mayor,nmayor,nombre,nota)
	mostrar "la nota mas baja es " nota_mayor
	mostrar "el estudiante raspao es " nmayor
FinAlgoritmo
