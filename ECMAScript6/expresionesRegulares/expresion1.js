// // Se pueden crear de esta forma
// const exp1 = new RegExp('/abc/');
// const exp2 = /abc/;
// console.log(exp1);
// console.log(exp2);

let valor, expReg;
expReg = /[0123456789]/;
expReg = /[0-9]/; // mismo resultado de arriba
valor = 1992;
// validamos con test si cumple la expresion regular
console.log(expReg.test(valor));


// una fecha en exp regular 20-10-2010
// d == numero (la d significa numero)
expReg = /\d\d-\d\d-\d\d\d\d/;
valor = '20-10-2018';
console.log(expReg.test(valor));

// Hora 10:30
expReg = /\d\d:\d\d/;
valor = '10:30';
console.log(expReg.test(valor));

// Hora 10:30 AM
// D == string (la D mayuscula busca un string)
expReg = /\d\d:\d\d \D\D/;
valor = '10:30 am';
console.log(expReg.test(valor));


