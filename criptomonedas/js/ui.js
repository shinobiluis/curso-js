class Interfaz {
    constructor(){
        this.init();
    }
    init(){
        this.construirSelect();
    }
    construirSelect(){
        cotizador.obtenerMonedasAPI()
            .then(monedas => {
                // console.log(monedas.monedas.Data)
                // crear un select de opciones
                const select = document.querySelector('#criptomoneda');
                // iterar por los resultados del api
                for( const [key, value] of Object.entries(monedas.monedas.Data)){
                    // console.log(key);
                    // console.log(value);
                    // añadir el symbol y el nombre como opciones
                    const opcion = document.createElement('option');
                    opcion.value = value.Symbol;
                    opcion.appendChild(document.createTextNode(value.CoinName));
                    select.appendChild(opcion)
                }
            })
    }

    mostrarMensaje(mensaje, clases){
        const div = document.createElement('div');
        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));
        // Seleccionar mensajes
        const divMensaje = document.querySelector('.mensajes');
        divMensaje.appendChild(div);
        // mostrar contenido
        setTimeout(()=>{
            document.querySelector('.mensajes div').remove();
        },3000)
    }
}