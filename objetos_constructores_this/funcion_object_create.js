// object Create
const Cliente = {
    imprimirSaldo: function(){
        return `Hola ${this.saldo} tu saldo es ${this.saldo}`
    },
    retirarSaldo: function(retiro){
        return this.saldo -= retiro;
    }
}
// Crear el objeto
const mary = Object.create(Cliente);
mary.nombre = 'Mary';
mary.saldo = 1000;

console.log(mary);
console.log(mary.imprimirSaldo());
console.log(mary.retirarSaldo(300));