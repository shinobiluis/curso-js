let DB;

// Selectores de la interfaz
const form = document.querySelector('form'),
    nombreMascota = document.querySelector('#mascota'),
    nombreCliente = document.querySelector('#clinete'),
    telefono = document.querySelector('#telefono'),
    fecha = document.querySelector('#fecha'),
    hora = document.querySelector('#hora'),
    sintomas = document.querySelector('#sintomas'),
    citas = document.querySelector('#citas'),
    headingAdministra = document.querySelector('#administra');

// Esperar por el DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    // crear la base de datos
    let crearDB = window.indexedDB.open('citas', 1);

    // Si hay un error se envia en la consola
    crearDB.onerror = function(){
        console.log('hubo un error');
    }

    // si todo esta bien entonces muestra en consola, y asignar la base de datos.
    crearDB.onsuccess = function(){
        console.log('Todo listo!!');
        // Asignar a la base de datos
        DB = crearDB.result;
        console.log(DB)
    }
})