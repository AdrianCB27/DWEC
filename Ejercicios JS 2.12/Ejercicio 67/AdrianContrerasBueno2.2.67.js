class Coche {
  constructor(marca, modelo, anio) {
    this.anio = anio;
    this.marca = marca;
    this.modelo = modelo;
  }
  descripcion() {
    return (
      "Marca: " +
      this.marca +
      "\nModelo: " +
      this.modelo +
      "\nAño: " +
      this.anio
    );
  }
}
const coche1 = new Coche("Renault", "Laguna", 1999);
const coche2 = new Coche("Peugeot", "3008", 2022);
const coche3 = new Coche("Peugeot", "308", 2019);

console.log(coche1.descripcion());
console.log(coche2.descripcion());
console.log(coche3.descripcion());
