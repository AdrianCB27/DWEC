class Banco {
    #balance; //si ponemos el # es para encapsular los atributos

    constructor(balance) {
        this.#balance = balance;
    }

    depositar(cantidad) {
        this.#balance += cantidad;
        console.log("Has ingresado " + cantidad + ". El balance actual es: " + this.#balance);
    }

    retirar(cantidad) {
        if (cantidad <= this.#balance) {
            this.#balance -= cantidad;
            console.log("Has retirado " + cantidad + ". El balance actual es: " + this.#balance);
        } else {
            console.log("No se puede retirar " + cantidad + ". Balance insuficiente.");
        }
    }

    obtenerBalance() {
        return this.#balance;
    }
}

const miBanco = new Banco(2050);
miBanco.depositar(500);
miBanco.retirar(300);
miBanco.retirar(3000);

console.log("Balance final: " + miBanco.obtenerBalance());
