// exportamos las variables
export const nombreCliente = "juan";
export let ahorro = 200;
// exportamos la funcion
export function mostrarInformacion(nombre, ahorro){
    return `cliente ${nombre} ahorro: ${ahorro}`;
}


// exportar una clase con sus metodos
export class Cliente {
    constructor(nombre, ahorro){
        this.nombre = nombre;
        this.ahorro = ahorro;
    }
    mostrarInformacion(){
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;
    }
}
