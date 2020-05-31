// variables
const presupuestoUsuario = prompt('Cual es tu Presupuesto semanal?');
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
// Clase de Interfaz maneja todo lo relacionado a el HTML
class Interfaz {
    insertarPresupuesto(cantidad){
        console.log(cantidad)
        const presupuestoSpan = document.querySelector('span#total');
        const restanteSapan = document.querySelector('span#restante');
        // Insertar al HTML
        presupuestoSpan.innerHTML = `${cantidad}`
        restanteSapan.innerHTML = `${cantidad}`
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
        // instanciamos la clase de Interfaz
        const ui = new Interfaz();
        ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);
    }
})
