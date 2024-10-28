function sonIguales(map1, map2) {
    if (map1.size !== map2.size) {
      return false;
    }
    for (let [clave, valor] of map1) {
      if (!map2.has(clave) || map2.get(clave) !== valor) {
        return false;
      }
    }
    return true;
  }
  
  let map1 = new Map();
  map1.set("nombre", "Adrian");
  map1.set("edad", 21);
  
  let map2 = new Map();
  map2.set("nombre", "Adrian");
  map2.set("edad", 21);
  
  console.log(sonIguales(map1, map2)); 
  
