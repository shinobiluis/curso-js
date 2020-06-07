// Destructuring forma anterior
// function reservacion(completo, opciones){
//     opciones = opciones || {};
//     let metodo = opciones.metodoPago,
//         cantidad = opciones.cantidad,
//         dias = opciones.dias;
//     console.log(metodo)
//     console.log(cantidad)
//     console.log(dias)
// }

// Destructuring forma nueva
function reservacion(completo, opciones){
    let {metodoPago, cantidad, dias} = opciones;
    console.log(metodoPago)
    console.log(cantidad)
    console.log(dias)
}

//
reservacion(
    false,
    {
        metodoPago: 'tarjeta',
        cantidad: 3000,
        dias: 3
    }
);