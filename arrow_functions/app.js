aprendiendo = () => {
    console.log("Aprendiendo arrow function");
}
// una linea norequiere llave
aprendiendo2 = () => console.log("Aprendiendo arrow functions sin llaves");
// retorana valor
aprendiendo3 = () => "Aprendiendo arrow functions como return";
// retorna objeto
aprendiendo4 = () => ({aprendiendo: 'JS'})
// pasamos parametros
aprendiendo5 = (valor) => `Aprendiendo ${valor}`;
// panado 1 parametro el parentecis es opcional
aprendiendo6 = valor => `Aprendiendo ${valor}`;
// pasando 2 parametros
aprendiendo7 = (valor, valor2) => console.log(`Aprendiendo ${valor} y ${valor2}`);

aprendiendo();
aprendiendo2();
console.log(aprendiendo3());
console.log(aprendiendo4());
console.log(aprendiendo5('JS'));
console.log(aprendiendo6('Javascript'));
aprendiendo7('Javascript', 'ES6')