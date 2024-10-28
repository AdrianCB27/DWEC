fetch("AdrianContrerasBueno3.1.4.json")
  .then((response) => response.json())
  .then((data) => {
    let productos=data;
   productos.forEach(producto => {
    producto.precio>100 ? console.log(producto):""; //uso un ternario para mostrar solo los que tienen mas de 100 en su precio
   });

  }).catch((error) => console.error(error));;
