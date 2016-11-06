//funcion global.
var idLista = 0;

function agregarLista() {
	//guarda contenido de caja-agregar html
	var guardarContenido = document.getElementById('caja-agregar').value;

	//crear un div
	var crearDiv = document.createElement('div');
	var crearSpan = document.createElement('span');
	var crearInput = document.createElement('input');
	var crearA = document.createElement('a');
	var crearBasurero = document.createElement('a');
	var crearI = document.createElement('i');
	var crearCorazon = document.createElement('i');
	var creartexto = document.createTextNode(guardarContenido);
	var crearPadre = document.getElementById('contenedor-agregar');

	//atributos --- dandole valor
	crearInput.setAttribute('type','checkbox');
	crearCorazon.setAttribute('class','fa fa-heart');
	crearI.setAttribute('class','fa fa-trash');
	crearDiv.setAttribute("id", idLista);

	//pasar el id del div en elque esta el boton borrar 
	crearBasurero.setAttribute("onclick", "borrar("+ idLista+ ")");

	//asignacion de padres/hijos
	crearA.appendChild(crearCorazon);
	crearBasurero.appendChild(crearI);	
	crearSpan.appendChild(creartexto);
	crearDiv.appendChild(crearInput);
	crearDiv.appendChild(crearSpan);
	crearDiv.appendChild(crearA);
	crearDiv.appendChild(crearBasurero);
	crearPadre.appendChild(crearDiv);
}

//funcion basurero borrar
function borrar(idLista){
	var element = document.getElementById(idLista);
	element.parentNode.removeChild(element);
}
