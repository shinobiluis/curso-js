// Importamos una clase
import {Cliente} from './cliente.js'

// exportamos las variables
export const nombreEmpresa = "Udemy";
export let ahorro = 200000;
export const categoria = 'Aperndizaje';
// exportamos la funcion
export function mostrarInformacion(nombre, ahorro, aprendizaje){
    return `cliente ${nombre} ahorro: ${ahorro} Aprendizaje: ${aprendizaje}`;
}

// utlilizar la clase del modulo cliente
export class Empresa extends Cliente{
    constructor(nombre, ahorro, categoria){
        // accedemos a los que ya existen con super
        super(nombre, ahorro);
        this.categoria = categoria;
    }
    mostrarInformacion(){
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro} - Categoria: ${this.categoria}`;
    }
}