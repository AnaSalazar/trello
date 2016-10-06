window.addEventListener("load", function() {
	var contenedor = document.getElementById("contenedor");
	var btn = document.getElementById("btn");
	var tarea = document.getElementById("inputPrimero");
	var formulario = document.getElementById("contenedor-formulario");
	var tareas = document.getElementById("tareas");
	var form = document.getElementById("form");
	form.style.display="none";
	btn.addEventListener("click",agregarTarea);
	function agregarTarea(e) {
		e.preventDefault();
		btn.style.display="none";
		form.style.display="inline-block";
		tarea.value= "";
		tarea.focus();
	}
	var guardarTarea = document.getElementById("btnGuardar");
	guardarTarea.addEventListener("click",crearTarea);
	function crearTarea(e){
		e.preventDefault();
		form.style.display="none";
		var tarea = document.getElementById("inputPrimero").value;
		var tareas = document.createElement("div");
		tareas.classList.add("verde");
		var titulo = document.createElement("div");
		titulo.innerHTML = tarea;
		titulo.classList.add("titulo");
		contenedor.insertBefore(tareas, contenedor.lastElementChild);
		tareas.appendChild(titulo);
		var agregarNewTarea= document.createElement("div");
		agregarNewTarea.innerHTML = "Agrega una nueva tarea";	agregarNewTarea.classList.add("agregarNuevaTarea");
		tareas.appendChild(agregarNewTarea);
		var array = document.querySelectorAll(".agregarNuevaTarea");
		btn.style.display="inline-block";
		var newForm = crearFormulario(tareas,agregarNewTarea);
		array[array.length-1].addEventListener("click", function() {
			this.style.display="none";
			this.nextElementSibling.style.display=null;
		});
	}
	function crearFormulario(tareas,a){
		var form = document.createElement("form");
		tareas.appendChild(form);
		var textArea= document.createElement("textarea");
		textArea.classList.add("textarea");
		form.appendChild(textArea);
		var botonGuardarTarea = document.createElement("button");
		botonGuardarTarea.classList.add("btnAnadir");
		botonGuardarTarea.innerHTML= "Guardar";
		form.appendChild(botonGuardarTarea);
		form.style.display="none";
		form.lastElementChild.addEventListener("click", function(e){
			e.preventDefault();
			form.previousElementSibling.style.display=null;
			var contenidoText = document.createElement("div");
			contenidoText.classList.add("tareaNueva");
			contenidoText.innerHTML= textArea.value;
			tareas.insertBefore(contenidoText, a);
			textArea.value="";
			form.style.display="none";
		});
	}
});
