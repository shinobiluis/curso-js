// Primer ejemplo
// const ciudades = ['México', 'Londres', 'Madrid', 'Paris'];
// accedemos a los primeros elementos
// const [
//     primeraCiudad,
//     segundaCiudad
// ] = ciudades;

// console.log(primeraCiudad)
// console.log(segundaCiudad)

// Accedemos a los ultimos 2 elementos
// const ciudades = ['México', 'Londres', 'Madrid', 'Paris'];
// const [, , ciudad, paris] = ciudades;
// console.log(ciudad)
// console.log(paris)

// Ejemplo avanzado
const cliente = {
    tipo:'Premium',
    saldo: 30000,
    datos:{
        nombre: 'Pedro',
        apellido: 'Perez',
        recidencia:{
            ciudad: 'México'
        }
    },
    movimientos:['12-03-2020', '12-03-2019', '12-03-2018']
}
let {
    tipo,
    datos,
    datos:{recidencia},
    movimientos,
    movimientos :[ , dos]
} = cliente;
console.log(tipo)
console.log(datos)
console.log(recidencia)
console.log(movimientos)
console.log(dos)