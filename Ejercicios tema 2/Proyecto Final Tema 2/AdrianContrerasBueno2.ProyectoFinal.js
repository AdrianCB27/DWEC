//CLASE PRODUCTO
class Producto {
  static id = 0; //ponemos el id estático y inicializado a 0 para que se comparta por todos los productos
  constructor(nombre, precio, stock) {
    Producto.id++; //sumamos uno al id y después lo asignamos al del objeto creado
    this.id = Producto.id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
  getNombre() {
    return this.nombre;
  }
  getId() {
    return this.id;
  }
  getStock() {
    return this.stock;
  }
  getPrecio() {
    return this.precio;
  }
  mostrarInfo() {
    return `Producto con id: ${this.id}\nNombre: ${this.nombre}\nPrecio: ${this.precio}€\nStock: ${this.stock}`;
  }
  setStock(nuevoStock) {
    this.stock = nuevoStock;
  }
}
//CLASE VENTA
class Venta {
  constructor(nombreCliente, idProducto, cantidadComprada, totalCompra) {
    this.nombreCliente = nombreCliente;
    this.idProducto = idProducto;
    this.cantidadComprada = cantidadComprada;
    this.totalCompra = totalCompra;
  }
  getNombreCliente() {
    return this.nombreCliente;
  }
  getTotalCompra(){
    return this.totalCompra;
  }
  mostrarInfo() {
    //creamos este método para mostrar la información de la venta
    return `\nProducto con id ${this.idProducto} Vendido a: ${this.nombreCliente}\nCantidad: ${this.cantidadComprada}\nTotal venta: ${this.totalCompra}\n`;
  }
}
//CLASE TIENDA
class Tienda {
  constructor() {
    this.productos = new Map();
    this.clientes = new Set();
    this.ventas = [];
  }

  agregarProducto(producto) {
    if (this.productos.has(producto.getId())) {
      //si ya está en el map no se añade
      console.log("No se puede añadir el producto porque ya existe");
      return false;
    } else {
      this.productos.set(producto.getId(), producto); //si no está se añade, siendo la clave el id y el valor el propio producto
      return true;
    }
  }
  actualizarStock(idProducto, cantidad) {
    let producto = this.productos.get(idProducto); //cogemos el producto que queremos actualizar su stock gracias al get
    producto.setStock(cantidad);
    console.log("Producto con id " + idProducto + " actualizado su stock");
  }
  mostrarInventario() {
    for (const [clave, producto] of this.productos) {
      //usamos un forof para recorrer el map más fácil y mostrar el método mostrarInfo() de cada producto
      console.log(producto.mostrarInfo());
    }
  }

  registrarCliente(nombreCliente) {
    if (this.clientes.has(nombreCliente)) {
      console.log("No se puede añadir ese cliente, ya existe");
      return false;
    } else {
      this.clientes.add(nombreCliente);
      return true;
    }
  }
  realizarVenta(nombreCliente, idProducto, cantidad) {
    if (!this.clientes.has(nombreCliente)) {
      //si el cliente no está lo añade
      this.clientes.add(nombreCliente);
    }
    let productoComprado = this.productos.get(idProducto); //NOS LLEVAMOS EL PRODUCTO COMPRADO A UNA VARIABLE PARA TRABAJAR MEJOR CON ÉL

    if (productoComprado.getStock() >= cantidad) {
      let totalCompra = productoComprado.getPrecio() * cantidad; //Obtenemos el total de la compra del producto
      let ventaRealizada = new Venta(
        nombreCliente,
        idProducto,
        cantidad,
        totalCompra
      );
      this.ventas.push(ventaRealizada); //añadimos la venta y mostramos su información
      console.log(ventaRealizada.mostrarInfo());
    } else console.log("No hay stock suficiente de ese producto");
  }

  mostrarVentas() {
    this.ventas.forEach((venta) => {
      console.log(venta.mostrarInfo()); //Con el metodo foreach del array recorremos facilmente cada elemento del array para mostrarlo
    });
  }

  productosSinStock() {
    let arrayProductos = Array.from(this.productos.values()); //generamos un array con los valores del map de productos
    return arrayProductos.filter((elemento) => {
      //lo recorremos con filter y devolvemos los que tengan 0 stock
      return elemento.getStock() < 1;
    });
  }

  ventasPorCliente(nombreCliente) {
    console.log("Ventas del cliente " + nombreCliente);

    this.ventas.forEach((venta) => {
      if (venta.getNombreCliente() == nombreCliente) {
        console.log(venta.mostrarInfo());
      }
    });
  }
  calcularTotalIngresos(){
   let totalVentas=this.ventas.reduce((acumulador,elemento)=>{ //con el método reduce reducimos a un solo valor el total de las ventas del array para luego devolverlo
      return elemento.getTotalCompra()+acumulador
    },0)
    return totalVentas;
  }
}

const tienda = new Tienda();

const producto1 = new Producto("Producto 1", 10, 100);
const producto2 = new Producto("Producto 2", 20, 50);
const producto3 = new Producto("Producto 3", 30, 30);
const producto4 = new Producto("Producto 4", 40, 20);
const producto5 = new Producto("Producto 5", 50, 10);

tienda.agregarProducto(producto1);
tienda.agregarProducto(producto2);
tienda.agregarProducto(producto3);
tienda.agregarProducto(producto4);
tienda.agregarProducto(producto5);

tienda.registrarCliente("Cliente 1");
tienda.registrarCliente("Cliente 2");
tienda.registrarCliente("Cliente 3");

tienda.realizarVenta("Cliente 1", 1, 2); 
tienda.realizarVenta("Cliente 2", 2, 1); 
tienda.realizarVenta("Cliente 3", 3, 3); 
tienda.realizarVenta("Cliente 1", 4, 2); 
tienda.realizarVenta("Cliente 2", 5, 5); 

console.log("Inventario de la tienda:");
tienda.mostrarInventario();

console.log("Ventas realizadas:");
tienda.mostrarVentas();

let totalIngresos = tienda.calcularTotalIngresos();
console.log("Total de ingresos de la tienda: " + totalIngresos + "€");

