// variables
const presupuestoUsuario = prompt('Cual es tu Presupuesto semanal?');
const formulario = document.getElementById('agregar-gasto');
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
        presupuestoSpan.innerHTML = `${cantidad}`;
        restanteSapan.innerHTML = `${cantidad}`;
    }
    imprimirMensaje(mensaje, tipo){
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');
        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }
        divMensaje.appendChild(document.createTextNode(mensaje));
        // Insertar en el DOM
        document.querySelector('.primario').insertBefore(divMensaje, formulario)
        // Quitar el arler despues de 3 segundos
        setTimeout(function(){
            document.querySelector('.primario .alert').remove();
            formulario.reset();
        }, 3000)
    }
    // inseta los gastos a la lista
    agregarGastoListado(nombre, cantidad){
        const gastosListado = document.querySelector('#gastos ul');
        // crear un li
        const li = document.createElement('li');
        li.className='list-group-item d-flex justify-content-between, align-items-center';
        // Insertar el gasto
        li.innerHTML = `
            ${nombre}
            <span class="badge badge-primary badge-pill"> $ ${cantidad} </span>
        `;
        // insertar al html
        gastosListado.appendChild(li)
    }
    // comprueba el presupuesto restante
    presupuestoRestante(cantidad){
        const restante = document.querySelector('span#restante');
        // leemos el presupuesto restante
        const presupuestoRestanteUsuario = cantidadPresupuesto.presupuestoRestante(cantidad)
        restante.innerHTML=`${presupuestoRestanteUsuario}`;
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
// Event listener para el formulario
formulario.addEventListener('submit', function(e){
    e.preventDefault();
    // Leer del formulario de gastos
    const nombreGasto = document.querySelector('#gasto').value;
    const cantidadGasto = document.querySelector('#cantidad').value;
    // instanciar la interfaz
    const ui = new Interfaz();
    // Comprobar que los campos no estan vacios
    if (nombreGasto === '' || cantidadGasto === '') {
        console.log('hubo un error');
        // 2 parametros: mensaje y tipo
        ui.imprimirMensaje('Hubo un error', 'error');
    } else {
        console.log('El gasto se agrego');
        // Insertar en el html
        ui.imprimirMensaje('Correcto', 'correcto');
        ui.agregarGastoListado(nombreGasto, cantidadGasto)
        ui.presupuestoRestante(cantidadGasto)
    }

});