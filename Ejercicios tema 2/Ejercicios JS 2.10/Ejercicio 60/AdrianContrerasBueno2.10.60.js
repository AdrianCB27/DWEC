let arrayObjetos=[
    {id:1,nombre:"Adrian"},
    {id:2,nombre:"Alejandro"},
    {id:3,nombre:"Alex"},
]
let map1=new Map();
// recorremos el array y metemos cada elemento en el map (clave, valor)
arrayObjetos.forEach((elemento)=>map1.set(elemento.id,elemento.nombre)) 
console.log(map1)