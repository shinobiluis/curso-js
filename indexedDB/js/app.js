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
        // Asignar a la base de datos
        DB = crearDB.result;
        // console.log(DB)
    }

    // este metodo solo corre una vez y es ideal para crear el schema de la base de datos
    crearDB.onupgradeneeded = function(e){
        // El evento es la misma base de datos
        let db = e.target.result;
        // definir el objectstore, toma 2 parametros el nombre de la bd y segundo las opciones
        // keypath es el inidice de la base de datos
        let objectstore = db.createObjectStore('citas', { keypath: 'key', autoIncrement: true });
        // crear los indecies y campos de la bd, createIndex : 3 parametros, nombre, kaypath y opciones
        objectstore.createIndex('mascota', 'mascota', { unique : false })
        objectstore.createIndex('cliente', 'cliente', { unique : false })
        objectstore.createIndex('telefono', 'telefono', { unique : false })
        objectstore.createIndex('fecha', 'fecha', { unique : false })
        objectstore.createIndex('hora', 'hora', { unique : false })
        objectstore.createIndex('sintomas', 'sintomas', { unique : false })
        console.log("Base de datos creada y lista")

    }
})