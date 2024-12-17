async function addFilasFetch() {
  const tbody1 = document.getElementById("tbody1");
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonObtenido = await respuesta.json();

  jsonObtenido.forEach((usuario) => {
    const fila = document.createElement("tr");
    const celdaID = document.createElement("td");
    celdaID.textContent = usuario.id;

    const celdaNombre = document.createElement("td");
    celdaNombre.textContent = usuario.name;

    const celdaEmail = document.createElement("td");
    celdaEmail.textContent = usuario.email;

    const celdaAcciones = document.createElement("td"); 
    celdaAcciones.textContent = usuario.website;//he puesto el website porque no se a que se refiere con "acciones";
    fila.appendChild(celdaID);
    fila.appendChild(celdaNombre);
    fila.appendChild(celdaEmail);
    fila.appendChild(celdaAcciones);
    tbody1.appendChild(fila);
  });
}
async function addFilasAxios() {
    try {
        const tbody2 = document.getElementById("tbody2");
        const respuestaJson = await axios.get("https://jsonplaceholder.typicode.com/users");
        const arrayDatos=respuestaJson.data; //importante este paso ya que si no no nos detecta la respuesta como un array como ocurre con fetch

        arrayDatos.forEach((usuario) => {
            const fila = document.createElement("tr");
            const celdaID = document.createElement("td");
            celdaID.textContent = usuario.id;
        
            const celdaNombre = document.createElement("td");
            celdaNombre.textContent = usuario.name;
        
            const celdaEmail = document.createElement("td");
            celdaEmail.textContent = usuario.email;
        
            const celdaAcciones = document.createElement("td"); 
            celdaAcciones.textContent = usuario.website;
            fila.appendChild(celdaID);
            fila.appendChild(celdaNombre);
            fila.appendChild(celdaEmail);
            fila.appendChild(celdaAcciones);
            tbody2.appendChild(fila);
          });
    } catch (error) {
        console.error("Error de axios al fetchear los datos: "+ error)
    }
  
   
  }
addFilasFetch();
addFilasAxios();

const formulario=document.getElementById("userForm");
formulario.addEventListener("submit",(event)=>{
  event.preventDefault(); //gracias a esta linea la página no se recargará automaticamente al mandar el formulario
  const nombre=document.getElementById("name").value;
  const email=document.getElementById("email").value;
  let numeroUsuariosActual=document.getElementById("tbody1").childElementCount; //con esta propiedad podemos ver cuantos elementos hay en el tbody para poner el id automatico
  
  //tabla1
  const tbody1 = document.getElementById("tbody1");
  const fila1 = document.createElement("tr");
  const celdaID1 = document.createElement("td");
  celdaID1.textContent = ++numeroUsuariosActual;

  const celdaNombre1 = document.createElement("td");
  celdaNombre1.textContent = nombre;

  const celdaEmail1 = document.createElement("td");
  celdaEmail1.textContent = email;

  fila1.appendChild(celdaID1);
  fila1.appendChild(celdaNombre1);
  fila1.appendChild(celdaEmail1);
  tbody1.appendChild(fila1);


  //tabla2
  const tbody2 = document.getElementById("tbody2");
  const fila2 = document.createElement("tr");
  const celdaID2 = document.createElement("td");
  celdaID2.textContent = numeroUsuariosActual;

  const celdaNombre2 = document.createElement("td");
  celdaNombre2.textContent = nombre;

  const celdaEmail2 = document.createElement("td");
  celdaEmail2.textContent = email;

  fila2.appendChild(celdaID2);
  fila2.appendChild(celdaNombre2);
  fila2.appendChild(celdaEmail2);
  tbody2.appendChild(fila2);



})
