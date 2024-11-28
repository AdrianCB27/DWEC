class Cola {
    arrayDescargas=[];

    addDescarga(descarga){
        if (this.arrayDescargas.length<2) {
            this.arrayDescargas.push(descarga);
            console.log("Añadida la descarga "+ descarga.nombre+ " a la cola");
        }else{
            console.log("No se pueden añadir más descargas a la cola");
        }
    }

    completarDescarga(descarga){
        this.arrayDescargas=this.arrayDescargas.forEach(element => {
            if (element.nombre==descarga.nombre) {
                console.log(element.nombre + " en progreso...");
                element.mostrarProgreso()
                setTimeout(() => {
                    element.completada=true;
                    console.log(element.nombre + " completada");
                }, element.tiempoDescarga);
            }
        });
    }
    cancelarDescarga(descarga) {
        this.arrayDescargas = this.arrayDescargas.filter((element) => {
            if (element.nombre === descarga.nombre) {
                console.log("Descarga " + element.nombre + " cancelada");
                element.cancelada = true;
                return false; 
            }
            return true;
        });
    }
    
    pausarYReanudarDescarga(descarga){
        this.arrayDescargas=this.arrayDescargas.forEach(element => {
            if (element.nombre==descarga.nombre) {
                if(element.pausada){
                    console.log("Reanudando descarga "+ element.nombre);
                    element.pausada=false;
                }else{
                    console.log("Pausada la descarga "+ element.nombre);
                    element.pausada=true;
                }
            }
        });
    }
}
class Descarga {
    nombre;
    completada=false;
    cancelada=false
    pausada=false;
    tiempoDescarga=Math.floor(Math.random()*10)*1000
    constructor(nombre) {
        this.nombre=nombre;
    }
    mostrarProgreso() {
        const intervalo = 100; 
        const tiempoTotal = this.tiempoDescarga; 
        const pasos = tiempoTotal / intervalo; 
    
        for (let i = 1; i <= pasos; i++) {
            setTimeout(() => {
                const porcentajeProgreso = (i / pasos) * 100;
                console.log(`Progreso: ${porcentajeProgreso.toFixed(2)}%`);
            }, i * intervalo);
        }
    }
    
    
}

descarga1=new Descarga("lote_juegos_piratas.torrent");
descarga2=new Descarga("Batman_2.avi");
descarga3=new Descarga("El_niño_con_el_pijama_de_rayas.epub")
colaDeDescargas=new Cola();

colaDeDescargas.addDescarga(descarga1);
colaDeDescargas.addDescarga(descarga2);
colaDeDescargas.addDescarga(descarga3);
colaDeDescargas.cancelarDescarga(descarga2);
colaDeDescargas.completarDescarga(descarga1)



