let conjunto1 = new Set([1, 2]);
let conjunto2 = new Set([1, 2, 3, 4]);

let esSubconjunto = [...conjunto1].every(e => conjunto2.has(e)); //con every podemos comprobar si todos los elementos del primer conjunto están en el segundo.

console.log(esSubconjunto? "Sí es subconjunto":"No es subconjunto"); 
