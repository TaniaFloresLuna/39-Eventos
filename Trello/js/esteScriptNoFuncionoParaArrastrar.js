
//variables universales.
var primeraCaja = document.createElement("div");
var tarjeta = document.createElement("textarea");
var inputBoton = document.createElement('input');
var boton = document.createElement("button");
var renglon = document.createElement('div');
var titulo = document.createElement('h2');
var primario = document.createElement('li');


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

//Función para poner el botón
function ponerBoton(){
	document.body.appendChild(boton);
}

//Función primera tarjeta.
function tarjetaTrello (){

	if ( inputBoton.value === "" ||  inputBoton.value === null) {
		alert("No se agrego nada");
	} else{
		//Aquí se le da la clase renglón al div
		renglon.setAttribute('class', 'row');
		//Aquí el div se convierte en hijo de lista
		titulo.appendChild(renglon);
		//Aquí se crea el texto como hijo de lista
		titulo.appendChild(document.createTextNode(inputBoton.value));
		//Aquí se da ubicación de lista
		document.body.appendChild(titulo);
	}
}	



function hacerTablero(){
	//Aquí se crea el texto que formara una lista

	//Aquí el div se convierte en hijo de lista
	primario.appendChild(renglon);
	//Aquí se crea el texto como hijo de lista
	primario.appendChild(document.createTextNode(inputBoton.value));
	//Aquí se da ubicación de lista
	document.body.appendChild(primario);
	//Función hacer un bote de basurita
	//crear bote de basura	

}




function crearsegundoTrash(){
	var buttonSecondGliphy = document.createElement("button");
	var spanButtonSecondGliphy = document.createElement("span");
	spanButtonSecondGliphy.setAttribute("class", "fa fa-trash-o");
	buttonSecondGliphy.appendChild(spanButtonSecondGliphy);
	titulo.appendChild(buttonSecondGliphy);
	document.body.appendChild(titulo);


	//función remover elemento con bote de basura
	function pulseSecondTrashBox(){
		titulo.parentNode.removeChild(titulo);
	}
	buttonSecondGliphy.onclick = pulseSecondTrashBox;
}

//Crea bote para la lista
function crearTrash(){
	var buttonGliphy = document.createElement("button");
	var spanButtonGliphy = document.createElement("span");
	spanButtonGliphy.setAttribute("class", "fa fa-trash-o");
	buttonGliphy.appendChild(spanButtonGliphy);
	primario.appendChild(buttonGliphy);
	document.body.appendChild(primario);

	//función remover elemento con bote de basura
	function pulseTrashBox(){
		primario.parentNode.removeChild(primario);
	}
	buttonGliphy.onclick = pulseTrashBox;


}

//Función que solo hace el titulo y el bote de basura
function primerTitulo(){
		tarjetaTrello();
		crearsegundoTrash();
		hacerInput();
		hacerBoton()
		ponerBoton();
}

inputBoton.onkeypress=function(e){
	tecla=(inputBoton) ? event.keyCode : e.which;
	if(tecla==13){
			primerTitulo();
  	}

}



function clickearBotn(){
	hacerInput();
	ponerBoton();
	hacerTablero();
	crearTrash();	
}
boton.onclick = clickearBotn;

//On reset inservible!
//document.getElementsByTagName("input").onreset = function() {clickearBotn()};
	
//Función, hacer click al botón


/*
    function arrastrar(e) {
	    e.dataTransfer.setData("text", this.id);
	    this.style.opacity = "0.4";
    }

    function arrastrarSobre(e) {
	    e.preventDefault();
	    this.style.backgroundColor = "#FF00FF";
    }
        function soltar(e) {
	    var idArrastrado = e.dataTransfer.getData("text");
	    var elementoArrastrado = document.getElementById(idArrastrado);
	    var temporal = this.innerHTML;
	    this.insertBefore(elementoArrastrado, this.childNodes[1])
	    this.style.backgroundColor = "#E2E4E6";
	    this.classList.add("rotateIn", "animated");
    }

    function terminaArrastrar(e) {
	    this.style.opacity = null;

    }

    function dejaArrastrar(e) {
	   this.style.backgroundColor = "#E2E4E6";
	   this.classList.remove("rotateIn", "animated");
    }

}; */


//variables universales.
var primeraCaja = document.createElement("div");
var tarjeta = document.createElement("textarea");
var inputBoton = document.createElement('input');
var boton = document.createElement("button");
var renglon = document.createElement('div');
var titulo = document.createElement('h2');
var primario = document.createElement('li');

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

//Función para poner el botón

function ponerBoton(){
	document.body.appendChild(boton);
}

//Función primera tarjeta.
function tarjetaTrello (){

	if ( inputBoton.value === "" ||  inputBoton.value === null) {
		alert("No se agrego nada");
	} else{
		//Aquí se le da la clase renglón al div
		renglon.setAttribute('class', 'row');
		//Aquí el div se convierte en hijo de lista
		titulo.appendChild(renglon);
		//Aquí se crea el texto como hijo de lista
		titulo.appendChild(document.createTextNode(inputBoton.value));
		//Aquí se da ubicación de lista
		document.body.appendChild(titulo);
	}
}	



function hacerTablero(){

	//Aquí el div se convierte en hijo de lista
	primario.appendChild(renglon);
	//Aquí se crea el texto como hijo de lista
	primario.appendChild(document.createTextNode(inputBoton.value));
	//Aquí se da ubicación de lista
	document.body.appendChild(primario);
}




function crearsegundoTrash(){
	var buttonSecondGliphy = document.createElement("button");
	var spanButtonSecondGliphy = document.createElement("span");
	spanButtonSecondGliphy.setAttribute("class", "fa fa-trash-o");
	buttonSecondGliphy.appendChild(spanButtonSecondGliphy);
	titulo.appendChild(buttonSecondGliphy);
	document.body.appendChild(titulo);


	//función remover elemento con bote de basura
	function pulseSecondTrashBox(){
		titulo.parentNode.removeChild(titulo);
	}
	buttonSecondGliphy.onclick = pulseSecondTrashBox;
}

//Crea bote para la lista
function crearTrash(){
	var buttonGliphy = document.createElement("button");
	var spanButtonGliphy = document.createElement("span");
	spanButtonGliphy.setAttribute("class", "fa fa-trash-o");
	buttonGliphy.appendChild(spanButtonGliphy);
	primario.appendChild(buttonGliphy);
	document.body.appendChild(primario);

	//función remover elemento con bote de basura
	function pulseTrashBox(){
		primario.parentNode.removeChild(primario);
	}
	buttonGliphy.onclick = pulseTrashBox;


}

//Función que solo hace el titulo y el bote de basura
function primerTitulo(){
		tarjetaTrello();
		crearsegundoTrash();
		hacerInput();
		hacerBoton()
		ponerBoton();
}

inputBoton.onkeypress=function(e){
	tecla=(inputBoton) ? event.keyCode : e.which;
	if(tecla==13){
			primerTitulo();
  	}

}



function clickearBotn(){
	hacerInput();
	ponerBoton();
	hacerTablero();
	crearTrash();	
}
boton.onclick = clickearBotn;