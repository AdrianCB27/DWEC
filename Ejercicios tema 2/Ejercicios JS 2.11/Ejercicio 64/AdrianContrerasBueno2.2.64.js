function esPar(numero) {
    try {
        if (numero%2==0) {
            console.log("El número es par");
        }else if(numero%2==1){
            console.log("El número es impar");
        }else{
            throw new Error("El parámetro enviado no es un número"); //Forzamos que mande un error si no es un número 
        }
    } catch (error) {
        console.error(error.message);
    }
    
}
esPar(12);
esPar("hola");
