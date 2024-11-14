//ejercicio 27

const formulario = document.getElementById("basicForm");
formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  const fileInput = document.getElementById("basicFileInput");
  const archivo = fileInput.files[0];
  const mensajeError = document.getElementById("basicError");
  mensajeError.textContent = "";

//validacion de si existe un archivo
  if (!archivo) {
    mensajeError.textContent = "Error, selecciona un archivo";
    return;
  }

  // validacion del tamano: 1MB
  const maxSize = 1024 * 1024; // 1MB
  if (archivo.size > maxSize) {
    mensajeError.textContent = "El fichero es demasiado grande";
    return;
  }

  // validacion tipoFichero
  const tiposPermitidos = ["image/jpeg", "image/png", "image/gif"];
  if (!tiposPermitidos.includes(archivo.type)) {
    mensajeError.textContent = "Tipo de fichero no permitido";
    return;
  }

  // Leer el archivo
  const reader = new FileReader();
  reader.onloadend = function () {
    const base64String = reader.result.replace("data:", "").replace(/^.+,/, ""); //convertimos el archivo a base64
    const jsonData = {
      fileName: archivo.name,
      filetype: archivo.type,
      fileData: base64String,
    };
    fetch("./subidas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData), //enviamos los datos como JSON
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error("Error en la carga del archivo:", error);
        mensajeError.textContent = "Error al cargar el archivo. Intentalo de nuevo.";
      });
  };
});




