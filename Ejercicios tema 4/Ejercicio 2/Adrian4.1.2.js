document.addEventListener("DOMContentLoaded", () => {
    fuente=localStorage.getItem("fuente");
    tema=localStorage.getItem("tema");

    nombreUsuario=localStorage.getItem("nombreUsuario");
    emailUsuario=localStorage.getItem("emailUsuario");

    if (nombreUsuario!=null &&emailUsuario!=null) {
        ponerUsuario(nombreUsuario,emailUsuario);

    }
    cambiarFuente(fuente);
    cambiarTema(tema);

  });
function savePreferences() {
  const preferenciaTema = document.getElementById("themeSelector").value;
  const preferenciaFuente = document.getElementById("fontSizeSelector").value;
  cambiarTema(preferenciaTema);
  cambiarFuente(preferenciaFuente);

  localStorage.setItem("tema",preferenciaTema);
  localStorage.setItem("fuente",preferenciaFuente);

}

function cambiarTema(preferenciaTema) {
  switch (preferenciaTema) {
    case "light":
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
      break;
    case "dark":
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");

      break;
  }
}
function cambiarFuente(preferenciaFuente) {
  switch (preferenciaFuente) {
    case "small":
      document.body.style.fontSize = "12px";
      break;
    case "medium":
      document.body.style.fontSize = "medium"; //es la que viene por defecto
      break;
    case "large":
      document.body.style.fontSize = "20px";
      break;
  }
}
function resetPreferences(){
    localStorage.removeItem("fuente");
    localStorage.removeItem("tema");
    location.reload() //recargamos la página para no tener que hacerlo manualmente
}

function saveProfile() {
   const valorNombre=document.getElementById("username").value;
   const valorEmail=document.getElementById("email").value;
   const usuario={
       nombre:valorNombre,
       email:valorEmail
   }
   ponerUsuario(usuario.nombre,usuario.email);

    localStorage.setItem("nombreUsuario",usuario.nombre);
    localStorage.setItem("emailUsuario",usuario.email);

}
function ponerUsuario(nombre,email){
    
    const nuevoElemento=document.createElement("h2");
    nuevoElemento.textContent= `${nombre} ${email}`;
    document.body.appendChild(nuevoElemento);

}
