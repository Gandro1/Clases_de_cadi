// Requerimiento 1: Obtener usuarios de la primera página y mostrarlos en DIV
$(document).ready(function() {
    $.ajax({
      url: 'https://reqres.in/api/users?page=1',
      method: 'GET',
      success: function(data) {
        const usersContainer = $('#users-container');
        data.data.forEach(user => {
          const div = $('<div></div>');
          const p = $('<p></p>').text(user.first_name);
          const img = $('<img>').attr('src', user.avatar);
          div.append(p);
          div.append(img);
          usersContainer.append(div);
        });
      }
    });
  });
  
  // Requerimiento 2: Cargar usuarios de la segunda página al hacer clic en el botón
  $('#load-users-btn').on('click', function() {
    $.ajax({
      url: 'https://reqres.in/api/users?page=2',
      method: 'GET',
      success: function(data) {
        const usersList = $('#users-list');
        usersList.empty(); // Limpiar la lista antes de agregar nuevos usuarios
        data.data.forEach(user => {
          const li = $('<li></li>');
          const p = $('<p></p>').text(user.email);
          const img = $('<img>').attr('src', user.avatar);
          li.append(p);
          li.append(img);
          usersList.append(li);
        });
      }
    });
  });
  
  // Requerimiento 3: Cargar usuario con id "10" al hacer clic en el botón
  $('#load-user-btn').on('click', function() {
    $.getJSON('https://reqres.in/api/users/10', function(data) {
      const userDiv = $('#user-info');
      const p = $('<p></p>').text(data.data.first_name + ' ' + data.data.last_name);
      const img = $('<img>').attr('src', data.data.avatar);
      userDiv.empty(); // Limpiar el DIV antes de agregar nuevos datos
      userDiv.append(p);
      userDiv.append(img);
    });
  });
  
  // Requerimiento 4: Mostrar loading al hacer peticiones AJAX
  $(document).ajaxStart(function() {
    $('#loading-container').show();
  });
  
  $(document).ajaxStop(function() {
    $('#loading-container').hide();
  });
  
  // Requerimiento 5: Mostrar mensaje de error en caso de problemas con la solicitud AJAX
  $(document).ajaxError(function(event, jqxhr, settings, thrownError) {
    alert('Error en la solicitud AJAX: ' + thrownError);
  });
      