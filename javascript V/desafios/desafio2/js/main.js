var xhtre = new XMLHttpRequest();
document.addEventListener('DOMContentLoaded', function() {
url = "https://reqres.in/api/users?page=1";
xhtre.open("GET",url,true);
xhtre.send();


xhtre.onload = function(){
    if(xhtre.status >= 200 && xhtre.status <= 400){
        console.log("OK");
        console.log(this.responseText);
        const data = JSON.parse(xhtre.responseText);
        const container = document.getElementById("container");
        data.data.forEach(user => {
            const div = document.createElement('div');
            const p = document.createElement('p');
            const img = document.createElement('img');
            p.textContent = user.first_name;
            img.src = user.avatar;
            div.appendChild(p);
            div.appendChild(img);
            container.appendChild(div);
        })
    }else{
        console.log("error");
    }
}
    xhtre.onerror = function() {
    console.error('Error en la solicitud AJAX');
  };


});

$("#btn").click(function(){
    console.log("________________________________________________________________________");
    $.ajax({
        url: 'https://reqres.in/api/users?page=2',
        method: 'GET',
        success: function(data){
            const userList = $("#users-list");
            userList.empty();
            console.log(data);
            data.data.forEach(user => {
                const li = $("<li></li>");
                const p = $("<p></p>").text(user.email);
                const img = $("<img>").attr("src", user.avatar);
                li.append(p);
                li.append(img);
                userList.append(li);
            })
        }
    })  
    })
  
    $('#btn2').on('click', function() {
        $.getJSON('https://reqres.in/api/users/10', function(data) {
          const userDiv = $('#user-info');
          const p = $('<p></p>').text(data.data.first_name + ' ' + data.data.last_name);
          const img = $('<img>').attr('src', data.data.avatar);
          userDiv.empty(); 
          userDiv.append(p);
          userDiv.append(img);
        });
      });

$(document).ajaxStart(function() {
    $('#loading-container').show();
});

$(document).ajaxStop(function() {
    $('#loading-container').hide();
});


$(document).ajaxError(function(event, jqxhr, settings, thrownError) {
    alert('Error en la solicitud AJAX: ' + thrownError);
});
// $("#boton").click(function(){
    
// })
