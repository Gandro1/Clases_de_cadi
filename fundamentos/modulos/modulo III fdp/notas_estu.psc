funcion promedio_re=calcular_pro(nnnnnnnoooootaaaaaassss_reprobaaaaadaaaaasssssss,notas_toootaaaal)
	promedio_re=nnnnnnnoooootaaaaaassss_reprobaaaaadaaaaasssssss/notas_toootaaaal
FinFuncion

Funcion porc_apro=calcular_por_apro(nottttttttttttttt_aaaaaaprrroooobaaaadooooooXDXDXD,nooootaaasssstoootaaaallllllT_T_T_T_T)
	porc_apro=nottttttttttttttt_aaaaaaprrroooobaaaadooooooXDXDXD/nooootaaasssstoootaaaallllllT_T_T_T_T*100
FinFuncion

SubProceso entradas(nombre_es Por Referencia,nota Por Referencia,nom_ma Por Referencia,nom_me Por Referencia,cant Por Referencia,notas_t Por Referencia,nota_ma Por Referencia,nota_me Por Referencia,cant_apro Por Referencia,cant_repro Por Referencia,contador_100 Por Referencia,notas_apro Por Referencia,notas_repro Por Referencia, porcentaje_aprobado Por Referencia, porcentaje_reprobados Por Referencia,notasreprobadas Por Referencia)
	contador_100=0
	nota_ma=-1
	nota_me=101
	notas_t=0
	notas_apro=0
	notas_repro=0
	cant_apro=0
	cant_repro=0
	mostrar"Cuantos estudiantes va a procesar?"
	leer cant
	para i=1 hasta cant
		mostrar"Ingrese nombre del estudiante " i
		leer nombre_es
		mostrar"Cual fue la nota obtenida de " nombre_es
		leer nota
		si nota>nota_ma entonces
			nota_ma=nota
			nom_ma=nombre_es
		FinSi
		si nota<nota_me Entonces
			nota_me=nota
			nom_me=nombre_es
		FinSi
		notas_t=notas_t+1
		si nota>=60 Entonces
			notas_apro=notas_apro+1
			cant_apro=cant_apro+1
		FinSi
		si nota<60 Entonces
			notas_repro=notas_repro+1
			cant_repro=cant_repro+1
			notasreprobadas=notasreprobadas+nota
		FinSi
		notas_t=notas_t+nota
	finpara
	//aqui te hise la Funcion de mandera correcta
	
	porcentaje_aprobado=calcular_por_apro(notas_apro,cant)
	porcentaje_reprobados=calcular_pro(notasreprobadas,cant_repro)
	
	FinSubProceso

	SubProceso calculos(nom_ma,nota_ma,nom_me,nota_me,cant_apro,cant_repro)
	mostrar"La nota mayor la obtuvo " nom_ma
	mostrar"y su valor es " nota_ma
	mostrar"La nota menor fue " nota_me 
	mostrar"y la obtuvo " nom_me
	mostrar"Aprobados " cant_apro
	mostrar"Reprobados " cant_repro
	mostrar""
FinSubProceso

SubProceso porc_pro(porcentaje_aprobado,porcentaje_reprobados,notasreprobadas) 
	Mostrar "Porcentaje de alumnos Aprobados: " porcentaje_aprobado 
	Mostrar "Promedio de alumnos Reprobados: " porcentaje_reprobados
	mostrar""
FinSubProceso

Algoritmo notas_estu
	
		Definir nombre_es,nom_ma,nom_me Como Caracter
		Definir cant,nota_ma,nota_me Como Entero
		Definir notas_t,notas_apro,notas_repro,contador_100,cant_aproba,cant_repro,porc_apro,promedio_re Como Real
		Repetir
			Mostrar "1-Ingresar Datos"
			Mostrar "2-Mostrar Calculos"
			Mostrar "3-Porcentaje y Promedio"
			mostrar "4-Salir del menu"
			Leer opc
			Segun opc hacer
				1:entradas(nombre_es,nota,nom_ma,nom_me,cant,notas_t,nota_ma,nota_me,cant_apro,cant_repro,contador_100,notas_apro,notas_repro,porcentaje_aprobado,porcentaje_reprobados,notasreprobadas)
				2:calculos(nom_ma,nota_ma,nom_me,nota_me,cant_apro,cant_repro)
				3:porc_pro(porcentaje_aprobado,porcentaje_reprobados,notasreprobadas)
				4:mostrar"Salio del menu"
				De Otro Modo:
				 mostrar"Opcion invalida, vuelva a elegir una opcion"
			FinSegun
		Hasta Que opc=4
FinAlgoritmo

	

