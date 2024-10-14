function peticionApi(cadena) {
    return new Promise((resolve,reject)=>{
        if (cadena=="Peticion") {
            resolve("Petición correcta");
        }else reject("Petición no completada")
    })
};

try {
    let respuesta= peticionApi("Peticion");
    console.log(respuesta);
} catch (error) {
    console.error(error.message);
}finally{
    console.log("Proceso completado")
}
