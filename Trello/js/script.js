var primeraCaja = document.getElementById("primeraCaja");
var tarjeta = document.getElementById("tarjeta");

/*
tarjeta.onkeypress=function(e){
	tecla=(tarjeta) ? event.keyCode : e.which;
	if(tecla==13){
		var nuevaTarjeta = document.createElement("div");
		nuevaTarjeta.appendChild(document.createTextNode(tarjeta.value));
		primeraCaja.appendChild(nuevaTarjeta);
  	}
}
*/

function tarjetaTrello (){

		if (tarjeta == "" || tarjeta == null || tarjeta == " ") {
			console.log("No se agrego nada");
		} else{

			var renglon = document.createElement('div');
			//Aquí se le da el tipo y la forma al checkbox
			renglon.setAttribute('class', 'row');
			//Aquí se crea el texto que formara una lista
			var tarea = document.createElement('li');
			//Aquí el checbok se convierte en hijo de lista
			tarea.appendChild(renglon);
			//Aquí se crea el texto como hijo de lista
			tarea.appendChild(document.createTextNode(tarjeta));
			//Aquí se da ubicación de lista
			document.body.appendChild(tarea);


			//Variable que crea el checkbox
			var inputBoton = document.createElement('input');
			//Aquí se le da el tipo y la forma al checkbox
			inputBoton.setAttribute('type', 'input');
			//Aquí se crea el texto que formara una lista
			var contenido = document.createElement('li');
			//Aquí el checbok se convierte en hijo de lista
			contenido.appendChild(inputBoton);
			//Aquí se crea el texto como hijo de lista
			//Aquí se da ubicación de lista
			primeraCaja.appendChild(contenido);

			var boton = document.createElement("button");
			boton.setAttribute("class", "btn");
			boton.appendChild(document.createTextNode("Guardar"));
			document.body.appendChild(boton);

		}
	}

