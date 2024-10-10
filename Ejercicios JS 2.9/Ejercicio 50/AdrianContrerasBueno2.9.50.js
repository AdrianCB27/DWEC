let arrayObjetos = [
  { name: "Adrián", id: 1 },
  { name: "Gabi", id: 2 },
  { name: "Alex", id: 1 },
]; //Creamos un array de objetos que tenga al menos uno duplicado
 let coleccionSinDuplicados=new Set();
 let arraySinDuplicados = arrayObjetos.filter(objeto => {  //filtramos cada objeto del array para devolver un array después  sin duplicados
    if (coleccionSinDuplicados.has(objeto.id)) { //si contiene ya el id la coleccion devuelve false
        return false;
    } else {
        coleccionSinDuplicados.add(objeto.id); //si no lo contiene lo añade a la colección y también al array porque devuelve true
        return true;
    }
});
console.log(arraySinDuplicados);
