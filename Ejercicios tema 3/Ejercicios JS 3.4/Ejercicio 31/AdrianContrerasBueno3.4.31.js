const cache = new WeakMap();

function setCache(obj, value) {
  cache.set(obj, value);
}

function getCache(obj) {
  return cache.get(obj);
}

function hasCache(obj) {
  return cache.has(obj);
}

function deleteCache(obj) {
  cache.delete(obj);
}

// ejemplo de uso
let objeto1 = { nombre: 'objeto1' };
let objeto2 = { nombre: 'objeto2' };

setCache(objeto1, 'valor para objeto1');
setCache(objeto2, 'valor para objeto2');

console.log(getCache(objeto1)); 
console.log(getCache(objeto2)); 

// verificar si las claves existen en el cache
console.log(hasCache(objeto1)); 
console.log(hasCache(objeto2)); 

// eliminar una clave del cache
deleteCache(objeto1);
console.log(hasCache(objeto1)); 

// si objeto2 es eliminado, su entrada en el cache tambien sera eliminada por el recolector de basura
objeto2 = null;
console.log(hasCache(objeto2)); 

