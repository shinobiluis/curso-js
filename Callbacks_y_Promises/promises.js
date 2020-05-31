// promises
/**Ejemplo con resolve */
// usualmente se pasan 2 parametros
// resolve = cuando la promesa se cumple
// reject = cuando la promesa no se cumple
const esperando = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('Se ejecuto')
    },5000);
});
// El then siempre va ligado a resolve
esperando.then(function(mensaje){
    console.log(mensaje);
})

/**Ejemplo con reject */
const aplicarDescuento = new Promise(function(resolve, reject){
    const descuento = false;
    if(descuento){
        resolve('Decuento aplicado');
    }else{
        reject('No se puede aplicar el descuento');
    }
});
aplicarDescuento.then(function(menseje){
    console.log(menseje)
}).catch(function(error){ // El catch siempre va ligado a reject
    console.log(error)
})