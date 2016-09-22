window.addEventListener("load", function() {
	var btn = document.getElementById("btn");
	btn.addEventListener("click", function() {
		agregarTarea();
	});
	function agregarTarea() {
		document.getElementById("btn").classList.add("ocultar");
		document.getElementById("tareas").classList.remove("ocultar");
		document.getElementById("btn").classList.add("ocultar");
		}
});