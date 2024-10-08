let alumnos = [
  { nombre: "Paco", edad: 21, nota: 6.75 },
  { nombre: "Luisa", edad: 23, nota: 9 },
  { nombre: "Gabi", edad: 18, nota: 4.6 }
];

for (const alumno of alumnos) {
    if(alumno.nota>8){
        console.log(alumno.nombre);
    }
}
