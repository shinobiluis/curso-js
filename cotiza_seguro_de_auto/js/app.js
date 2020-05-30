// Constructor para seguro
function Seguro(marca, anio, tipo){
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
}
Seguro.prototype.cotizarSeguro = function(){
    /**
        1 = americano 1.15
        2 = asiatico 1.05
        3 = europeo 1.35
     */
    let cantidad;
    const base = 2000;
    switch(this.marca){
        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
            cantidad = base * 1.05;
            break;
        case '3':
            cantidad = base * 1.35;
            break;
    }
    console.log(cantidad)
    // Leer calcular los años de diferencia
    const diferencia = new Date().getFullYear() - this.anio;
    console.log(`años de diferencia: ${diferencia}`)
    // cada año de diferencia hay que reducir 3% el valor del seguro
    cantidad -=((diferencia * 3) * cantidad)/100;
    /**
    Si el seguro s basico se multifplica por 30%
    si el seguro es completo 50% mas
     */
    if (this.tipo === 'basico') {
        cantidad *= 1.30;
    } else {
        cantidad *= 1.50;
    }
    console.log(cantidad);
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
        const seguro = new Seguro(marcaSeleccionada, anioSeleccionado, tipo)
        // Cotizar el seguro
        const cantidad = seguro.cotizarSeguro()
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