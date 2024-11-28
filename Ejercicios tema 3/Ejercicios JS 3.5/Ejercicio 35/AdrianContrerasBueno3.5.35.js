let puntos = 0;

function ruleta() {
  const miliSegundosRandom = (Math.floor(Math.random() * 3) + 1) * 1000;
  const promesa = new Promise((resolve, reject) => {
    console.log("La ruleta está girando");
    setTimeout(() => {
      const numeroAleatorio = Math.floor(Math.random() * 11);
      if (numeroAleatorio > 0 && numeroAleatorio <= 10) {
        puntos += numeroAleatorio;
        resolve("TENEMOS UN GANADOR!!, has ganado " + numeroAleatorio);
      } else {
        reject("La ruleta se ha atascado");
      }
    }, miliSegundosRandom);
  });
  promesa
    .then((aceptada) => {
      console.log(aceptada);
      console.log("Llevas "+ puntos +" puntos");
    })
    .catch((error) => {
      console.error(error);
    });
}
for (let i = 0; i < 4; i++) {
    ruleta();
}
