window.addEventListener("load", function() {
	var btn = document.getElementById("btn");
	var tarea = document.getElementById("inputPrimero").value;
	var tareas = document.getElementById("tareas");
	var formulario = document.getElementById("form");
	var creado = false;
	btn.addEventListener("click", function(e) {
		e.preventDefault();
		agregarTarea();
	});
	function agregarTarea() {
		document.getElementById("btn").classList.add("ocultar");
		document.getElementById("tareas").classList.remove("ocultar");
		document.getElementById("btn").classList.add("ocultar");
	}
	var guardarTarea = document.getElementById("btnGuardar");
	guardarTarea.addEventListener("click", function(e) {
		e.preventDefault();
		crearTarea();
	});
	function crearTarea(){
		var tarea = document.getElementById("inputPrimero").value;
		var titulo = document.createElement("div");
		titulo.innerHTML = tarea;
		titulo.classList.add("titulo");
		tareas.appendChild(titulo);
		var agregarNewTarea= document.createElement("div");
		agregarNewTarea.innerHTML = "Agrega una nueva tarjeta";	agregarNewTarea.classList.add("agregarNuevaTarea");
		tareas.appendChild(agregarNewTarea);
		formulario.classList.add("ocultar");

		agregarNewTarea.addEventListener("click", function() {
			anadirText(this);	
		});
    }
	function guardarActividad(boton){
		var textarea = boton.previousSibling;
		var agregarNewTarea = textarea.previousSibling;
		var texto=textarea.value;
		var tareaText = document.createElement("div");
		tareaText.classList.add("tareaNueva");
		tareaText.innerHTML=texto;
		tareas.insertBefore(tareaText,agregarNewTarea);
		textarea.style.display="none";
		boton.style.display="none";
		agregarNewTarea.style.display="block";
	};
	function anadirText(agregarNewTarea){
		var boton, textarea;
		if (!creado) {
			textarea = document.createElement("textarea");
			textarea.classList.add("textarea");
			boton = document.createElement("div");
			tareas.appendChild(textarea);
			tareas.appendChild(boton);
			boton.classList.add("btnAnadir");
			boton.innerHTML="Añadir";
			boton.addEventListener("click", function() {
			guardarActividad(this);
			});
			creado = true;
		} else {
			textarea = document.querySelector(".textarea");
			boton = document.querySelector(".btnAnadir");
		}
		agregarNewTarea.style.display = "none";
		textarea.value="";
		textarea.style.display="block";
		boton.style.display="inline-block";
		
	}
});