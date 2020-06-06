class Interfaz {
    constructor(){
        // inicializamos la app al instanciar
        this.init();
        // Leer el resultado
        this.listado = document.getElementById('resultado-eventos');
    }
    // Metodo para cuando inicalice la app
    init(){
        // llamanos el metodo
        this.imprimirCategorias()
    }
    // imprimir categorias
    imprimirCategorias() {
        const listaCategorias = eventbrite.obtenerCategorias()
            .then(categorias => {
                // console.log(categorias)
                const cats = categorias.categorias.categories;
                const seletcCategorias = document.getElementById('listado-categorias');
                // recorremos el arreglo e imprimimos los option
                cats.forEach(cat => {
                    const option = document.createElement('option');
                    option.value = cat.id;
                    option.appendChild(document.createTextNode(cat.name_localized));
                    seletcCategorias.appendChild(option);
                })
            })
    }
    // Lee la respuesta de la api e imprime los resultados
    mosstrarEventos(){
        // Leer los eventos y agregarlos a una variable
        const listaEventos = eventos.events;
        // recorer los eventos y crear su template
        listaEventos.forEach(evento => {
            this.listado.innerHTML = `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <div class="card-body">
                            <img class="img-fluid mb-2" src="${evento.logo !== null ? evento.logo.url : ''}"
                        </div>
                        <div class="card-body">
                            <div class="card-text">
                                <h2 class="text-center">${evento.name.text}</h2>
                                <p>${evento.descrption.text.substring(0,280)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        })

    }
    // metodo para imprimir mensajes: 2 parametros menaje y claeses
    mosstrarMensaje(mesnaje, clases) {
        const div = document.createElement('div');
        div.classList = clases;
        // agregar texto
        div.appendChild(document.createTextNode(mesnaje));
        // buscar un padre
        const buscadorDiv = document.querySelector('#buscador');
        buscadorDiv.appendChild(div);
        setTimeout(()=>{
            this.limpiarMensaje();
        },3000)
    }
    // desaparece el mensaje en caso de que exista
    limpiarMensaje(){
        const alert = document.querySelector('.alert');
        if(alert){
            alert.remove();
        }
    }
}