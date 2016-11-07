var idLista = 0;
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
	crearInput.setAttribute("class", "tachar");
	crearCorazon.setAttribute('class','fa fa-heart');
	crearI.setAttribute('class','fa fa-trash');
	crearDiv.setAttribute("id", idLista);
	crearBasurero.setAttribute("onclick", "borrar("+ idLista+ ")");

	//agregar clases
	crearInput.classList.add("col-xs-1");
	crearSpan.classList.add("col-xs-9");
	crearCorazon.classList.add("col-xs-1");
	crearBasurero.classList.add("col-xs-1");

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

	//funcion tachar
	crearInput.addEventListener("click", function(){
		crearSpan.classList.toggle("tachar");
	});

	//funcion color rojo
	crearA.addEventListener("click", function(){
		crearCorazon.classList.toggle("rojo");
	});
}

function borrar(idLista){
 var element = document.getElementById(idLista);
 element.parentNode.removeChild(element);
 }