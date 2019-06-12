$(document).ready(function(){

	//$("#consultar").on('click', function(){
		
		$.getJSON("http://localhost:8090/v1/publicaciones").done(function(datos){
			$("#cuerpo").html("");
			$.each(datos, function(indice, valor){
				//console.log("esta entrando we "+datos)
				//$("#tabla ul").append("<li>" +valor.id+valor.url+"</li>");
				var tr = `<tr>
				        	<td>`+valor.id+`</td>
				        	<td>`+`<a href="`+valor.url+`">` +valor.url+` </a></td>
				        	<td>`+valor.titulo+`</td>
				        	<td>`+valor.contenido+`</td>
				        	</tr>`;
				        $("#cuerpo").append(tr)
			})

		});

	});

//});