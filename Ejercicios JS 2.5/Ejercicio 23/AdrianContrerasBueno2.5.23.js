let menu =
  "Elija una opción:\n1.Agregar una canción\n2.Buscar canciones\n3.Listar artistas\n4.Salir";
let opcion;
let canciones = [],
  artistas = [];
do {
  opcion = prompt(menu);
  switch (opcion) {
    case "1":
      agregarCancion();
      break;
    case "2":
      buscarCanciones();
      break;
    case "3":
      listarArtistas();
      break;

    default:
      break;
  }
} while (opcion);

function agregarCancion() {
  let nombreCancion = prompt(
    "Escriba el nombre de la canción y el artista separado por una coma."
  );
  let nombreCancionArray = nombreCancion.split(",");
  canciones.push(nombreCancion);
  artistas.push(nombreCancionArray[1]);
}

function buscarCanciones() {
  console.clear();
  let bandera = false;
  let nombreArtista = prompt(
    "Escriba el nombre del artista del que quiere ver sus canciones: "
  );
  for (let i = 0; i < canciones.length; i++) {
    if (canciones[i].includes(nombreArtista)) {
      console.log(canciones[i]);
      bandera = true;
    }
  }
  if (!bandera) console.log("No hay canciones de ese artista en la lista");
}
function listarArtistas() {
  console.clear();
  for (let i=0;i<artistas.length;i++) {
    console.log(artistas[i] + "\n");
  }
}
