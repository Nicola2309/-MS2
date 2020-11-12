

            var map;
            var infoObj = [];
            

// -----------------------------------------------  Function implementing the map, code built through the tutorial of Pradip Debnath, link in README
            function initMap() {
                var centerCords = {
                    lat: 43.393074,
                    lng: 11.102233
                };
                map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 8,
                    center: centerCords
                });
                addMarkerinfo();
            }
// -----------------------------------------------  Function styling the marker
            function addMarkerinfo() {
                for ( var i = 0; i < markersOnMap.length; i++){ 
                    let  contentString = '<h3>'+ markersOnMap[i].placeName + '<h3>';

                    const marker = new google.maps.Marker({
                        position: markersOnMap[i].LatLng[0],
                        icon: icons[markersOnMap[i].type].icon,
                        map: map
                    });

                    const infowindow = new google.maps.InfoWindow({
                        content: contentString,
                    });
                    

                    marker.addListener("click", () => {
                        closeOtherInfo(); 
                        infowindow.open(marker.get('map'), marker);
                        infoObj[0] = infowindow;
                    });
                               
                }
            }    
            
        
                
// -----------------------------------------------  Necessary function for a good UX experience, close infoWindow
            function closeOtherInfo() {
                if (infoObj.length > 0 ) {
                    infoObj[0].set("marker", null);
                    infoObj[0].close();
                    infoObj[0].length = 0;
                }

            }
            


    
// -----------------------------------------------  icons' position and type
    
    var icons = {
                pool: {
                    icon : 'http://maps.google.com/mapfiles/kml/shapes/water.png',
// Code provided by StackOverflow, link in README
                    scaledSize: new google.maps.scaledSize(50, 50), // scaled size
                    
                    anchor: new google.maps.Point(0, 0) // anchor
                },
                spa: {
                    icon : 'http://maps.google.com/mapfiles/kml/shapes/swimming.png',
                    scaledSize: new google.maps.scaledSize(50, 50), // scaled size
                    origin: new google.maps.Point(0,0), // origin
                    anchor: new google.maps.Point(0, 0) // anchor
                },
                restaurant: {
                    icon : 'http://maps.google.com/mapfiles/kml/pal2/icon33.png',
                    scaledSize: new google.maps.scaledSize(50, 50), // scaled size
                    origin: new google.maps.Point(0,0), // origin
                    anchor: new google.maps.Point(0, 0) // anchor
                },
                landmark: {
                    icon : 'http://maps.google.com/mapfiles/kml/pushpin/red-pushpin.png',
                    scaledSize: new google.maps.scaledSize(50, 50), // scaled size
                    origin: new google.maps.Point(0,0), // origin
                    anchor: new google.maps.Point(0, 0) // anchor
                },
            };


            var markersOnMap = [
                {
                    placeName: 'Terme di Sorano Residence',
                    LatLng: [{
                        lat: 42.660515, 
                        lng: 11.720263
                    }],
                    type: 'spa'
                },
                {
                    placeName: 'Cascate del Mulino, Saturnia',
                    LatLng: [{
                        lat: 42.648306, 
                        lng: 11.512613,
                    }],
                    type: 'pool'
                },
                {
                    placeName: 'Terme di Saturnia, Natural SPA & Golf Resort',
                    LatLng: [{
                        lat: 42.657329,  
                        lng: 11.516620
                    }],
                    type: 'spa'
                },
                {
                    placeName: 'Bagni di San Filippo',
                    LatLng: [{
                        lat: 42.927768, 
                        lng: 11.702583
                    }],
                    type: 'pool'
                },
                {
                    placeName: 'Terme San Filippo',
                    LatLng: [{
                        lat: 42.929539, 
                        lng: 11.701996
                    }],
                    type: 'spa'
                },
                {
                    placeName: 'Stabilimento Termale & Hotel Fonteverde',
                    LatLng: [{
                        lat: 42.861133, 
                        lng: 11.876253
                    }],
                    type: 'spa'
                },
                {
                    placeName: 'Piscine Termali Theia, chianciano',
                    LatLng: [{
                        lat: 43.043209,
                        lng: 11.809026
                    }],
                    type: 'spa'
                },
                {
                    placeName: 'Terme di Chianciano',
                    LatLng: [{
                        lat: 43.042778, 
                        lng: 11.816051
                    }],
                    type: 'spa'
                },
                {
                    placeName: 'Terme San Giovanni, Rapolano',
                    LatLng: [{
                        lat: 43.280160, 
                        lng: 11.590819
                    }],
                    type: 'spa'
                },
                {
                    placeName: 'Terme di Petriolo',
                    LatLng: [{
                        lat: 43.080681, 
                        lng: 11.300203
                    }],
                    type: 'pool'
                },
                {
                    placeName: 'Mercure Spa Hotel, Petriolo',
                    LatLng: [{
                        lat: 43.075044,
                        lng: 11.297955
                    }],
                    type: 'spa'
                },
                {
                    placeName: 'Terme Tettuccio, Montecatini',
                    LatLng: [{
                        lat: 43.888284, 
                        lng: 10.776945
                    }],
                    type: 'spa'
                },
                {
                    placeName: 'Grotta Giusti, stabilimento termale',
                    LatLng: [{
                        lat: 43.866606, 
                        lng: 10.831799
                    }],
                    type: 'spa'
                },
                {
                    placeName: 'Le Caldane, Terme Etrusco-Romane',
                    LatLng: [{
                        lat: 43.390897,
                        lng: 11.134595
                    }],
                    type: 'pool'
                },                
                {
                    placeName: 'ADLER Spa Resort, Bagno Vignoni',
                    LatLng: [{
                        lat: 43.030192,
                        lng: 11.622628
                    }],
                    type: 'spa'
                },

 // ----------------------------------------------- Restaurant Locations
                {
                    placeName: 'ROSSO VIVO Shop e Food Experience | Pizzeria, Chianciano',
                    LatLng: [{
                        lat: 43.048779, 
                        lng: 11.818946
                    }],
                    type: 'restaurant'
                },
                {
                    placeName: 'Ristorante Trattoria Toscana Al Vecchio Forno, San Quirico D Orcia',
                    LatLng: [{
                        lat: 43.059829, 
                        lng: 11.604703
                    }],
                    type: 'restaurant'
                },
                {                
                    placeName: 'Sette di Vino, Pienza',
                    LatLng: [{
                        lat: 43.077013, 
                        lng: 11.679258
                    }],
                    type: 'restaurant'
                },                {
                    placeName: 'Osteria Acquacheta, Montepulciano',
                    LatLng: [{
                        lat: 43.091404, 
                        lng: 11.781265
                    }],
                    type: 'restaurant'
                },                {
                    placeName: 'Osteria del Borgo, Montepulciano',
                    LatLng: [{
                        lat: 43.093151, 
                        lng: 11.780736
                    }],
                    type: 'restaurant'
                },                {
                    placeName: 'Taverna del Grappolo Blu, Montalcino',
                    LatLng: [{
                        lat: 43.059136, 
                        lng: 11.489995
                    }],
                    type: 'restaurant'
                },                
                {
                    placeName: 'Osteria lo Spugnone, Bagni San Filippo',
                    LatLng: [{
                        lat: 42.929044, 
                        lng: 11.701614
                    }],
                    type: 'restaurant'
                },                
                {
                    placeName: 'Osteria Antico Travaglio, Monteriggioni',
                    LatLng: [{
                        lat: 43.389716,
                        lng: 11.223747
                    }],
                    type: 'restaurant'
                },                
                {
                    placeName: 'Ristorante Daniela, San Casciano dei Bagni',
                    LatLng: [{
                        lat: 42.870937,
                        lng: 11.875331
                    }],
                    type: 'restaurant'
                },                
                {
                    placeName: 'Hostaria del Ceccottino, Pitigliano',
                    LatLng: [{
                        lat: 42.633603,
                        lng: 11.665421
                    }],
                    type: 'restaurant'
                },                
                {
                    placeName: 'Sapori in Torre, Rapolano',
                    LatLng: [{
                        lat: 43.287536, 
                        lng: 11.602880
                    }],
                    type: 'restaurant'
                },                
                {
                    placeName: 'Le Vecchie Mura, San Gimignano',
                    LatLng: [{
                        lat: 43.466861,
                        lng: 11.044928
                    }],
                    type: 'restaurant'
                },                
                {
                    placeName: 'Ristorante le Due Cecche, Pari',
                    LatLng: [{
                        lat: 43.063332,
                        lng: 11.321183
                    }],
                    type: 'restaurant'
                },                
                {
                    placeName: 'La Cascina, Montecatini',
                    LatLng: [{
                        lat: 43.884821, 
                        lng: 10.772455
                    }],
                    type: 'restaurant'
                },                

//-------------------------Historical Locations
                {
                    placeName: 'Fontana Palazzo Piccolomini, Pienza',
                    LatLng: [{
                        lat: 43.076597,
                        lng: 11.678809
                    }],
                    type: 'landmark'
                },
                {
                    placeName: 'Mura a Nord, Monteriggioni',
                    LatLng: [{
                        lat: 43.390599, 
                        lng: 11.222120
                    }],
                    type: 'landmark'
                },                
                {
                    placeName: 'Pitigliano',
                    LatLng: [{
                        lat: 42.634929,
                        lng: 11.670008
                    }],
                    type: 'landmark'
                },                
                {
                    placeName: 'Piazza del Campo, Siena',
                    LatLng: [{
                        lat: 43.318421,
                        lng: 11.331696
                    }],
                    type: 'landmark'
                },                
                {
                    placeName: 'San Gimignano',
                    LatLng: [{
                        lat: 43.467450,
                        lng: 11.043789
                    }],
                    type: 'landmark'
                },                
                {
                    placeName: 'Torre Guinigi, Lucca',
                    LatLng: [{
                        lat: 43.843695,
                        lng: 10.506984
                    }],
                    type: 'landmark'
                },                
                {
                    placeName: 'Cattedrale Santa Maria del Fiore',
                    LatLng: [{
                        lat: 43.773142,
                        lng: 11.255968
                    }],
                    type: 'landmark'
                },
                {
                    placeName: 'Labirinto di Porsenna',
                    LatLng: [{
                        lat: 43.015510,
                        lng: 11.948979
                    }],
                    type: 'landmark'
                },
                {
                    placeName: 'Pisa',
                    LatLng: [{
                        lat: 43.722955, 
                        lng: 10.396598
                    }],
                    type: 'landmark'
                },
            ];

