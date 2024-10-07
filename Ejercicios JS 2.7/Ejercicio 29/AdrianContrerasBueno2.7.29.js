const tablero = [
    ['🌱', '🌱', '🍎', '🌱', '🌱'],
    ['🍎', '🧱', '🌱', '🧱', '🍎'],
    ['🌱', '🧱', '🐍', '🌱', '🌱'],
    ['🌱', '🍎', '🌱', '🧱', '🌱'],
    ['🍎', '🌱', '🌱', '🍎', '🧱'],
    ['🌱', '🌱', '🌱', '🌱', '🍎'],
];

let posicionVibora = { x: 2, y: 2 };
let manzanas = 6;
let juegoTerminado = false;

function mostrarTablero(tablero) {
    console.clear();
    for (let i = 0; i < tablero.length; i++) {
        console.log(tablero[i].join(' '));
    }
}

function obtenerDireccion() {
    return prompt("Ingrese la dirección (ARRIBA, DERECHA, ABAJO, IZQUIERDA): ").toUpperCase();
}

function calcularNuevaPosicion(posicion, direccion, tablero) {
    let nuevaX = posicion.x;
    let nuevaY = posicion.y;

    if (direccion === 'ARRIBA') nuevaX--;
    else if (direccion === 'DERECHA') nuevaY++;
    else if (direccion === 'ABAJO') nuevaX++;
    else if (direccion === 'IZQUIERDA') nuevaY--;

    if (nuevaX < 0) nuevaX = tablero.length - 1;
    else if (nuevaX >= tablero.length) nuevaX = 0;
    if (nuevaY < 0) nuevaY = tablero[0].length - 1;
    else if (nuevaY >= tablero[0].length) nuevaY = 0;

    return { x: nuevaX, y: nuevaY };
}

function moverVibora(tablero, posicionActual, nuevaPosicion) {
    if (tablero[nuevaPosicion.x][nuevaPosicion.y] !== '🧱') {
        if (tablero[nuevaPosicion.x][nuevaPosicion.y] === '🍎') manzanas--;

        tablero[posicionActual.x][posicionActual.y] = '🌱';
        posicionActual.x = nuevaPosicion.x;
        posicionActual.y = nuevaPosicion.y;
        tablero[posicionActual.x][posicionActual.y] = '🐍';
    }
}

function verificarJuegoTerminado(manzanas) {
    if (manzanas === 0) {
        console.log("Has ganado, no quedan más manzanas.");
        return true;
    }
    return false;
}

while (!juegoTerminado) {
    mostrarTablero(tablero);
    let direccion = obtenerDireccion();
    let nuevaPosicion = calcularNuevaPosicion(posicionVibora, direccion, tablero);
    moverVibora(tablero, posicionVibora, nuevaPosicion);
    juegoTerminado = verificarJuegoTerminado(manzanas);
}
