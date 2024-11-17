const paginasVistas = new WeakSet();
function registrarPagina(pagina) {
  if (!paginasVistas.has(pagina)) {
    paginasVistas.add(pagina);
    console.log("visitando pagina: "+pagina.url);
  } else {
    console.log("ya has visitado "+pagina.url );
  }
}

function crearPagina(url) {
  return { url: url };
}

let pagina1 = crearPagina('google.com');
let pagina2 = crearPagina('marca.es');

registrarPagina(pagina1); 
registrarPagina(pagina2); 
registrarPagina(pagina1);


