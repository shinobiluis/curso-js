// Objeto
const cliente = {
    nombre: 'Luis',
    saldo: 501,
    tipoCliente: function(){
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
}
console.log(cliente.tipoCliente())

// Metodo alternativo
function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo
    this.tipoCliente = function (){
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
}
const persona  = new Cliente('Pedro', 20000);
console.log(persona)