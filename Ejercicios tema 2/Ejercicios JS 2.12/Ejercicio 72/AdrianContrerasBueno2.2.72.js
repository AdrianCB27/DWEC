class Configuracion {
    constructor() {
        if (Configuracion.instancia) {
            return Configuracion.instancia;
        }

        this.config = {};
        Configuracion.instancia = this;
    }

    set(clave, valor) {
        this.config[clave] = valor;
    }

    get(clave) {
        return this.config[clave];
    }

    static getInstance() {
        if (!Configuracion.instancia) {
            Configuracion.instancia = new Configuracion();
        }
        return Configuracion.instancia;
    }
}

const config1 = Configuracion.getInstance();
config1.set("tema", "oscuro");
config1.set("idioma", "español");


const config2 = Configuracion.getInstance();
console.log(config2.get("tema")); 
console.log(config2.get("idioma")); 


console.log(config1 === config2); 
