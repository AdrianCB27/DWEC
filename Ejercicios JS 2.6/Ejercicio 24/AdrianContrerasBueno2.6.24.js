let tareas = [];
let nuevaTarea,tareaSeleccionada,opcionUsuario;
do {
opcionUsuario = parseInt(prompt("Elija una opción:\n1.Agregar Tarea\n2.Modificar Tarea\n3.Eliminar Tarea\n4.Ver Tareas\n5.Salir"));
  switch (opcionUsuario) {
    case 1:
      nuevaTarea = prompt("Ingrese el nombre de la nueva tarea");
      tareas.push(nuevaTarea);
      break;
    case 2:
        for (let i=1;i<=tareas.length;i++) {
            console.log(i+"."+tareas[i-1])
        }

        tareaSeleccionada=parseInt(prompt("Seleccione el número de la tarea a modificar"));
        for (let i=0;i<tareas.length;i++) {
           if ((tareaSeleccionada-1)==i) {
            let modificacion=prompt("Escriba la modificación");
            tareas[i]=modificacion;
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
             tareas.splice(i,1);
             break;
            }
         }
      break;
    case 4:
        for (const tarea of tareas) {
            console.log(tarea)
        }
      break;
    default:
      console.log("Saliendo...");
      break;
  }
} while (opcionUsuario < 5);
