// Te permite crear una lista de valores pero sin duplicados
// si recive un dato que ya existe no lo agregara
let carrito = new Set();
carrito.add('Camisa');
carrito.add('Disco 1');
carrito.add('Disco 2');
carrito.add('Disco 3');
carrito.add('Disco 3');
console.log(carrito)
console.log(carrito.size)
// comprobar que el valor exista
console.log(carrito.has('Disco 2'))
console.log(carrito.has('Gitarra'))

// // Eliminamos
// carrito.delete('Camisa')
// console.log(carrito)

// // Limpiamos
// carrito.clear()
// console.log(carrito)

// Iterar un set con foreach
carrito.forEach((producto, index) => {
    console.log(`Imprime: ${producto}`)
    console.log(`${index}: ${producto}`) // En un set la llave es el mimo valor
})

// convertir un set a arreglo
const arregloCarrito = [...carrito];
console.log('Lo convertimos en arreglo ', arregloCarrito)


// inicializando un set
let numeros = new Set([1,2,3,4,5,6,3,2,1])
console.log(numeros)
console.log(numeros.size)

