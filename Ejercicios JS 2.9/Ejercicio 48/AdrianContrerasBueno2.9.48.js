let coleccion1=new Set([1,2,3]);
let coleccion2=new Set([2,3,4]);
let coleccion3=new Set();
coleccion1.forEach((e)=>{
    if(coleccion1.has(e)&&!coleccion2.has(e)){ //recorremos uno de los map para comprobar la condición, muy similar al ejercicio anterior pero negando la segunda condicion
        coleccion3.add(e);
    }
})
console.log(coleccion3)