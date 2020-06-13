let DB;

// Selectores de la interfaz
const form = document.querySelector('form'),
    nombreMascota = document.querySelector('#mascota'),
    nombreCliente = document.querySelector('#cliente'),
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
        mostrarCitas();
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
    
    // cuanod el formulario se envia
    form.addEventListener('submit', agregarDatos);
    // 
    function agregarDatos(e){
        e.preventDefault();
        const nuevaCita = {
            mascota : nombreMascota.value,
            cliente : nombreCliente.value,
            telefono : telefono.value,
            fecha : fecha.value,
            hora : hora.value,
            sintomas : sintomas.value
        }
        console.log(nuevaCita)
        // En IndexdDB se utilizan las transascciones
        let transaction = DB.transaction(['citas'], 'readwrite');
        let objectStore = transaction.objectStore('citas');
        // console.log(objectStore)
        let peticion = objectStore.add(nuevaCita);
        console.log(peticion);
        peticion.onsuccess = () =>{
            form.reset();
        }
        transaction.oncomplete = () => {
            console.log('Cita agregada');
        }
        transaction.onerror = () => {
            console.log('un error');
        }
    }

    function mostrarCitas(){
        // Limpiar las citas anteriores
        // mientras citas tenga hijos
        while (citas.firstChild) {
            citas.removeChild(citas.firstChild);
        }
        // creamos un objectstore
        let objectStore = DB.transaction('citas').objectStore('citas');
        // esto retorna una peticion
        objectStore.openCursor().onsuccess = function(e){
            // cursos se va a ubicar en el registro indicado para acceder a los datos
            let cursor = e.target.result;
            // console.log(cursor)
            if (cursor) {
                let citaHTML = document.createElement('li');
                citaHTML.setAttribute('data-cita-id', cursor.value.key)
                citaHTML.classList.add('list-group-item');
                citaHTML.innerHTML = `
                    <p class="font-weight-bold">Mascota: <span class="font-weight-normal">${cursor.value.mascota}</span></p>
                    <p class="font-weight-bold">Cliente: <span class="font-weight-normal">${cursor.value.cliente}</span></p>
                    <p class="font-weight-bold">telefono: <span class="font-weight-normal">${cursor.value.telefono}</span></p>
                    <p class="font-weight-bold">fecha: <span class="font-weight-normal">${cursor.value.fecha}</span></p>
                    <p class="font-weight-bold">hora: <span class="font-weight-normal">${cursor.value.hora}</span></p>
                    <p class="font-weight-bold">sintomas: <span class="font-weight-normal">${cursor.value.sintomas}</span></p>
                `;
                // append al padre
                citas.appendChild(citaHTML);
                cursor.continue();
            } else {
                
            }
        }
    }
})