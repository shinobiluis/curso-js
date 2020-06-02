const ui = new Interfaz();



// Leer el formularios
const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', function(e){
    e.preventDefault();
    // Leer la moneda seleccionada
    const monedaSelect = document.querySelector('#moneda');
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;
    console.log(monedaSeleccionada);
    // Leer la criptomoneda seleccionada
    const criptoMonedaSelect = document.querySelector('#criptomoneda');
    const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;
    console.log(criptoMonedaSeleccionada);

    // comprobar que ambos campos esten seleccionados
    if(monedaSeleccionada==='' || criptoMonedaSeleccionada === ''){
        // arrojar una alerta de error
        ui.mostrarMensaje('Ambos campos son obigatorios', 'alert bg-danger text-center');
    }else{
        console.log("todo bien")
        // todo bien consultar la api
    }
})