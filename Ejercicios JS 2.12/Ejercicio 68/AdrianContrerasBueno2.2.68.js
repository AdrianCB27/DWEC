class Rectangulo {
  constructor(ancho, alto) {
    this.ancho = ancho;
    this.alto = alto;
  }

  calcularArea() {
    return this.ancho * this.alto;
  }
}
const rect1 = new Rectangulo(3, 10);
const rect2 = new Rectangulo(7, 3);
const rect3 = new Rectangulo(4, 9);
console.log("El área del rectángulo 1 es: " + rect1.calcularArea());
console.log("El área del rectángulo 2 es: " + rect2.calcularArea());
console.log("El área del rectángulo 3 es: " + rect3.calcularArea());
