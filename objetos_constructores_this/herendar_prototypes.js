function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

// prototipo que impreime saldo y nombre
Cliente.prototype.nombreClienteSaldo = function (){
    return `Nombre ${this.nombre}, tu saldo es de ${this.saldo}`
}
// instanciamos a cada objeto
const cliente1 = new Cliente('Pedro', 100);
// accedemos a cada protorype
console.log(cliente1);

// banca para empresas
function Empresa(nombre, saldo, telefono, tipo){
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
    this.tipo = tipo
}
// Eredamos nombreClienteSaldo de cliente en Empresa
Empresa.prototype = Object.create(Cliente.prototype);
const empresa = new Empresa("Udemy", 1000000, 54324234234, 'Educación');

console.log(empresa);
console.log(empresa.nombreClienteSaldo());