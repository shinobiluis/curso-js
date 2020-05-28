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