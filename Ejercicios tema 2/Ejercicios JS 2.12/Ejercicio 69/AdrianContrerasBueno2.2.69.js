class Persona {
    constructor(nombre, edad, trabajo) {
        this.nombre = nombre;
        this.edad = edad;
        this.trabajo = trabajo;
    }

    cambiarTrabajo(nuevoTrabajo) {
        this.trabajo = nuevoTrabajo;
    }
}
const persona1 = new Persona("Adrián", 21, "Informático");
const persona2 = new Persona("Alex", 20, "Doctor");
const persona3 = new Persona("Gabi", 21, "Dibujante");

persona1.cambiarTrabajo("Arquitecto");
persona2.cambiarTrabajo("Jugador profesional de Lol");
persona3.cambiarTrabajo("Cajera de supermercado");

console.log(persona1.nombre + " ahora trabaja de " + persona1.trabajo);
console.log(persona2.nombre + " ahora trabaja de " + persona2.trabajo);
console.log(persona3.nombre + " ahora trabaja de " + persona3.trabajo);
