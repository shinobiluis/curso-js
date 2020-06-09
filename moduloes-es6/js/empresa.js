// exportamos las variables
export const nombreEmpresa = "Udemy";
export let ahorro = 200000;
export const categoria = 'Aperndizaje';
// exportamos la funcion
export function mostrarInformacion(nombre, ahorro, aprendizaje){
    return `cliente ${nombre} ahorro: ${ahorro} Aprendizaje: ${aprendizaje}`;
}


// // exportar una clase con sus metodos
// export class Cliente {
//     constructor(nombre, ahorro){
//         this.nombre = nombre;
//         this.ahorro = ahorro;
//     }
//     mostrarInformacion(){
//         return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;
//     }
// }