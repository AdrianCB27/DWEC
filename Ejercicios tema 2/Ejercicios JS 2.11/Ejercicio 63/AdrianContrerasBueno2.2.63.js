function division(n1 ,n2) {
    try {
        if (n2==0) {
            throw new Error("No se puede dividir por 0")
        }else{
            console.log(n1/n2);
        }
    } catch (error) {
        console.error(error.message);
    }finally{
        console.log("Operación completada")
    }
}
division(3,0);