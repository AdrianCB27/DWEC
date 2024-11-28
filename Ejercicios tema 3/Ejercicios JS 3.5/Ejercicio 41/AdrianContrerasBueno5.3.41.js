class Mesa {
  constructor(id) {
    this.id = id;
    this.ocupada = false;
  }
}

class SistemaReservas {
  constructor(numMesas) {
    this.mesas = [];
    this.mesasOcupadas=[];
    for (let i = 0; i < numMesas; i++) {
      this.mesas.push(new Mesa(i + 1)); //añadimos las mesas con este bucle, segun el numero de mesas que se metan en el constructor se hara dinamicamente
    }
  }

  verificarDisponibilidad() {
    for (let mesa of this.mesas) {
      if (!mesa.ocupada) {
        return mesa;
      }
    }
    return false;
  }

  reservarMesa(cliente) {
    return new Promise((resolve, reject) => {
      const mesaDisponible = this.verificarDisponibilidad();
      if (mesaDisponible) {
        mesaDisponible.ocupada = true;
        this.mesasOcupadas.push(mesaDisponible.id + "ahora esta ocupada");
        resolve("Reserva confirmada para " + cliente + " en la mesa " + mesaDisponible.id);
      } else {
        reject("No hay mesas disponibles para el cliente " + cliente + ".");
      }
    });
  }

  mostrarEstadoMesas() {
    const estadoMesas = document.getElementById("estadoMesas");
    estadoMesas.innerHTML="";
    this.mesas.forEach((mesa) => {
      const p = document.createElement("p");

      if (mesa.ocupada) {
        p.innerHTML= "Mesa "+ mesa.id +" ocupada"
      }else{
        p.innerHTML = "Mesa " + mesa.id;
      }
      estadoMesas.appendChild(p);

    });
    if (this.mesas.length===this.mesasOcupadas.length) { //en el momento en el que se llena el array muestra que se han llenado las mesas
      const llenas= document.createElement("h3");
      llenas.innerHTML="Se han llenado todas las mesas"
      estadoMesas.appendChild(llenas);
      
    }

  }

}

const sistemaReservas = new SistemaReservas(10);

document.getElementById("reservarMesa").addEventListener("click", () => {
  const clienteRandom = "Cliente " + Math.floor(Math.random() * 120);
  sistemaReservas.reservarMesa(clienteRandom)
    .then(console.log) //como tenemos el resolve aqui no hay que poner nada en el console log
    .catch(console.error)//igual en el catch con el reject
    .finally(() => sistemaReservas.mostrarEstadoMesas());
});

sistemaReservas.mostrarEstadoMesas();
