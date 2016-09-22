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
		titulo.innerHTML = tarea;
		titulo.classList.add("titulo");
		tareas.appendChild(titulo);
		var agregarNewTarea= document.createElement("a");
		agregarNewTarea.innerHTML = "Agrega una nueva tarea";
		agregarNewTarea.setAttribute("href","#");
		agregarNewTarea.classList.add("agregarNuevaTarea");
		tareas.appendChild(agregarNewTarea);
		document.getElementById("form").classList.add("ocultar");
    }
});