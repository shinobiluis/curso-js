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
        eventbrite.obtenerEventos(textoBuscador, categoriaSeleccionada)
            .then(eventos => {
                if (eventos.eventos.events.length > 0) {
                    ui.mosstrarEventos(eventos.eventos)
                }else{
                    ui.mosstrarMensaje('No hay resultados', 'alert alert-danger mt-4')
                }
            })
    }else{
        ui.mosstrarMensaje('Escribe algo en el buscador', 'alert alert-danger mt-4')
    }
})