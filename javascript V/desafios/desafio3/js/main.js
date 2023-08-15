document.addEventListener("DOMContentLoaded", function () {
  fetch("https://api.cadif1.com/areadeestudio")
    .then(result => result.json())
    .then(data => {
      let areasContainer = data.areas;
      let areasDeEstudio = document.getElementById("areasDeEstudio");

      areasContainer.forEach(area => {
        let areaDiv = document.createElement("div");
        areaDiv.className = "area";
        areaDiv.dataset.id = area.id;
        areaDiv.innerHTML = `<h2>${area.nombre}</h2>`;
        areasDeEstudio.appendChild(areaDiv);

        areaDiv.addEventListener('click', function (event) {
          let idAreaDeEstudio = event.currentTarget.dataset.id;
          cursos(idAreaDeEstudio);
        });
      });
    })
    .catch(error => {
      console.log("Ha ocurrido un error:", error);
    });

  function cursos(idArea) {
    console.log(idArea);
    console.log("Entraste en la funcion cursos");
    fetch(`https://api.cadif1.com/curso/de_un_area/${idArea}`)
      .then(result => result.json())
      .then(data => {
        console.log(data)
        let cursosDeArea = data.cursos;
        let cursosContainer = document.getElementById("cursosDeArea");
        cursosContainer.innerHTML = "";

        cursosDeArea.forEach(cursos => {
          let cursoDiv = document.createElement("div");
          cursoDiv.className = "curso";
          cursoDiv.dataset.id = cursos.id;
          cursoDiv.innerHTML = `<h2>${cursos.nombre}</h2>`;
          cursosContainer.appendChild(cursoDiv);

          cursoDiv.addEventListener('click', function (event) {
            let idCurso = event.currentTarget.dataset.id;
            niveless(idCurso);
            // debugger
          });
        });
      })
      .catch(error => {
        console.log("Ha ocurrido un error curso: ", error);
      });
    }
  });
  function niveless(idCurso) {
    // debugger
    console.log(idCurso);
    console.log("Entraste en la funcion niveles");
    let nivelesContainer = document.getElementById("nivelesDeCurso");
    nivelesContainer.innerHTML = "";
    fetch(`https://api.cadif1.com/curso/${idCurso}`)
      .then(result => result.json())
      .then(data => {
        // debugger
        let nivelesDeCurso = data.curso
        let nivelDiv = document.createElement("div");
        console .log(data)
        nivelDiv.className = "curso";
        nivelDiv.dataset.id = data.curso.id;
        nivelesContainer.appendChild(nivelDiv);
        nivelDiv.innerHTML = `
        <h2>${data.curso.objetivoresumido}</h2>
        <h2>Niveles: ${data.curso.niveles.length} </h2>
        <h2>Costo por nivel: ${data.curso.niveles[0].precio}</h2>
        `;
        
      })
      .catch(error => {
        console.log("Ha ocurrido un error niveles: ", error);
      });
    }
    document.addEventListener("DOMContentLoaded", function () {
      fetch("https://api.cadif1.com/carrera")
        .then(result => result.json())
        .then(data => {
          let carrerasActivas = data.carreras.filter(carrera => carrera.activa === "1");
          let carrerasContainer = document.getElementById("carreras");
    
          carrerasActivas.forEach(carrera => {
            let carreraDiv = document.createElement("div");
            carreraDiv.className = "carrera";
            carreraDiv.dataset.id = carrera.id;
            carreraDiv.innerHTML = `<h2>${carrera.nombre}</h2>`;
            carrerasContainer.appendChild(carreraDiv);
          });
        })
        .catch(error => {
          console.log("Ha ocurrido un error:", error);
        });
        function cargarCarreras() {
          fetch("https://api.cadif1.com/carrera")
            .then(result => result.json())
            .then(data => {
              console.log("Cargando carreras");
              console.log(data);
              let carrerasActivas = data.carreras.filter(carrera => carrera.activa === "1");
              let carrerasContainer = document.getElementById("carreras");
              carrerasContainer.innerHTML = "";
      
              carrerasActivas.forEach(carrera => {
                let carreraDiv = document.createElement("div");
                carreraDiv.className = "carrera";
                carreraDiv.dataset.id = carrera.id;
                carreraDiv.innerHTML = `<h2>${carrera.nombre}</h2>`;
                carrerasContainer.appendChild(carreraDiv);
      
                carreraDiv.addEventListener('click', function (event) {
                  let idCarrera = event.currentTarget.dataset.id;
                  obtenerPensum(idCarrera);
                });
              });
            })
            .catch(error => {
              console.log("Ha ocurrido un error al cargar las carreras:", error);
            });
        }
      
        function obtenerPensum(idCarrera) {
          fetch(`https://api.cadif1.com/carrera/${idCarrera}`)
            .then(result => result.json())
            .then(data => {
              console.log("Cargando pensum");
              console.log(data);
              let pensumCarrera = data.pensum;
              let pensumContainer = document.getElementById("pensumCarrera");
              pensumContainer.innerHTML = "";
      
                let materiaDiv = document.createElement("div");
                materiaDiv.className = "materia";
                materiaDiv.innerHTML = `
                <h3>Materias: ${data.carrera.pensum[0][0].materia}, ${data.carrera.pensum[0][0].nivel} </h3>
                <h3> Materia: ${data.carrera.pensum[0][1].materia}, ${data.carrera.pensum[0][1].nivel} </h3>
               

                `;
                pensumContainer.appendChild(materiaDiv);
             
            })
            .catch(error => {
              console.log("Ha ocurrido un error al obtener el pensum:", error);
            });
        }
      
        cargarCarreras();
    });
    
  