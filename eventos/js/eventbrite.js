class EventBrite {
    constructor(){
        this.token_auth = 'DCZGOZITREHAFHMC4YU3';
        this.ordenar = 'date';
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