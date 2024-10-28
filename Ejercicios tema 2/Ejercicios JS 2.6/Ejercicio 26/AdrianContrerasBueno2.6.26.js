/*
Replicar el juego de Simón dice. 
El programa debe mostrar una secuencia de colores,
 agregando por cada ronda que pase otro color más.
 El usuario debe ingresar los colores de la secuencia uno por uno.
Si falla la secuencia (es decir, si ingresa algún color mal)
, el programa debe terminar. Los colores posibles son:
rojo, azul, verde y amarillo. Hay dos variantes posibles:
 o el juego continúa indefinidamente hasta que se falla la secuencia,
 y muestra cuántas rondas se sobrevivió, o el programa permite elegir al principio cuántas rondas se desea hacer,
y mostrar un mensaje de victoria si se llega a esa cantidad de rondas sin errarle a la secuencia.

*/
let rondas=0;
let colores=["rojo","verde","azul","amarillo"];
let coloresEnviados, colorRandom,secuencia=[],cadenaAMostrar="",secuenciaEnviada=[];


do{
    colorRandom=Math.floor(Math.random()*4); // Generamos un número aleatorio entre 0 y 4 para sacar un color random
    secuencia.push(colores[colorRandom]);
    cadenaAMostrar=""; // reiniciamos la cadena a mostrar para sobreescribirla
    for (let i = 0; i < secuencia.length; i++)  cadenaAMostrar+=secuencia[i]+"\n"; // Escribimos en una cadena el array que vamos a ir mostrando
    alert(cadenaAMostrar); 
    coloresEnviados=(prompt("Ingrese los colores separados por un espacio"));
    secuenciaEnviada=coloresEnviados.split(" "); //La función split devuelve un array de elementos separados por un caracter, en este caso el espacio
    rondas++;


}while(secuencia.join(" ") === secuenciaEnviada.join(" ")); //el método join lo que hace es convertir un array en cadena, separados por un espacio
alert("Has perdido, has durado "+ rondas +" rondas")
