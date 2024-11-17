const cache = new WeakMap();

function* generadorPotencias(base) {
  let exponente = 0;

  while (true) {
    const clave = { base, exponente };

    if (cache.has(clave)) {
      yield cache.get(clave);
    } else {
      const resultado = base ** exponente;
      cache.set(clave, resultado);
      yield resultado;
    }

    exponente++;
  }
}

const i = generadorPotencias(2);

console.log(i.next().value);
console.log(i.next().value);
console.log(i.next().value);
