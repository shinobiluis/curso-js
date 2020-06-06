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