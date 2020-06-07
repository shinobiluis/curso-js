// Definicion: esun codigo que ayuda a extraer valores de un arreglo y un objeto

// Antes
// const cliente = {
//     nombre: 'Luis',
//     tipo: 'Premium'
// }
// let nombre = cliente.nombre,
//     tipo = cliente.tipo;
// console.log(nombre)
// console.log(tipo)

// Ahora
// const cliente = {
//     nombre: 'Luis',
//     tipo: 'Premium'
// }
// let {nombre, tipo} = cliente;
// console.log(nombre)
// console.log(tipo)

const cliente = {
    tipo: 'Premiun',
    nombre: 'Antonio',
    datos : {
        ubicacion: {
            ciudad: 'CDMX',
            pais: 'México'
        },
        cuenta:{
            desde: '10-12-2020',
            saldo: 4000
        }
    }
}
let { nombre, datos: { ubicacion, cuenta } } = cliente
console.log(nombre)
// accedemos a ubicacion
console.log(ubicacion)
console.log(ubicacion.ciudad)
console.log(ubicacion.pais)
// accedemos a cuenta
console.log(cuenta)
console.log(cuenta.desde)
console.log(cuenta.saldo)