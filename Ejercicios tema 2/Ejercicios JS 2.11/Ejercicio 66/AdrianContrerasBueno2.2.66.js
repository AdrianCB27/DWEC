function lectura(rutaArchivo) {
    return new Promise((resolve,reject)=>{
        if (rutaArchivo) {
            resolve("Archivo leido");
        }else reject("No se puede encontrar el archivo enviado")
    })
};

try {
    let respuesta= lectura(false);
    console.log(respuesta);
} catch (error) {
    console.error(error.message);
}finally{
    console.log("Proceso completado")
}