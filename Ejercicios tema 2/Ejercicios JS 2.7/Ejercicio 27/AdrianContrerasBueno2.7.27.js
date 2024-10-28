let palabrasAhorcado = [
  "programacion",
  "javascript",
  "desarrollo",
  "servidor",
  "cliente",
  "codigo",
  "funcion",
  "variable",
  "ordenador",
  "teclado",
  "navegador",
  "internet",
  "aplicacion",
  "frontend",
  "backend",
  "base",
  "datos",
  "archivo",
  "consola",
  "objetos",
  "lenguaje",
];
let oportunidades = 6; //declaración de las variables que se van a usar
let letraEnviada = "";
let victoria = false;

let palabraOculta =palabrasAhorcado[Math.floor(Math.random() * palabrasAhorcado.length)];
let palabraAsteriscos = "*".repeat(palabraOculta.length);
let arrayAsteriscos = [...palabraAsteriscos]; //convertimos en array ambas palabras, tienen la misma longitud
let arrayPalabraOculta = [...palabraOculta];


do {
  letraEnviada = prompt(
    "La palabra actual es " +mostrarPalabraActual(arrayAsteriscos) +"\nTe quedan " +oportunidades +" oportunidades" +"\nEscriba una letra: ");
  if (letraEnviada == palabraOculta) {
    victoria = true;
    alert("Has ganado! La palabra era " + palabraOculta);
  }
  if (!comprobarLetra(letraEnviada, arrayAsteriscos, arrayPalabraOculta)) {
    oportunidades--;
  } else {
    if (arrayAsteriscos.join("") == arrayPalabraOculta.join("")) {
      victoria = true;
      alert("Has ganado! La palabra era " + palabraOculta);
    }
  }
} while (oportunidades > 0 && !victoria);
if (oportunidades==0) alert("Has perdido, la palabra era"+palabraOculta);

function comprobarLetra(letraEnviada, arrayAsteriscos, arrayPalabraOculta) { //como los arrays se pasan por referencia podemos trabajar directamente con ellos
  if (arrayPalabraOculta.includes(letraEnviada)) { // Para comprobar si hay más de una coincidencia
    for (let i = 0; i < arrayPalabraOculta.length; i++) {
      if (letraEnviada == arrayPalabraOculta[i]) { 
        arrayAsteriscos[i] = letraEnviada; //sustituimos en los asteriscos la letra o letras que han sido acertadas
      }
    }
    return true;
  } else return false;
}
function mostrarPalabraActual(arrayAsteriscos) { 
  let palabraAsteriscosActual = "";
  arrayAsteriscos.forEach((element) => (palabraAsteriscosActual += element));
  return palabraAsteriscosActual;
}
