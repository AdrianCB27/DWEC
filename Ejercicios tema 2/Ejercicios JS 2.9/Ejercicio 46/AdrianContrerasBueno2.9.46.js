let coleccion1=new Set([1,2,3]);
let coleccion2=new Set([2,3,4]);

let coleccion3= new Set([...coleccion1,...coleccion2]); //haciendolo así nos quitamos los duplicados
console.log(coleccion3)