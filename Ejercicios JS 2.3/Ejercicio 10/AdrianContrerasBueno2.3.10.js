let peliculaElegida = prompt(
  "Selecciona tu película favorita\n1.Kung Fu Panda 3\n2.Interestellar\n3.Barbie y el cascanueces"
);
switch (peliculaElegida) {
  case "1":
    document.write("<h2>Su ticket ha sido emitido</h2>");
    document.write("<img src='kungfupanda.jpg'>");

    break;
  case "2":
    document.write("<h2>Su ticket ha sido emitido</h2>");
    document.write("<img src='interestellar.jpg'>");

    break;
  case "3":
    document.write("<h2>Su ticket ha sido emitido</h2>");
    document.write("<img src='barbie.webp'>");

    break;

  default:
    break;
}
