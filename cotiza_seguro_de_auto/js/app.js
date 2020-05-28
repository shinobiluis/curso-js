// Constructor para seguro
function Seguro(marca, anio, tipo){
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
}

// Todo lo que se meustra
function Interfas(){}

// EventListener
const formulario = document.getElementById('cotizar-seguro')
formulario.addEventListener('submit', function(e){
    e.preventDefault();
    const marca = document.getElementById('marca');
    const marcaSeleccionada = marca.options[marca.selectedIndex].value;
    const marcaSeleccionadaText = marca.options[marca.selectedIndex].textContent;
    console.log('Presionado', marcaSeleccionada, marcaSeleccionadaText)
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