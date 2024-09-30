let tareas = [];
let nuevaTarea,tareaSeleccionada,opcionUsuario;
do {
opcionUsuario = parseInt(prompt("Elija una opción:\n1.Agregar Tarea\n2.Modificar Tarea\n3.Eliminar Tarea\n4.Ver Tareas\n5.Salir"));
  switch (opcionUsuario) {
    case 1:
      nuevaTarea = prompt("Ingrese el nombre de la nueva tarea");
      tareas.push(nuevaTarea); //Usamos el método push para añadir una nueva tarea al array de tareas
      break;
    case 2:
        for (let i=1;i<=tareas.length;i++) console.log(i+"."+tareas[i-1]); //
        tareaSeleccionada=parseInt(prompt("Seleccione el número de la tarea a modificar"));
        for (let i=0;i<tareas.length;i++) {
           if ((tareaSeleccionada-1)==i) {
            let modificacion=prompt("Escriba la modificación");
            tareas[i]=modificacion; //Sobreescribimos el elemento que vamos a modificar
           }
        }
      break;
    case 3:
        for (let i=1;i<=tareas.length;i++) {
            console.log(i+"."+tareas[i-1])
        }
        tareaSeleccionada=prompt("Seleccione el número de la tarea a eliminar");
        for (let i=0;i<tareas.length;i++) {
            if (tareaSeleccionada-1==i) {
             tareas.splice(i,1); //Con el metodo splice podemos borrar un elemento seleccionado según su posición
             break;
            }
         }
      break;
    case 4:
        for (const tarea of tareas) {
            console.log(tarea) //Con este forof podemos recorrer el array de tareas de forma sencilla para mostrarlo por consola
        }
      break;
    default:
      console.log("Saliendo...");
      break;
  }
} while (opcionUsuario < 5);
