class UI {
    constructor() {

        // Instancias la api
        this.api = new API();
        // crear los markers con layergroup
        this.markers = new L.LayerGroup();
        // Iniciar el mapa
        this.mapa = this.inicializarMapa();

    }

    inicializarMapa() {
         // Inicializar y obtener la propiedad del mapa
         const map = L.map('mapa').setView([19.390519, -99.3739778], 6);
         const enlaceMapa = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
         L.tileLayer(
             'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
             attribution: '&copy; ' + enlaceMapa + ' Contributors',
             maxZoom: 18,
             }).addTo(map);
         return map;

    }

    mostrarEstablecimientos(){
        this.api.obtenerDatos()
            .then(datos => {
                console.log(datos);
                const resultados = datos.respuestaJson.results;
                // ejecutar la funcion para mostrar los pines
                this.mostrarPines(resultados);
            })
    }

    mostrarPines(datos){
        console.log(datos);
        // limpiar los markers
        this.markers.clearLayers();
        // recorer los establecimientos
        datos.forEach(dato => {
            // destructuring
            const { latitude, longitude, calle, regular, premium } = dato;
            // agregar el pin
            const marker = new L.marker([
                parseFloat(latitude),
                parseFloat(longitude)
            ]);
            this.markers.addLayer(marker);
        })
        this.markers.addTo(this.mapa);
    }
}