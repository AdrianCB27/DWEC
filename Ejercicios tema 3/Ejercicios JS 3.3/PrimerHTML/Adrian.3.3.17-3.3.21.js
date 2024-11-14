//ejercicio 17
function cambiarTexto() {
    const elementoTexto = document.getElementById("text1"); //obtenemos el elemento
    elementoTexto.textContent = "Texto modificado mediante JavaScript!"; //cambiamos su contenido
}

//ejercicio 18
function cambiarEstilo() {
    const elementoEstilo = document.getElementById("text2");
    elementoEstilo.style.color = "red"; //cambiamos el color del texto
    elementoEstilo.style.fontSize = "20px"; //cambiamos el tamano de la fuente
    elementoEstilo.style.fontWeight = "bold"; //cambiamos el grosor de la fuente
}

//ejercicio 19
function toggleVisibilidad() {
    const elementoVisible = document.getElementById("text3");
    elementoVisible.classList.toggle("hidden"); //alternamos la clase hidden
    elementoVisible.classList.toggle("normal"); //alternamos la clase normal
}

//ejercicio 20
let numeroElemento = 1; //creaamos la variable fuera de la funcion para que se vaya actualizando
function agregarElemento() {
    const lista = document.getElementById("lista");
    const entrada = document.createElement("li");
    entrada.textContent = "Elemento " + numeroElemento++; //creamos y actualizamos el contenido del nuevo elemento
    lista.appendChild(entrada); //anadimos el nuevo elemento a la lista
}

//ejercicio 21
const area = document.getElementById("mouseArea");
area.addEventListener("mousemove", function(event) {
    var x = event.clientX; //obtenemos la coordenada X del raton
    var y = event.clientY; //obtenemos la coordenada Y del raton
    area.textContent = "Coordenadas del raton: " + x + " " + y; //mostramos las coordenadas en el area
});
