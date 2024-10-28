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

while (!juegoTerminado) {
    console.clear();
    for (let i = 0; i < tablero.length; i++) {
        console.log(tablero[i].join(' '));
    }

    let direccion = prompt("Ingrese la dirección (ARRIBA, DERECHA, ABAJO, IZQUIERDA): ").toUpperCase();

    let nuevaX = posicionVibora.x;
    let nuevaY = posicionVibora.y;

    if (direccion === 'ARRIBA') nuevaX--;
    else if (direccion === 'DERECHA') nuevaY++;
    else if (direccion === 'ABAJO') nuevaX++;
    else if (direccion === 'IZQUIERDA') nuevaY--;

    if (nuevaX < 0) nuevaX = tablero.length - 1;
    else if (nuevaX >= tablero.length) nuevaX = 0;
    if (nuevaY < 0) nuevaY = tablero[0].length - 1;
    else if (nuevaY >= tablero[0].length) nuevaY = 0;

    if (tablero[nuevaX][nuevaY] !== '🧱') {
        if (tablero[nuevaX][nuevaY] === '🍎') manzanas--;

        tablero[posicionVibora.x][posicionVibora.y] = '🌱';
        posicionVibora.x = nuevaX;
        posicionVibora.y = nuevaY;
        tablero[posicionVibora.x][posicionVibora.y] = '🐍';
    }

    if (manzanas === 0) {
        juegoTerminado = true;
        console.log("Has ganado, no quedan más manzanas.");
    }
}
