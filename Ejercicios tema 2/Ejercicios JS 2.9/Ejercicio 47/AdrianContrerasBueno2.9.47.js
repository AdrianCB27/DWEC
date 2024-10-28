let coleccion1=new Set([1,2,3]);
let coleccion2=new Set([2,3,4]);
let coleccion3=new Set();
coleccion1.forEach((e)=>{
    if(coleccion1.has(e)&&coleccion2.has(e)){ //recorremos uno de los map para comprobar cuales son iguales y los que lo son los metemos en la coleccion 3
        coleccion3.add(e);
    }
})
console.log(coleccion3)