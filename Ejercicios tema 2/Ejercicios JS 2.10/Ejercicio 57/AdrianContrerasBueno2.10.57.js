let diccionario=new Map();
diccionario.set("producto","Teclado");
diccionario.set("precio",30);
diccionario.set("cantidad",10);

for (const elemento of diccionario) { //usamos un forof para mostrar todos los elementos del map en la consola
    console.log(elemento);
}