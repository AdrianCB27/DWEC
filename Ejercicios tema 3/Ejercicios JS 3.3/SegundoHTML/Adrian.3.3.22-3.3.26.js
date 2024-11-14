//ejercicio 22
let seleccionados = [];

function agregarNodoArbol() {
  const arbol = document.getElementById("treeRoot"); //obtenemos el elemento raiz del arbol
  const nuevoNodo = document.createElement("button"); //creamos un nuevo nodo como boton

  let numeroRandom = Math.floor(Math.random() * 250); //generamos un numero aleatorio para el id del boton
  nuevoNodo.id = numeroRandom; //asignamos el id al nuevo nodo

  nuevoNodo.onclick = () => seleccionar(nuevoNodo); //agregamos el manejador de eventos para seleccion

  nuevoNodo.innerHTML = "Boton " + numeroRandom; //establecemos el texto del boton
  arbol.appendChild(nuevoNodo); //anadimos el nuevo nodo al arbol
}

function seleccionar(nodo) {
  nodo.style.backgroundColor = "yellow"; //cambiamos el color de fondo del nodo seleccionado
  seleccionados.push(nodo.id); //anadimos el id del nodo seleccionado a la lista de seleccionados
}

function eliminarNodoSeleccionado() {
  seleccionados.forEach((elemento) => {
    const boton = document.getElementById(elemento); //obtenemos el boton por su id
    if (boton) {
      boton.remove(); //eliminamos el boton si existe
    }
  });
}


//Ejercicio 23

const azul = document.getElementById("draggable");
let esMouseDown = false;
let offsetX, offsetY;

// evento al presionar el raton en el elemento
azul.addEventListener("mousedown", (evento) => {
  esMouseDown = true;
  offsetX = evento.clientX - azul.offsetLeft; //calculamos la distancia entre el raton y el div azul
  offsetY = evento.clientY - azul.offsetTop;
});

// evento de  mover el ratón
document.addEventListener("mousemove", (e) => {
  if (esMouseDown) {
    azul.style.left = `${e.clientX - offsetX}px`; //movemos el div cambiando los estilos
    azul.style.top = `${e.clientY - offsetY}px`;
  }
});

// Evento al soltar el ratón
document.addEventListener("mouseup", () => {
  esMouseDown = false;
});

// Ejercicio 24
const formulario = document.getElementById("validationForm");
const nombre = document.getElementById("nombre");
const nombreError = document.getElementById("nombreError");
const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
const telefono = document.getElementById("telefono");
const telefonoError = document.getElementById("telefonoError");

//Validamos el nombre
nombre.addEventListener("input", (event) => { // con el evento input se ejecuta la funcion con cada caracter que se escribe
  if (event.target.value.length <= 3) {
    nombreError.textContent = "El nombre debe de tener más de 3 caracteres";
  } else {
    nombreError.textContent = "";
  }
  
});

email.addEventListener("input", (event) => {
  const regexEmail = /^(\+?\d{1,3})?[-. (]*\d{1,3}[-. )]*\d{3}[-. ]*\d{3}$/;
  if (!regexEmail.test(event.target.value)) { //probamos si passa el test de email y si no lo pasa lo comunicamos
    emailError.textContent =
      "El email debe de tener el formato correcto";
  } else {
    emailError.textContent = "";
  }
});
telefono.addEventListener("input", (event) => {
  
  if (event.target.value.length!=9) {//probamos si el telefono tiene 9 digitos y si no los tiene lo comunicamos
    telefonoError.textContent =
      "El teléfono debe de tener 9 digitos";
  } else {
    telefonoError.textContent = "";
  }
});



//Ejercicio 26
let generaId=1;
function agregarBotonDinamico() {
  const contenedorBotones=document.getElementById("buttonContainer"); //cogemos el contenedor para despues añadir el nuevo botón
  const nuevoBoton=document.createElement("button"); //creamos un botón al que le asignamos un id unico
  nuevoBoton.id=generaId++;
  nuevoBoton.onclick =() =>  mostrarId(nuevoBoton); //le agregamos al boton un "onclick" que llama a la funcion que muestra su id
  contenedorBotones.appendChild(nuevoBoton); //agregamos el botón al contenedor de botones


  
}
function mostrarId(nuevoBoton){ //funcion que muestra el id del boton en su contenido 
  nuevoBoton.innerHTML=nuevoBoton.id;
}

