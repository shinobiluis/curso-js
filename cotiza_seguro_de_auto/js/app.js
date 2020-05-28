// Constructor para seguro
function Seguro(marca, anio, tipo){
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
}

// Todo lo que se meustra
function Interfaz(){}
// mensaje que se imprime en el html
Interfaz.prototype.mostrarEror = function(mensaje, tipo){
    const div = document.createElement('div');
    if (tipo === 'error') {
        div.classList.add('mensaje', 'error');
    }else{
        div.classList.add('mensaje', 'correcto');
    }
    div.innerHTML = `${mensaje}`;
    // añadimos el div antes del div con clase .form-group
    formulario.insertBefore(div, document.querySelector('.form-group'));
    setTimeout(function(){
        document.querySelector('.mensaje').remove()
    }, 3000)

}

// EventListener
const formulario = document.getElementById('cotizar-seguro')
formulario.addEventListener('submit', function(e){
    e.preventDefault();
    // leer la marca seleccionada del select
    const marca = document.getElementById('marca');
    const marcaSeleccionada = marca.options[marca.selectedIndex].value;
    const marcaSeleccionadaText = marca.options[marca.selectedIndex].textContent;
    console.log(`marca, value: ${marcaSeleccionada}, text: ${marcaSeleccionadaText}`)
    // leer el año seleccionado del select
    const anio = document.getElementById('anio');
    const anioSeleccionado = anio.options[anio.selectedIndex].value;
    const anioSeleccionadoText = anio.options[anio.selectedIndex].textContent;
    console.log(`año', value: ${anioSeleccionado}, text: ${anioSeleccionadoText}`)
    // leer el valor del radio button
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    console.log(tipo);
    // crear instancia de interfaz(esta en la linea 9)
    const interfaz = new Interfaz();

    // revisamos que los campos no esten vacios
    if (marcaSeleccionada === '' || anioSeleccionado === '' || tipo === '') {
        // Interfaz inprimiendo un error
        console.log("Faltan Datos");
        interfaz.mostrarEror('Faltan datos, revisar el formulario', 'error');
    }else{
        // instanciar seguro y mostrar interfaz
        console.log("Todo correcto");
    }
})

// creamos el select con el listado de años
const max = new Date().getFullYear(),
    min = max - 20;
const selectAnios = document.getElementById('anio');
for(let i = max; i > min; i-- ){
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    selectAnios.appendChild(option);
}