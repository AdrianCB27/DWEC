function* generadorFibonacci() {
    let a = 0, b = 1; //los dos primeros numeros de la secuencia, el 0 y el 1,
    while (true) {
      yield a;
      [a, b] = [b, a + b]; // actualiza los valores para el siguiente numero en la secuencia
    }
  }
  
  // usar el generador para obtener la secuencia de fibonacci
  const iterador = generadorFibonacci();
  
  console.log(iterador.next().value); 
  console.log(iterador.next().value); 
  console.log(iterador.next().value); 
  console.log(iterador.next().value); 
  console.log(iterador.next().value); 
  console.log(iterador.next().value); 
  console.log(iterador.next().value);
  
  // usar for...of para iterar sobre el generador
  for (const numero of generadorFibonacci()) {
    if (numero > 50) break; // detener la iteracion despues de alcanzar el numero 50
    console.log(numero);
  }
  