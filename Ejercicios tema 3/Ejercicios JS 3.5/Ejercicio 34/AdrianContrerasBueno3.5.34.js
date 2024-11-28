const temporizador = () => {
  console.log("Inicio del programa");
  setTimeout(() => {
    console.log("Han pasado dos segundos");
  }, 2000);
  console.log("Fin del programa");


};
temporizador();
//El orden es el siguiente: primero comienza el programa, después finaliza el programa y por último muestra que han pasado dos segundos, esto es debido a la asincronía.
const temporizador2= ()=>{
    for (let i = 1; i <= 5; i++) {
        setTimeout(() => {
        console.log(i);
        }, i*1000);
    }
   
}
temporizador2()

