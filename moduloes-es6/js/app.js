// importamos
import { nombreCliente, ahorro, mostrarInformacion } from './cliente.js';

import { nombreEmpresa, ahorro as ahorroEmpresa, categoria, mostrarInformacion as infoEmpresa} from './empresa.js'

// info cliente
console.log(nombreCliente)
console.log(ahorro)
const funcion = mostrarInformacion(nombreCliente, ahorro)
console.log(funcion);
console.log('----------------')
// Info empresa
console.log(nombreEmpresa)
console.log(ahorroEmpresa)
console.log(categoria)
const funcion2 = infoEmpresa(nombreCliente, ahorro, categoria)
console.log(funcion2);


// // utilizar una clase exportada
// let cliente = new Cliente(nombreCliente, ahorro);
// console.log(cliente);
// // usamos el metodo de la clase
// console.log(cliente.mostrarInformacion())