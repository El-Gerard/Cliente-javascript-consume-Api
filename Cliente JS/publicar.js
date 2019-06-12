function publicar(){

    /*var data = JSON.stringify({
     	"activo":true,
     	"contrasena":$("#contra").val(),
     	"rol":3,
     	"nombre":document.getElementById("nombre").value
    });*/

    var data = JSON.stringify({
      "url": $("#url").val(),
      "titulo": $("#titulo").val(),
      "contenido": $("#contenido").val()
    });

    $.ajax({
        url : 'http://localhost:8090/v1/publicacion',
        data : data,
        method : 'put', //en este caso
        dataType : 'json',
        headers: {
        	"content-type": "application/json",
    		  "cache-control": "no-cache"
        },
        success : function(response){
            console.log("datos enviados");
        },
        error: function(error){
            console.log("hubo un error");
        }
    });

    //redireccionar();
    setTimeout ("redireccionar()", 3000);
}

function redireccionar(){
  //window.location="http://www.google.com";
  window.location="Index.html";
  console.log("deberia redireccionar")
} 