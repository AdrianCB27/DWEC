function facturacion(precio, metodoPago) {
  metodoPago = metodoPago.toUpperCase();
  if (
    precio > 400 &&
    (metodoPago == "D" || metodoPago == "C" || metodoPago == "E")
  ) {
    precio *= 0.6;
    return precio;
  }
  switch (metodoPago) {
    case "C":
      if (precio >= 200 && precio <= 400) {
        precio *= 0.9;
        return precio;
      }
      break;
    case "E":
      if (precio >= 200 && precio <= 400) {
        precio *= 0.7;
        return precio;
      }
      break;
    case "D":
      if (precio >= 200 && precio <= 400) {
        precio *= 0.8;
        return precio;
      }
      break;
    default:
      alert("Seleccione un método de pago válido");
      break;
  }
}

alert(facturacion(234,"C"))
