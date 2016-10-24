function checkBox (){

	var texto = document.getElementById("texto").value;
		if (texto == "" || texto == null || texto == " ") {
			console.log("No se agrego nada");
		} else{
			//Variable que crea el checkbox
			var inputed = document.createElement('input');
			//Aquí se le da el tipo y la forma al checkbox
			inputed.setAttribute('type', 'checkbox');
			//Aquí se crea el texto que formara una lista
			var contenido = document.createElement('li');
			//Aquí el checbok se convierte en hijo de lista
			contenido.appendChild(inputed);
			//Aquí se crea el texto como hijo de lista
			contenido.appendChild(document.createTextNode(texto));
			//Aquí se da ubicación de lista
			document.body.appendChild(contenido);
		}

	var buttonGliphy = document.createElement("button");
	var spanButtonGliphy = document.createElement("span");
	spanButtonGliphy.setAttribute("class", "fa fa-trash-o");
	buttonGliphy.appendChild(spanButtonGliphy);
	contenido.appendChild(buttonGliphy);
	document.body.appendChild(contenido);

	function pulseTrashBox(){
		contenido.parentNode.removeChild(contenido);
	}
	buttonGliphy.onclick = pulseTrashBox;

	function pulseInputed(){
			contenido.setAttribute("class", "s");
			
			console.log("jnojnknj");
		}
	inputed.onclick = pulseInputed;


}	texto.value = "";