class API {

    async obtenerDatos(){
        const total = 500;
        // obtener datos desde el api
        const datos = await fetch(`https://api.datos.gob.mx/v1/precio.gasolina.publico?pageSize=${total}`);
        // retornar respuesta
        const respuestaJson = await datos.json();

        return {
            respuestaJson
        }
    }

}