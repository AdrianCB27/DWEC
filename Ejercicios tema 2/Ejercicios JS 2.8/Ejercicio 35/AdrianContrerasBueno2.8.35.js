const rectangulo = {
    ancho: 6,
    alto: 9,
    calcularArea: function() {
        return this.ancho * this.alto;
    }
};

const area = rectangulo.calcularArea();
console.log("El área del rectángulo es :" + area);
