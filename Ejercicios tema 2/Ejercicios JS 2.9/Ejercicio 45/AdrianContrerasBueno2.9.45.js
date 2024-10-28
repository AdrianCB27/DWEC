let coleccion=new Set([1,2,3,4,5]);
let array=[...coleccion] // el operador de propagación sirve para que coja cada elemento del set y lo meta como array
array.push(6);
console.log(array)