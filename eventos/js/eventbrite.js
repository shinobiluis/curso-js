class EventBrite {
    constructor(){
        this.token_auth = 'DCZGOZITREHAFHMC4YU3';
        this.ordenar = 'date';
    }
    // Mostrar resultados de la busqueda
    async obtenerEventos(evento, categoria){
        const respuestaEvento = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${evento}&sort_by=${this.ordenar}&categories=${categoria}&token=${this.token_auth}`);
        const eventos = await respuestaEvento.json();
        return {
            eventos
        }
    }   
    // obtener las categorais en init()
    async obtenerCategorias(){
        // consultar las categorias a la rest api de event brite
        const respuestaCategorias = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);
        // esperar la respesta y devolver un json
        const categorias = await respuestaCategorias.json();
        // devolvemos el resultado
        return {
            categorias
        }
    }
}