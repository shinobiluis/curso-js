// variables
const presupuestoUsuario = prompt('Cual es tu presupuerso semanal?');
let cantidadPresupuesto;

// Clases
// Case de presupuesto
class Presupuesto{
    constructor(presupuesto){
        // convertimos el dato a numerico
        this.presupuesto  = Number(presupuesto)
        this.restante = Number(presupuesto);
    }
    // Metodo para restar del presupuesto actual
    presupuestoRestante(cantidad = 0){
        return this.restante -= Number(cantidad);
    }

}


// Event Listeners

// si el usuario no ingresa su presupuesto semanal recargamos la pagina
document.addEventListener('DOMContentLoaded', function(){
    if (presupuestoUsuario === null || presupuestoUsuario == '') {
        window.location.reload();
    }else{
        console.log(`El presupuesto del usuario es: ${presupuestoUsuario}`);
        // instanciamos la clase Presupuesto
        cantidadPresupuesto = new Presupuesto(presupuestoUsuario);
        console.log(cantidadPresupuesto);
    }
})
