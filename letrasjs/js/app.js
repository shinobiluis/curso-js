import * as UI from './interfaz.js';
import { API } from './api.js';

UI.formularioBuscar.addEventListener('submit', (e) => {
    e.preventDefault();
    // Obtener datos del formulario
    const artisa = document.querySelector('#artista').value,
         cancion = document.querySelector('#cancion').value;
    
    if (artista == 0 || cancion === '') {
        UI.divMensajes.innerHTML = 'Error Todos los campos son obigatorios'
        UI.divMensajes.classList.add('error');
        setTimeout(()=>{
            UI.divMensajes.innerHTML = ''
            UI.divMensajes.classList.remove('error');
        },3000)
    }else{
        // El formulario esta completo, realiza la consulta al API
        const api = new API(cancion, artisa);
        api.consultarAPI()
            .then(data =>{
                if (data.respuesta.lyrics) {
                    // La cancion existe
                    const letra = data.respuesta.lyrics;
                    UI.divResultado.textContent = letra;
                }else{
                    // La cancion no existe
                    UI.divMensajes.innerHTML = 'La cancion no existe...'
                    UI.divMensajes.classList.add('error');
                    setTimeout(()=>{
                        UI.divMensajes.innerHTML = ''
                        UI.divMensajes.classList.remove('error');
                        UI.formularioBuscar.reset();
                    },3000)
                }
            })
    }
})