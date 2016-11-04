function agregarLista() {
	//guarda contenido de caja-agregar html
	var guardarContenido = document.getElementById('caja-agregar').value;
	//crear un div
	var crearDiv = document.createElement('div');
	//var crearLabel = document.createElement('label');
	var crearSpan = document.createElement('span');
	var crearInput = document.createElement('input');
	var crearA = document.createElement('a');
	var crearBasurero = document.createElement('a');
	var crearI = document.createElement('i');
	var crearCorazon = document.createElement('i');


	var crearPadre = document.getElementById('contenedor-agregar');

	//atributos --- dandole valor
	crearInput.setAttribute('type','checkbox');
	crearCorazon.setAttribute('class','fa fa-heart');
	crearI.setAttribute('class','fa fa-trash');

	var creartexto = document.createTextNode(guardarContenido);
	//asignacion de padres/hijos
	crearA.appendChild(crearCorazon);
	crearBasurero.appendChild(crearI);
	
	//crearLabel.appendChild(crearInput);
	crearSpan.appendChild(creartexto);
	crearDiv.appendChild(crearInput);
	crearDiv.appendChild(crearSpan);
	crearDiv.appendChild(crearA);
	//crearDiv.appendChild(crearCorazon);
	crearDiv.appendChild(crearBasurero);
	//crearDiv.appendChild(crearI);
	crearPadre.appendChild(crearDiv);
}