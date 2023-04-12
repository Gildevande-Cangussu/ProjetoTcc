// Token de acesso Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiZ2lsZGV2YW5kZSIsImEiOiJjbDgyYmp2b2kwb2RpM3dvM25uM2QxZ3BjIn0.7YJltuO14MOrUeqVXCwsnA';
// Criação do mapa
const map = new mapboxgl.Map({
    container: 'map', // ID do contêiner HTML do mapa
    style: 'mapbox://styles/gildevande/clge8s6le004201o1tjxbc4j8',  // Estilo do mapa (pode ser alterado)
    center: [-46.4222, -23.5000], // Coordenadas do centro do mapa (São Miguel Paulista)
    zoom: 13, // Nível de zoom inicial do mapa
});
//adicionando caixa de busca ao mapa//
const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
    placeholder: "Pesquisar endereço",
    marker: false,
  });
  document.getElementById("procurar-endereco").appendChild(geocoder.onAdd(map));
mapboxgl.accessToken = 'pk.eyJ1IjoiZ2lsZGV2YW5kZSIsImEiOiJjbDgyYmp2b2kwb2RpM3dvM25uM2QxZ3BjIn0.7YJltuO14MOrUeqVXCwsnA';

// Adição dos pontos de coleta

    map.on('load', function () {
        map.addLayer({
            'id': 'pontos-de-coleta',
            'type': 'symbol',
            'source': {
                'type': 'geojson',
                'data': '../GeoJSON.json'
            },
            'layout': {
                'icon-image': 'icone_do_ponto_de_coleta',
                'text-field': '{nome_do_ponto}',
                'text-size': 12,
                'text-offset': [0, 0.6],
                'text-anchor': 'top'
            }
        });
    });
