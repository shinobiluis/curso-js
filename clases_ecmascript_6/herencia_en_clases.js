class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
    imprimirSaldo(){
        return `Hola ${this.nombre} tu saldo es de ${this.saldo}`
    }
    static bienvenida(){
        return `Bienvenido al cajero`
    }
}
console.log(Cliente.bienvenida());
const cliente = new Cliente('Pedro', 1000);
console.log(cliente);
console.log(cliente.imprimirSaldo());
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, tipo){
        // va hacia el constructor padre
        super(nombre, saldo);
        // no existen en el constructor padre
        this.telefono = telefono;
        this.tipo = tipo;
    }
    // rescribimos la bienvenida
    static bienvenida(){
        return `Bienvenido al cajero de Empresa`
    }
}

console.log(Empresa.bienvenida());
const empresa = new Empresa ('Emrpesa1', 10000, 55555555, 'construccion');

console.log(empresa);
console.log(empresa.imprimirSaldo());