let arrayObjetos=[
    {id:1,nombre:"Adrian"},
    {id:2,nombre:"Alejandro"},
    {id:3,nombre:"Alex"},
    {id:3,nombre:"Francisco"}
]
let map= new Map();
let arraySinDuplicados=arrayObjetos.filter((objeto)=>{ //con el filter filtramos según nuestro parecer
    if (map.has(objeto.id)) { //en este caso comprobamos si tiene ya el objeto con ese id, si lo tiene devolvemos false (no se añade al nuevo array)
        return false
    }else{
        map.set(objeto.id,objeto.nombre); //en el caso de que no lo tenga, lo añadimos al map y al devolver true se mete en el nuevo array
        return true;
    }
})

console.log(arraySinDuplicados);