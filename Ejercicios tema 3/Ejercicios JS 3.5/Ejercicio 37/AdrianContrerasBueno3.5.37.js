function carrera() {
    console.log("Se ha iniciado la carrera");
    const coches= ["🚗","🏎️","🚙","🚓"];
    const promesas=coches.map((coche)=>cocheGanador(coche));
    Promise.race(promesas).then((ganador)=>console.log("El ganador es "+ganador));
    Promise.all(promesas).then(resulados=>{ //No salen bien los resultados y no entiendo por qué
        console.log("El orden es el siguiente");
        for (let i = 0; i < resulados.length; i++) {
            console.log(i+". - "+resulados[i]);
        }
    });
}

function cocheGanador(coche) {
    return new Promise((resolve, reject) => {
        let tiempoBase=Math.floor(Math.random()*4)*1000;
        let tiempoAñadido=0;
        const eventos=["lluvia","avería","nada"];
        const numeroRandomEvento=Math.floor(Math.random()*eventos.length);
        const eventoRandom=eventos[numeroRandomEvento];
        switch (eventoRandom){
            case "lluvia":
                tiempoAñadido+=1500;
                break;
            case "averia":
                tiempoAñadido+=3000;
                break;
            default:
                tiempoAñadido=0;
                break;

        }
        setTimeout(() => {
            resolve(coche);
        }, tiempoBase+tiempoAñadido);
    });
    
}
carrera()