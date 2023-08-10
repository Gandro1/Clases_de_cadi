funcion numrango=leernum(dato,a,b)
	Repetir
		mostrar "Ingrese " dato " entre " a " y " b
		leer numrango
		
		si no (numrango>=a y numrango<=b) entonces
			mostrar "Debe ingresar un numero en el rango " a "-" b ", intente de nuevo"
		finsi
	Hasta Que (numrango>=a y numrango<=b)  
FinFuncion
subproceso cargarmatriz(filas,columnas,matriz por referencia)
	para f=1 hasta filas
		mostrar ""
		mostrar "Datos del estudiante " f
		para c=1 hasta columnas
			mostrar "Nota " c " del estudiante " f
			//			matriz[f,c]= leernum("nota",0,20)
			matriz[f,c]= Aleatorio(5,20)
		FinPara
	FinPara
FinSubProceso
subproceso mostrardatosm(filas,columnas,matriz)
	para f=1 hasta filas
		acum=0
		mostrar ""
		mostrar " Estudiante: " f
		para c=1 hasta columnas
			mostrar " Nota " c ": " matriz[f,c] Sin Saltar
			acum=acum+matriz[f,c]
		FinPara
		mostrar " Total: " acum
		
	FinPara
FinSubProceso

subproceso calcular(filas, columnas, matriz, acumulador por referencia, contador Por Referencia)
	acumulador=0
	contador=0 
	para f=1 hasta filas
		para c=1 hasta columnas
			acumulador=acumulador+matriz[f,c]
			si matriz[f,c]>=10 entonces
				contador=contador+1
			FinSi
		FinPara
	FinPara
FinSubProceso

funcion promedio=calcularprom(sumatoria, n)
	promedio=sumatoria/n
FinFuncion

funcion porc= calcularporc(contador,cant_elementos)
	porc=(contador/cant_elementos)*100
FinFuncion

subproceso  mostrar_resultados(aprobadas, sumatoria)
	mostrar "Hay " aprobadas " notas aprobadas"
	mostrar "El promedio de notas de la seccion es " calcularprom(sumatoria,15)
	mostrar "El porcentaje de notas aprobadas es " redon(calcularporc(aprobadas,15)) "%"//llamamos a la funcion 
	
FinSubProceso
subproceso particular(estudiante,notas, matriz)
	acum_est=0
	reprobadas=0
	para c=1 hasta notas
		acum_est=acum_est+matriz[estudiante,c] //estudiante es la fila 
		si matriz[estudiante,c]<10 entonces
			reprobadas=reprobadas+1
		FinSi
	FinPara
	Mostrar "El promedio del estudiante " estudiante " es " calcularprom(acum_est, notas) 
	mostrar "El porcentaje de notas reprobadas del estudiante " redon(calcularporc(reprobadas,notas)) "%"
FinSubProceso

Algoritmo sin_titulo
	dimension estudiantes[5,3] //filas->estudiantes
	//columnas->notas
	cargarmatriz(5,3,estudiantes)
	mostrardatosm(5,3,estudiantes)
	calcular(5, 3, estudiantes, sumatoria, aprobadas)
	mostrar_resultados(aprobadas, sumatoria)
	
	
	mostrar "De cual estudiante desea ver las notas?"
	leer estudiante
	
	si estudiante>=1 y estudiante<=5 entonces
		particular(estudiante,3, estudiantes)
		
	SiNo
		mostrar "Ingrese un estudiante válido, solo hay 5"
	FinSi
	
FinAlgoritmo 