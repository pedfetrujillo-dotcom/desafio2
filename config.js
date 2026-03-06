var config = {
    style: 'mapbox://styles/pedroft/cmmep2alr00fx01r62789ccq3',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoicGVkcm9mdCIsImEiOiJjbW1lb3ZxeHAwZWxkMnhzajN5NThjOHh0In0.hBglKmkzbrc89tYoUH_ArA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'La batalla contra el rabo de gato',
    subtitle: 'La isla de La Palma le hace frente a una especie invasora que parece imparable: el Rabo de Gato',
    byline: 'por Pedro Trujillo',
    footer: 'Fuente: Cabildo Insular de La Palma <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'El rabo de gato',
            image: 'https://static.tiempodecanarias.com/headers/2024/5/16/header-1715847328841-m.jpeg',
            description: 'El rabo de gato (Pennisetum setaceum) es una especie invasora que está afectando a múltiples islas de Canarias. Se propaga fácilmente; cada planta puede producir unas 10.000 semillas que pueden persistir hasta seis años en el suelo.',
            location: {
                center: [-17.85428, 28.66920],
                zoom: 9.41,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Zonas urbanas',
            image: 'https://static.eldiario.es/clip/2231220b-1226-41b2-b84e-a0672d8237f5_16-9-discover-aspect-ratio_default_0.jpg',
            description: 'El rabo de gato se propaga con facilidad por superficies amplias y soleadas, lo que incluye zonas urbanas, como la aldea de La Caldereta, cercana a Santa Cruz.',
            location: {
                center: [-17.77577, 28.67794],
                zoom: 16.13,
                pitch: 39.50,
                bearing: -39.83,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'A prueba de todo',
            image: 'https://assets.la-palma.travel/uploads/2019/06/rabo-gato-pennisetum-setaceum-katzenschwanzgras-salto-tigalate-436x290.jpg',
            description: 'Esta planta, introducida para la decoración, se adapta a todo tipo de terreno. Incluso los acantilados de la isla son aptos para su propagación.',
            location: {
                center: [-17.75878, 28.64056],
                zoom: 16.57,
                pitch: 72.50,
                bearing: 72.50
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'La isla contraataca',
            image: 'https://eltime.es/images02/medioambiente/rabo-gato-3anaga.jpg',
            description: 'Grupos de voluntarios y autoridades intentan limitar que esta planta se extienda de forma irreversible en zonas protegidas como el Barranco de las Angustias. Aunque el rabo de gato es implacable, aún hay esperanza gracias a avances científicos que estudian tipos de hongos como herramienta para frenar la amenaza.',
            location: {
                center: [-17.91097, 28.69075],
                zoom: 14,
                pitch: 44,
                bearing: 16.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
