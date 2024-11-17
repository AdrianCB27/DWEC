// objeto que genera numeros pares
const generadorPares = {
    [Symbol.iterator]() {
      let numero = 0;
      return {
        next() {
          numero += 2; // incrementa en 2 para obtener el siguiente numero par
          return { value: numero, done: false };
        }
      };
    }
  };
  
  // usar el objeto iterable para obtener numeros pares
  const iterador = generadorPares[Symbol.iterator]();
  
  console.log(iterador.next().value); 
  console.log(iterador.next().value); 
  console.log(iterador.next().value); 
  console.log(iterador.next().value); 
  
  // usar forof para iterar sobre el objeto
  for (const numeroPar of generadorPares) {
    console.log(numeroPar);
    if (numeroPar >= 20) break; // detener la iteraciión despues del numero 20
  }
  