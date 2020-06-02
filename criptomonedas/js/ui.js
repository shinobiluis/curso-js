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

    // Imprime el resultado de la cotización
    mostrarResultado(resultado, moneda, crypto){
        // en caso de un resultado anterior, ocultarlo
        const resultadoAnterior = document.querySelector('#resultado > div');
        if (resultadoAnterior) {
            resultadoAnterior.remove();
        }
        console.log(resultado[crypto][moneda])
        const datosMoneda = resultado[crypto][moneda];
        // recortar digitos del precio
        let precio = datosMoneda.PRICE.toFixed(2),
            porcentaje = datosMoneda.CHANGEPCTDAY.toFixed(2),
            actualizado = new Date(datosMoneda.LASTUPDATE * 1000).toLocaleDateString('es-MX');
        // construir el template
        let templateHTML = `
            <div class="card bg-warning>
                <div class="card-body text-light">
                    <h2 class="card-title">Resultado:</h2>
                    <p>El precio de ${datosMoneda.FROMSYMBOL} a moneda ${datosMoneda.TOSYMBOL} es de: $ ${precio}</p>
                    <p>Variacion último día % ${porcentaje}</p>
                    <p>Ultima actualización: ${actualizado}</p>
                </div>
            </div>
        `;
        this.mostrarOcultarSpiner('block');
        setInterval(() => {
            // insertar el resultado
            document.querySelector('#resultado').innerHTML = templateHTML;
            // ocultar el spiner
            this.mostrarOcultarSpiner('none');
        }, 3000);
    }

    // mostrar spiner
    mostrarOcultarSpiner(vista){
        const spiner = document.querySelector('.contenido-spinner');
        spiner.style.display = vista;
    }
}