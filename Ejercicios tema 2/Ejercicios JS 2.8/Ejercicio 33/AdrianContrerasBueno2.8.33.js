let estudiante={
    nombre:"Gabi",
    edad:21,
    curso:"2DAW"
}
delete(estudiante.edad);
for (const propiedad in estudiante) {
   console.log(estudiante[propiedad]);
}