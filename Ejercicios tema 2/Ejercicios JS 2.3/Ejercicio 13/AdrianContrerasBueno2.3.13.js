let contraseniaReal = "Colacado";
let contraseniaAdivinar = prompt("Intente adivinar la contraseña");
let intentos = 2;
do {
  if (contraseniaAdivinar != contraseniaReal) {
    intentos--;
    alert("Has fallado, te quedan " + (intentos+1) + " intentos");
    contraseniaAdivinar = prompt("Intente adivinar la contraseña");
  }
} while (intentos > 0 && contraseniaAdivinar != contraseniaReal);
if (contraseniaAdivinar==contraseniaReal) {
    alert("Has acertado la contraseña")
}else alert("Te has quedado sin intentos")
