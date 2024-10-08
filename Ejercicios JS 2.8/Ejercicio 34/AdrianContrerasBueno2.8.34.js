const empresa = {
    nombre: "NTER",
    ubicacion: "Jaen",
    empleados: {
        empleado1: {
            nombre: "Carlos",
            puesto: "Desarrollador Web",
            salario: 50000
        },
    }
};

console.log(empresa.empleados.empleado1.nombre); 
console.log(empresa.empleados.empleado1.puesto);
console.log(empresa.empleados.empleado1.salario);
