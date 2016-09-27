window.addEventListener("load", function() {
	var btn = document.getElementById("btn");
	var tarea = document.getElementById("inputPrimero").value;
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
		var tareas = document.getElementById("tareas");
    	var titulo = document.createElement("div");
		var textarea = document.createElement("textarea");
		var boton = document.createElement("div");
		titulo.innerHTML = tarea;
		titulo.classList.add("titulo");
		tareas.appendChild(titulo);
		var agregarNewTarea= document.createElement("div");
		agregarNewTarea.innerHTML = "Agrega una nueva tarea";	agregarNewTarea.classList.add("agregarNuevaTarea");
		tareas.appendChild(agregarNewTarea);
		document.getElementById("form").classList.add("ocultar");
		var agg = document.querySelector(".agregarNuevaTarea");
		agg.addEventListener("click", function(e) {
			anadirText();
			document.getElementById("tareas").lastElementChild.addEventListener("click", function() {
				guardarActividad();
			});
			function guardarActividad(){
				var texto=textarea.value;
				var tareaText = document.createElement("div");
				tareaText.innerHTML=texto;
				tareas.appendChild(tareaText);
				tareaText.classList.add("tareaNueva");
				textarea.style.display="none";
				boton.style.display="none";
				var agregarNewTarea= document.createElement("div");
				agregarNewTarea.innerHTML = "Agrega una nueva tarea";	agregarNewTarea.classList.add("agregarNuevaTarea");
				tareas.appendChild(agregarNewTarea);
			};
		});
		function anadirText(){
			agg.style.display = "none";
			tareas.appendChild(textarea);
			textarea.classList.add("textarea");
			tareas.appendChild(boton);
			boton.classList.add("btnAnadir");
			boton.innerHTML="Añadir";
		}
    }
});












