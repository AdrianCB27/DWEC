fetch("AdrianContrerasBueno3.1.6.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach(persona => {
      console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}, Nota: ${persona.nota}`);
    });
  })
  .catch((error) => {
    console.error("Error: " + error);
  });
