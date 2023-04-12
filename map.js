// Token de acesso Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiZ2lsZGV2YW5kZSIsImEiOiJjbGdlMDg1MzYyZmwwM3FuOXZ6NmFvb2xqIn0.aDtdfBqxaNz6WLBxQU4ZFw';

// Criação do mapa
var map = new mapboxgl.Map({
    container: 'map', // ID do contêiner HTML do mapa
    style: 'mapbox://styles/gildevande/clge0c707003401o1th9fuzdi', // Estilo do mapa (pode ser alterado)
    center: [-46.4222, -23.5000], // Coordenadas do centro do mapa (São Miguel Paulista)
    zoom: 13 // Nível de zoom inicial do mapa
});

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
