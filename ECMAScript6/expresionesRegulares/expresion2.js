// negar la expresion 
// con ^ se hace que no se acepte la expresion regular
expReg = /[^0-9]/; // no acepta numeros
valor = 1992;

// La sintaxis con  llaves {1,2}
expReg = /\d{1,2}-\d{1,2}-\d{4}/;
valor = "12-12-1211";

console.log(expReg.test(valor));

// evaluar letras o numeros
expReg = /\w+/;
valor = "Mensaje de prueba232 23";
console.log(expReg.test(valor));

// solo numeros
expReg = /\d+/;
valor = "Hola";
console.log(expReg.test(valor));

// validamos que no entren textos
expReg = /([0-9])\w+/;
valor = "hola mundo1";
console.log(expReg.test(valor));

// Puras mayusculas
expReg = /([A-Z])\w+/;
valor = "HOLA";
console.log(expReg.test(valor));



