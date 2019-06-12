function agregar(){

    var data = JSON.stringify({
     	"activo":true,
     	"contrasena":$("#contra").val(),
     	"rol":3,
     	"nombre":document.getElementById("nombre").value
    });

    $.ajax({
        url : 'http://localhost:8090/v1/usuario',
        data : data,
        method : 'put', //en este caso
        dataType : 'json',
        headers: {
        	"content-type": "application/json",
    		"cache-control": "no-cache"
        },
        success : function(response){
            console.log("datos enviados");
            alert("usuario agregado");
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
