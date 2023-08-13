document.addEventListener('DOMContentLoaded', function() {
    // Requerimiento 1: Obtener áreas de estudio y mostrarlas en el HTML
    fetch('https://api.cadif1.com/areadeestudio')
      .then(response => response.json())
      .then(data => {
        const areasDeEstudio = data.areas;
        const areasContainer = document.getElementById('areasDeEstudio');
  
        areasDeEstudio.forEach(area => {
          const areaDiv = document.createElement('div');
          areaDiv.className = 'area';
          areaDiv.dataset.id = area.id;
          areaDiv.textContent = area.nombre;
          areasContainer.appendChild(areaDiv);
        });
      })
      .catch(error => console.error('Error:', error));
  
    // Requerimiento 2: Mostrar cursos de un área al hacer clic en ella
    document.addEventListener('click', function(event) {
      if (event.target && event.target.classList.contains('area')) {
        const idAreaDeEstudio = event.target.dataset.id;
        obtenerCursosPorArea(idAreaDeEstudio);
      }
    });
  
    function obtenerCursosPorArea(idArea) {
      fetch(`https://api.cadif1.com/curso/de_un_area/${idArea}`)
        .then(response => response.json())
        .then(data => {
          const cursosDeArea = data.cursos;
          const cursosContainer = document.getElementById('cursosDeArea');
          cursosContainer.innerHTML = '';
  
          cursosDeArea.forEach(curso => {
            const cursoDiv = document.createElement('div');
            cursoDiv.className = 'curso';
            cursoDiv.dataset.id = curso.id;
            cursoDiv.textContent = curso.nombre;
            cursosContainer.appendChild(cursoDiv);
          });
        })
        .catch(error => console.error('Error:', error));
    }
  
    // Requerimiento 3: Mostrar niveles de un curso al hacer clic en él
    document.addEventListener('click', function(event) {
      if (event.target && event.target.classList.contains('curso')) {
        const idCurso = event.target.dataset.id;
        obtenerNivelesDeCurso(idCurso);
      }
    });
  
    function obtenerNivelesDeCurso(idCurso) {
      fetch(`https://api.cadif1.com/curso/${idCurso}`)
        .then(response => response.json())
        .then(data => {
          const nivelesDeCurso = data.niveles;
          const nivelesContainer = document.getElementById('nivelesDeCurso');
          nivelesContainer.innerHTML = '';
  
          nivelesDeCurso.forEach(nivel => {
            const nivelDiv = document.createElement('div');
            nivelDiv.className = 'nivel';
            nivelDiv.textContent = nivel.nombre;
            nivelesContainer.appendChild(nivelDiv);
          });
        })
        .catch(error => console.error('Error:', error));
    }
  });