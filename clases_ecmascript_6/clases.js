class Cliente {
    constructor(nombre, apellido, saldo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.saldo = saldo;
    }
    imprimirSaldo(){
        return `Hola ${this.nombre} tu saldo es de ${this.saldo}`
    }
    tipoCliente(){
        let tipo;
        // usamos this
        if (this.saldo > 1000) {
            tipo = "Gold";
        }else if(this.saldo > 500){
            tipo = 'Platino'
        }else {
            tipo = 'Normal';
        }
        return tipo;
    }
    retirarSaldo(retiro){
        return this.saldo -= retiro
    }

    static bienvenida(){
        return `Bienvenido al cajero`
    }
}
// accedemos a vienvenida sin instanciar ya que es un metodo estatico
console.log(Cliente.bienvenida());
// instanciamos la clase
const maria = new Cliente('Maria', 'Perez', 10000);
console.log(maria)
console.log(maria.imprimirSaldo());
console.log(maria.tipoCliente());
console.log(maria.retirarSaldo(100));