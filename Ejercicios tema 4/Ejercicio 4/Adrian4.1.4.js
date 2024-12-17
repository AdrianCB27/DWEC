class Tarea {
  constructor(titulo, completada = false, prioridad) {
    this.titulo = titulo;
    this.completada = completada;
    this.prioridad = prioridad;
  }

  completarTarea() {
    this.completada = !this.completada;
  }
}

let arrayTareas = [];

function guardarEnLocalStorage() {
  localStorage.setItem("tareas", JSON.stringify(arrayTareas));
}

function cargarDesdeLocalStorage() {
  const tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];
  arrayTareas = tareasGuardadas.map(
    (tarea) => new Tarea(tarea.titulo, tarea.completada, tarea.prioridad)
  );
}

function mostrarTareas() {
  const lista = document.getElementById("taskList");
  lista.innerHTML = "";

  arrayTareas.forEach((tarea, index) => {
    const li = document.createElement("li");
    //con el class cambiamos su clase según su estado
    li.innerHTML = `<span class="${tarea.completada ? "completed" : ""}"> 
          ${tarea.titulo} - Prioridad: ${tarea.prioridad}
        </span>
        <div>
          <button class="botonCompletar">${tarea.completada ? "Desmarcar" : "Marcar"}</button>
          <button class="botonEliminar">Eliminar</button>
        </div>
      `;
    li.querySelector(".botonCompletar").addEventListener("click", () => {
      tarea.completarTarea();
      guardarEnLocalStorage();
      mostrarTareas();
    });
    li.querySelector(".botonEliminar").addEventListener("click", () => {
      arrayTareas.splice(index, 1); //la eliminamos con el indice, no podemos usar pop o shift porque no sabemos si es la primera o la ultima
      guardarEnLocalStorage();
      mostrarTareas();
    });

    lista.appendChild(li);
  });
}

document.getElementById("taskForm").addEventListener("submit", (event) => {
  event.preventDefault(); //para que no se recargue la pagina al hacer submit
  const titulo = document.getElementById("taskInput").value.trim();
  const prioridad = document.getElementById("prioritySelect").value;

  const nuevaTarea = new Tarea(titulo, false, prioridad);
  arrayTareas.push(nuevaTarea);
  guardarEnLocalStorage();
  mostrarTareas();
});

document.addEventListener("DOMContentLoaded", () => {
  cargarDesdeLocalStorage();
  mostrarTareas();
});
