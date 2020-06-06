// instanciar ambas clases
const eventbrite = new EventBrite();
const ui = new Interfaz();

// Listener al buscador
document.getElementById('buscarBtn').addEventListener('click', (e) => {
    e.preventDefault();
    
    // Leer el texto del input buscar
    const textoBuscador = document.getElementById('evento').value;
    // Leer el select
    const categorias = document.getElementById('listado-categorias');
    const categoriaSeleccionada = categorias.options[categorias.selectedIndex].value;

    // revisar que hay algo escrito en el buscador
    if(textoBuscador !== ''){
        console.log('buscando');
    }else{
        console.log('no hay nada')
        ui.mosstrarMensaje('Escribe algo en el buscador', 'alert alert-danger mt-4')
    }
})