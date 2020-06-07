// descripción: permite agregar propiedades unicas

let nombre = Symbol();
let apellido = Symbol();

let persona = {};
persona.nombre = 'Juan';
persona[nombre] = 'Juan'; // symbol 1
persona[apellido] = 'De la torre'; // Symbol2
persona.saldo = 100;
persona.tipoCliente = 'Normal'
console.log(persona);
console.log(persona.nombre);
console.log(persona[nombre]); // accedemos al Symbol

for(let i in persona){
    // No se puede acceder a un symbol de esta forma
    console.log(`${i} : ${persona[i]}`) 
}