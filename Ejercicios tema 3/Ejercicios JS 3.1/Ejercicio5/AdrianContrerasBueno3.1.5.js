const formularioDatos = {
    nombre: "Juan Pérez",
    correo: "juan.perez@example.com",
    edad: 25
  };

  const objetoJson=JSON.stringify(formularioDatos); //transformamos el objeto a JSON
  fetch("https://api.ejemplo.com/enviar",{
    method:"POST",
    headers:{
        'Content-Type':'application/json'
    },
    body:objetoJson
  }).then(response=>response.json()).then(data => {
    console.log("Exito: " + data);
  }).catch(error => {
    console.error("Error "+error )
  })