class Empleado {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }

    trabajar() {
        console.log(this.nombre + " está trabajando.");
    }
}

class Gerente extends Empleado {
    dirigir() {
        console.log(this.nombre + " está dirigiendo.");
    }
}

const empleado1 = new Empleado("Alejandro", 1400);
const gerente1 = new Gerente("Gabriela", 1600);

empleado1.trabajar();
gerente1.trabajar();
gerente1.dirigir();
