function agregarLista() {
	//guarda contenido de caja-agregar html
	var guardarContenido = document.getElementById('caja-agregar').value;
	//crear un div
	var crearDiv = document.createElement('div');
	var crearLabel = document.createElement('label');
	var crearInput = document.createElement('input');
	var crearA = document.createElement('a');
	var crearI = document.createElement('i');

	//atributos --- dandole valor
	crearInput.setAtribute('type', 'checkbox');

	var creartexto = document.createTextNode(guardarContenido);
}