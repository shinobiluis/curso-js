let cliente = new Map();
cliente.set('nombre', 'karen');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);
console.log(cliente);

// acceder a los valores;
console.log(cliente.get('nombre'))

// recorrer un map
cliente.forEach(item => {
    console.log("forEach: ", item)
})

// metodos que tienes los mas
// saber el tamaño
console.log(cliente.size)
// validar la existencia de un varloa
console.log(cliente.has('nombre'))
console.log(cliente.get('apellido')) //undefined
// borrar un elemento
cliente.delete('nombre');
console.log(cliente.has('nombre'))
// Limpiar el map
cliente.clear();
console.log(cliente)


