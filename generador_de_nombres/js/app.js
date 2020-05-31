//api consumida https://github.com/thm/uinames

document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);

// LLamado a Ajax e imprimir resultados
function cargarNombres(e){
    e.preventDefault();
    // Leer las variables
    const origen = document.getElementById('origen')
    const genero = document.getElementById('genero')
    // Accedemos al select que se selecciono de origen
    const origenSeleccionado = origen.options[origen.selectedIndex].value;
    const origenSeleccionadoText = origen.options[origen.selectedIndex].textContent;
    console.log(`Value: ${origenSeleccionado} Texto: ${origenSeleccionadoText}`);
    // Accedemos al select que se selecciono de genero
    const generoleecionado = genero.options[genero.selectedIndex].value;
    const generoleecionadoText = genero.options[genero.selectedIndex].textContent;
    console.log(`Value: ${generoleecionado} Texto: ${generoleecionadoText}`);
    // accedemos a la cantidad
    const cantidad = document.getElementById('numero').value;
    console.log(`La cantidad: ${cantidad}`)
    // creamos la url para consultar
    let url = '';
    url += 'http://uinames.com/api/?'
    // si se selecciono el origen
    if (origenSeleccionado !== '') {
            url += `region=${origenSeleccionado}&`
    } 
    // si se selecciono el genero
    if (generoleecionado !== '') {
        url += `genero=${generoleecionado}&`
    } 
    // Agregamos la cantidad de nombres
    if (cantidad !== '') {
        url += `genero=${cantidad}&`
    }
    console.log(`La url queda asi: ${url}`)

    // Conectar con ajax
     // Iniciar XMLHTTPRequest
     const xhr = new XMLHttpRequest();
     // Abrimos la conexion
     xhr.open('GET', url, true);
     // Datos e impresion del template
     xhr.onload = function() {
          if(this.status === 200) {
               const nombres = JSON.parse( this.responseText ) ;
               // Generar el HTML
               let htmlNombres = '<h2>Nombres Generados</h2>';
               
               htmlNombres += '<ul class="lista">';

               // Imprimir cada nombre
               nombres.forEach(function(nombre) {
                    htmlNombres += `
                              <li>${nombre.name}
                    `;
               })

               htmlNombres += '</ul>';

               document.getElementById('resultado').innerHTML = htmlNombres;
          }
          console.log(this.status)
     }
     // Enviar el Request
     xhr.send();
}