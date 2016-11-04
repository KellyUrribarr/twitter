function agregarLista() {
	//guarda contenido de caja-agregar html
	var guardarContenido = document.getElementById('caja-agregar').value;
	//crear un div
	var crearDiv = document.createElement('div');
	//var crearLabel = document.createElement('label');
	var crearSpan = document.createElement('span');
	var crearInput = document.createElement('input');
	var crearA = document.createElement('a');
	var crearI = document.createElement('i');
	var crearCorazon = document.createElement('i');
	var crearPadre = document.getElementById('contenedor-agregar');

	//atributos --- dandole valor
	crearInput.setAttribute('type','checkbox');

	var creartexto = document.createTextNode(guardarContenido);
	//asignacion de padres/hijos
	
	
	//crearLabel.appendChild(crearInput);
	crearSpan.appendChild(creartexto);
	crearDiv.appendChild(crearInput);
	crearDiv.appendChild(crearSpan);
	
	crearPadre.appendChild(crearDiv);
}