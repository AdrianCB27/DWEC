let colores = ["rojo", "verde", "azul", "amarillo"];
let opcion1;
let modo = "clasico";
let historial = [];

do {
  opcion1 = menuPrincipal();
  switch (opcion1) {
    case "1":
      iniciarJuego(modo, colores, historial);
      break;
    case "2":
      do {
        modo = cambiarModo();
        if (modo != "clasico" && modo != "supervivencia") {
          alert("Selecciona uno de los modos indicados: 'clasico' o 'supervivencia'");
        }
      } while (modo != "clasico" && modo != "supervivencia");
      break;
    case "3":
      colores = cambiarColores();
      break;
    case "4":
      verHistorial(historial);
      break;
    case "5":
      alert("¡Hasta luego!");
      break;
    default:
      alert("Selecciona una opción válida!");
      break;
  }
} while (opcion1 !== "5");

function menuPrincipal() {
  return prompt(
    "1. Iniciar Juego\n2. Cambiar Modo\n3. Cambiar Colores\n4. Ver historial de partidas\n5. Salir"
  );
}

function iniciarJuego(modo, colores, historial) {
  let coloresEnviados,
    colorRandom,
    secuencia = [],
    cadenaAMostrar = "",
    secuenciaEnviada = [];
  let rondas = 0;
  let victoria = false;

  switch (modo) {
    case "clasico":
      let numeroRondas = parseInt(prompt("¿Cuántas rondas quieres jugar?"));
      for (let i = 0; i < numeroRondas; i++) {
        if (secuencia.join(" ") === secuenciaEnviada.join(" ")) {
          colorRandom = Math.floor(Math.random() * colores.length);
          secuencia.push(colores[colorRandom]);
          cadenaAMostrar = secuencia.join("\n");
          alert(cadenaAMostrar);
          coloresEnviados = prompt("Ingrese los colores separados por un espacio");
          secuenciaEnviada = coloresEnviados.split(" ");
          rondas++;
        } else {
          break;
        }
      }
      if (rondas === numeroRondas) victoria = true;
      victoria
        ? alert("¡Has ganado!")
        : alert("Has perdido, has durado " + rondas + " rondas");
      historial.push(
        "MODO CLASICO: " +
          colores.length +
          " colores, " +
          rondas +
          " rondas, " +
          (victoria ? "Partida ganada" : "Partida perdida")
      );
      break;

    case "supervivencia":
      do {
        colorRandom = Math.floor(Math.random() * colores.length);
        secuencia.push(colores[colorRandom]);
        cadenaAMostrar = secuencia.join("\n");
        alert(cadenaAMostrar);
        coloresEnviados = prompt("Ingrese los colores separados por un espacio");
        secuenciaEnviada = coloresEnviados.split(" ");
        rondas++;
      } while (secuencia.join(" ") === secuenciaEnviada.join(" "));
      historial.push(
        "MODO SUPERVIVENCIA: " +
          colores.length +
          " colores, " +
          rondas +
          " rondas"
      );
      alert("Has perdido, has durado " + rondas + " rondas");
      break;

    default:
      break;
  }
}

function cambiarColores() {
  let coloresSeleccionados = prompt(
    "Escriba con qué colores quiere jugar separados por un espacio"
  );
  return coloresSeleccionados.split(" ");
}

function cambiarModo() {
  return prompt("Seleccione un modo: 'clasico' o 'supervivencia'");
}

function verHistorial(historial) {
  if (historial.length === 0) {
    alert("No hay partidas en el historial.");
  } else {
    let cadena = historial.join("\n");
    alert(cadena);
  }
}
