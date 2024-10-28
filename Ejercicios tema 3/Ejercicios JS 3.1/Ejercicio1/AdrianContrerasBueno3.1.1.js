fetch("AdrianContrerasBueno3.1.1.json")
  .then((response) => response.json())
  .then((data) => {
    let persona = data; 
    console.log(persona.nombre);
    console.log(persona.edad);
    console.log(persona.ciudad);

  })
  .catch((error) => {
    console.log(error);
  });
