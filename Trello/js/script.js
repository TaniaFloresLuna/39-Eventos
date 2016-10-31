window.addEventListener("load", function() {
	var contenedoTarjeta = document.getElementById("contenedoTarjeta");
	var lista = document.getElementById("lista");
	var listaNueva = document.getElementById("listaNueva");
	var formulario = document.getElementById("formulario");
	var inputed = document.getElementById("inputed");
	var boton = document.getElementById("boton");
	var i =1;

	listaNueva.addEventListener("click", function(e){
		e.preventDefault();
  		listaNueva.style.display = "none";
        activarCampo();
  		inputed.focus();
  		lista.classList.add("lsta");
	});

	boton.addEventListener("click", function(){
		formulario.style.display = "none";
		agregarMensaje(inputed, this);
		insertarContenedor();
		inputed.value = "";

		lista.addEventListener("drop", soltar);
		lista.addEventListener("dragover", arrastrarSobre);
		lista.addEventListener("dragleave", dejaArrastrar);
	});

	function activarCampo(){
	     formulario.style.display = "block";
	}
	
	function agregarMensaje(texto, boton){
		var padre = boton.parentElement.parentElement; 
		var tarjeta = document.createElement("div");
		var newItem = document.createElement("div");
		
		newItem.innerText = texto.value;
		padre.insertBefore(newItem, padre.childNodes[0]);
		newItem.classList.add("nuevalsta");

		tarjeta.innerText = "Añadir una tarjeta..."
		padre.appendChild(tarjeta);
		tarjeta.classList.add("tarjeta2");


		tarjeta.addEventListener("click", function(){
			tarjeta.style.display = "none";
			anadirTarjeta(padre);
		});
	}

	function insertarContenedor(){
		var nuevoCampo = document.createElement("div");
		contenedoTarjeta.appendChild(nuevoCampo);

		nuevoCampo.insertBefore(listaNueva, nuevoCampo.childNodes[0]);
		nuevoCampo.insertBefore(formulario, nuevoCampo.childNodes[0]);
		
		nuevoCampo.classList.add("nuevocampo");
		nuevoCampo.classList.add("lsta");

		listaNueva.style.display = "block";

		nuevoCampo.addEventListener("drop", soltar);
		nuevoCampo.addEventListener("dragover", arrastrarSobre);
		nuevoCampo.addEventListener("dragleave", dejaArrastrar);

	}

	function anadirTarjeta(padre){
		var card = document.createElement("form");
		var textArea = document.createElement("textarea");
		var btnAnadir = document.createElement("button");

		card.insertBefore(textArea, card.childNodes[0]);
		card.insertBefore(btnAnadir, card.childNodes[1]);
		padre.appendChild(card);

		btnAnadir.type = "button";
		btnAnadir.innerText = "Añadir";

		card.classList.add("card");
		textArea.classList.add("textarea");
		btnAnadir.classList.add("boton");

		textArea.focus();

		btnAnadir.addEventListener("click",function(){
			card.style.display = "none";
			botonTarjeta(padre,textArea);
		});
	}

	function botonTarjeta(padre,textArea){
		var campoTarjeta = document.createElement("div");
		campoTarjeta.innerText = textArea.value;
		padre.insertBefore(campoTarjeta, padre.lastChild);

		campoTarjeta.classList.add("tarjeta1");
		campoTarjeta.setAttribute("id", "card.1"+i);
		campoTarjeta.setAttribute("draggable","true");
		padre.appendChild(campoTarjeta.previousSibling);
		padre.lastChild.style.display = "block";

		campoTarjeta.addEventListener("dragstart", arrastrar);
		campoTarjeta.addEventListener("dragend", terminaArrastrar);
		i++;

	}


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

});