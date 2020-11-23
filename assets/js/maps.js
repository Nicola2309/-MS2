

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
                setMarkers(map);

 //---------------- Search Box from Google Docs and the Develop Mindfully Tutorial and Michelle Clement
            const input = document.getElementById("search");

            const searchBox = new google.maps.places.SearchBox(input);

            map.addListener("bounds_changed", () => {
                searchBox.setBounds(map.getBounds());
            });

            var markersSearched = [];

            searchBox.addListener("places_changed", () => {
                
                const places = searchBox.getPlaces();

                if (places.length == 0) {
                    return;
                } 

                markersSearched.forEach( (m) => {
                m.setMap(null);
                var markersSearched = [];

                });
                

                const bounds = new google.maps.LatLngBounds();

                places.forEach( (p) => {
                if (!p.geometry) {
                    return;
                } 

                const icond = {
                    url: 'http://maps.google.com/mapfiles/kml/paddle/red-circle.png',
                    size: new google.maps.Size(71, 71),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(17, 34),
                    scaledSize: new google.maps.Size(25, 25),
                };
            
                markersSearched.push(
                    new google.maps.Marker({
                    map: map,
                    title: p.name,
                    icon: icond,
                    position: p.geometry.location,
                    })
                );

                if (p.geometry.viewport) {
                  bounds.union(p.geometry.viewport);
                } else {
                    bounds.extend(p.geometry.location);
                }
                
                });

                map.fitBounds(bounds);
            });
        }

                
// -----------------------------------------------  Close Infowindow Function
            function closeOtherInfo() {
                if (infoObj.length > 0 ) {
                    infoObj[0].set("marker", null);
                    infoObj[0].close();
                    infoObj[0].length = 0;
                }

            }
            

// ------------------------------------------------ Resizing Markers from Google docs and Traversy Media tutorial, link in README



function setMarkers(map) {
    var icons = {
        pool : { 
            icon : {
            url: 'assets/images/icons/spring-icon.png',
            scaledSize: new google.maps.Size(30, 30),
            anchor: new google.maps.Point(10, 20),
            }
        },
        spa : {
            icon : { 
            url: 'assets/images/icons/pool-icon.png',
            scaledSize: new google.maps.Size(27, 27),
            anchor: new google.maps.Point(10, 20),
            }
        },
        restaurant : {
            icon : { 
            url: 'assets/images/icons/dining-icon.png',
            scaledSize: new google.maps.Size(27, 27),
            anchor: new google.maps.Point(20, 20),
            }
        },
        landmark : {
            icon : {
            url: 'assets/images/icons/red-pushpin.png',
            scaledSize: new google.maps.Size(27, 27),
            anchor: new google.maps.Point(10, 20),
        }
        },

    };  

    
    for (let i = 0; i < markersOnMap.length; i++) {
        let  contentString = ['<h5>'+ markersOnMap[i].placeName + '<h5>',
                              '<p>'+ 5 +'<p>',]

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
  
};


            var markersOnMap = [
                //----------------------------------- Hot Waters Locations
                {
                    placeName: 'Terme di Sorano Residence',
                    pic : '',
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
                    placeName: 'Terme Sensoriali di Chianciano',
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

                //----------------------------------- Restaurant Locations
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
                    placeName: 'Agriturismo ischieto, Serre di Rapolano',
                    LatLng: [{
                        lat: 43.263415,
                        lng: 11.624864 
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
                    placeName: 'Casa di Gala, Montecatini',
                    LatLng: [{
                        lat: 43.896139,  
                        lng: 10.789609
                    }],
                    type: 'restaurant'
                },                

                //----------------------------------- Historical Locations
                {
                    placeName: 'Pienza',
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
                {
                    placeName: 'Radicofani',
                    LatLng: [{
                        lat: 42.898582, 
                        lng: 11.768798
                    }],
                    type: 'landmark'
                },
                
            ];




