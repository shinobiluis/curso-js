export const nombreCliente = "Luis";
export let ahorro = 200;

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