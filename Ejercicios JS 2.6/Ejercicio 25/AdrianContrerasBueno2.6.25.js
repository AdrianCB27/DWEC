let vidaJugadora = 100,
  vidaMonstruo = 64,
  cantidadPociones = 2,
  ataqueMaxJugadora = 24,
  ataqueMaxMonstruo = 16,
  curacionMaxPocion = 35;
  let opcion;

do {
  alert("Tu vida es " + vidaJugadora);
  opcion = parseInt(prompt("Elija una opción\n1.Atacar al monstruo\n2.Tomar Poción\n3.Buscar Poción\n4.Salir")); // Menú principal

  switch (opcion) {
    case 1:
      let dmgAlMonstruo = Math.floor(Math.random() * ataqueMaxJugadora) + 1; // Genera el número del daño que va a hacer la jugadora al monstruo.
      vidaMonstruo -= dmgAlMonstruo;
      alert("Atacas al monstruo y le haces " + dmgAlMonstruo + " de daño\n" + "Al monstruo le quedan " + vidaMonstruo + " puntos de vida");

      let dmgAlJugador = Math.floor(Math.random() * ataqueMaxMonstruo) + 1; // Genera el número del daño que va a hacer el monstruo a la jugadora
      vidaJugadora -= dmgAlJugador;
      alert("El monstruo te ataca y recibes " + dmgAlJugador + " de daño");
      alert("Te quedan " + vidaJugadora + " puntos de vida");
      break;
    case 2:
      if (cantidadPociones > 0) {
        let cura = Math.floor(Math.random() * curacionMaxPocion) + 1; // Genera el número de puntos de vida que va a curar la poción
        vidaJugadora += cura; // Suma la curación
        cantidadPociones--; // Decrementa la cantidad de pociones
        alert("Te has curado " + cura + " puntos de vida");
      } else {
        alert("No te quedan pociones");
      }
      break;
    case 3:
      let numeroRandom = Math.floor(Math.random() * 4) + 1;
      if (numeroRandom == 1) {
        cantidadPociones++;
        alert("¡Has encontrado una poción!");
      } else {
        alert("No has encontrado ninguna poción");
      }
      break;
    default:
      alert("Saliendo...");
      break;
  }
} while (opcion < 4 && vidaJugadora > 0 && vidaMonstruo > 0);
