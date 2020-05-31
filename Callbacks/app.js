// Este tema se saco de esta ulr 
//https://www.udemy.com/course/javascript-moderno-guia-definitiva-construye-10-proyectos/learn/lecture/9083244#announcements


// callback en foreach
const ciudades = ['Londres', 'New york', 'Madrid', 'Paris', 'Viena'];

// inline Callback ya que la funcion interna no tiene nombre = function(ciudad)
ciudades.forEach(function(ciudad){
    console.log(ciudad)
});


// Listado de paises
const paises = ['Francia', 'España', 'Portugal', 'Australia', 'Inglaterra', 'Irlanda'];

// Se agrega un nuevo pais despues de 2 segundo
function nuevoPais(pais, callback){
    setTimeout(function(){
        paises.push(pais)
        callback();
    },2000)
}

// Los paises se muestran despues de 1 segundo
function mostrarPaises(){
    setTimeout(function(){
        let html = '';
        paises.forEach(function(pais){
            html += `<li>${pais}</li>`
        })
        document.getElementById('app').innerHTML = html;
    }, 1000);
}

// Agregar nuevo pais
nuevoPais('Alemania', mostrarPaises);
// llamamos la funcion
mostrarPaises();