const usuario = {
  nombre: "Adrián",
  edad: 20,
  email: "usuario@test.com",
  password: "123456",
};

function verificarEdad(usuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      usuario.edad >= 18
        ? resolve(usuario)
        : reject("El usuario no es mayor de edad");
    }, 1000);
  });
}
function verificarEmail(usuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      usuario.email.includes("@")
        ? resolve(usuario)
        : reject("El email no es válido");
    }, 1000);
  });
}
function verificarPassword(usuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const passwordRegex = /^(?=.*[0-9]).{6,}$/;
      passwordRegex.test(usuario.password)
        ? resolve(usuario)
        : reject(
            "La contraseña debe de tener al menos 6 caracteres y un número"
          );
    }, 1000);
  });
}
verificarEdad(usuario)
  .then((resolve) => {
    console.log("La edad es correcta");
    return verificarEmail(resolve);
  })
  .then((resolve) => {
    console.log("El email es correcto");
    return verificarPassword(resolve);
  })
  .then((resolve) => {
    console.log("La contraseña es correcta");
  })
  .catch((error) => console.error(error));
