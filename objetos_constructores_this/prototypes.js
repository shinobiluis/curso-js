// https://www.udemy.com/course/javascript-moderno-guia-definitiva-construye-10-proyectos/learn/lecture/9079558#notes
function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}
// crear un prototype
Cliente.prototype.tipoCliente = function (){
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
// prototipo que impreime saldo y nombre
Cliente.prototype.nombreClienteSaldo = function (){
    return `Nombre ${this.nombre}, tu saldo es de ${this.saldo}, Tipo de cliente: ${this.tipoCliente()}`
}
// prototype para retirar saldo
Cliente.prototype.retirarSaldo = function (retiro){
    return this.saldo -= retiro;
}
// instanciamos a cada objeto
const cliente1 = new Cliente('Pedro', 100);
const cliente2 = new Cliente('Luis', 600);
const cliente3 = new Cliente('Ana', 1001);
// retiramos saldo por medio de un prototype
cliente2.retirarSaldo(300);
// accedemos a cada protorype
console.log(cliente1.nombreClienteSaldo());
console.log(cliente2.nombreClienteSaldo());
console.log(cliente3.nombreClienteSaldo());