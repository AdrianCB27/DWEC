let map1 = new Map();
map1.set("nombre", "Adrian");
map1.set("edad", 21);
let map2 = new Map();
map2.set("ciudad", "Torredonjimeno");
map2.set("país", "España");
let mapCombinado = new Map([...map1, ...map2]); // al usar el operador de propagación cogemos los datos que no se repitan y los unimos en un solo map
console.log(mapCombinado);
