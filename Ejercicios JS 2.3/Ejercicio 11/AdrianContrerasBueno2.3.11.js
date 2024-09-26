let numeroSecreto=13;
let numeroEnviado=parseFloat(prompt("Intente adivinar el número secreto"));

if (numeroEnviado===numeroSecreto) {
    alert("Enhorabuena, has adivinado el número secreto");
}else if(numeroEnviado<numeroSecreto){
    alert("El número enviado es menor que el número secreto, lo siento, pruebe de nuevo");
}
else alert("El número enviado es mayor que el número secreto, lo siento, pruebe de nuevo")