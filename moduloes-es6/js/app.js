// importamos
import { nombreCliente, ahorro, mostrarInformacion, Cliente} from './cliente.js';

console.log(nombreCliente)
console.log(ahorro)

const funcion = mostrarInformacion(nombreCliente, ahorro)
console.log(funcion);

// utilizar una clase exportada
let cliente = new Cliente(nombreCliente, ahorro);
console.log(cliente);
// usamos el metodo de la clase
console.log(cliente.mostrarInformacion())