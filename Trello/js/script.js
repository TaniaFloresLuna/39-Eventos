
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
//variables universales.
var primeraCaja = document.getElementById("primeraCaja");
var tarjeta = document.getElementById("tarjeta");
var inputBoton = document.createElement('input');
var boton = document.createElement("button");

//función para el input
function hacerInput(){

	inputBoton.setAttribute('type', 'input');
	var contenido = document.createElement('li');
	contenido.appendChild(inputBoton);
	document.body.appendChild(contenido);

}
hacerInput();

//Función crear del botón
function hacerBoton(){

boton.setAttribute("class", "btn");
boton.appendChild(document.createTextNode("Guardar"));
}
hacerBoton();

function ponerBoton(){
document.body.appendChild(boton);
}
ponerBoton();


//Función primera tarjeta.
function tarjetaTrello (){

	if ( inputBoton === "" ||  inputBoton === null ||  inputBoton === " ") {
		alert("No se agrego nada");
	} else{
		//Esto hace un div en forma de lista
		var renglon = document.createElement('div');
		//Aquí se le da la clase renglón al div
		renglon.setAttribute('class', 'row');
		//Aquí se crea el texto que formara una lista
		var tarea = document.createElement('li');
		//Aquí el div se convierte en hijo de lista
		tarea.appendChild(renglon);
		//Aquí se crea el texto como hijo de lista
		tarea.appendChild(document.createTextNode(inputBoton.value));
		//Aquí se da ubicación de lista
		document.body.appendChild(tarea);
	}
	//crear bote de basura
	var buttonGliphy = document.createElement("button");
	var spanButtonGliphy = document.createElement("span");
	spanButtonGliphy.setAttribute("class", "fa fa-trash-o");
	buttonGliphy.appendChild(spanButtonGliphy);
	tarea.appendChild(buttonGliphy);
	document.body.appendChild(tarea);

	//función remover elemento con bote de basura
	function pulseTrashBox(){
		tarea.parentNode.removeChild(tarea);
	}
	buttonGliphy.onclick = pulseTrashBox;
}

//On reset inservible!
//document.getElementsByTagName("input").onreset = function() {clickearBotn()};
	
//Función, hacer click al botón
function clickearBotn(){
	tarjetaTrello();
	hacerInput();
	ponerBoton();
}
boton.onclick = clickearBotn;



