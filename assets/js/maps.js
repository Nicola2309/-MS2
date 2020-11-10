

            var map;
            var infoObj = [];
            var centerCords = {
                lat: 43.393074,
                lng: 11.102233
            };

// -----------------------------------------------  Function implementing the map
            function initMap() {
                map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 8,
                    center: centerCords
                });
                addMarkerInfo();
            

            window.onload = function() {
            initMap();
            };

// -----------------------------------------------  Function styling the marker
            function addMarkerInfo() {
                for ( var i = 0; i < markersOnMap.length; i++){
                    let contentString = '<h3>'+ markersOnMap[i].placeName + '<h3>'
                    const marker = new google.maps.Marker({
                        position: markersOnMap[i].LatLng[0],
                        icon: icons[markersOnMap[i].type].icon,
                        map: map
                    });

                    const infowindow = new google.maps.InfoWindow({
                        content: contentString,
                    });
                }
// -----------------------------------------------  Necessary functions for a good UX experience
                    marker.addListener("click", () => {
                        closeOtherInfo(); 
                        infowindow.open(map, marker);
                        infoObj[0] = infowindow;
                    });
                }
            }

            function closeOtherInfo() {
                if( infoObj.length > 0) {
                infoObj[0].set("marker", null);
                infoObj[0].close();
                infoObj[0].length = 0;
                }
            }

    
// -----------------------------------------------  icons' position and type
    
    var icons = {
                pool: {
                    icon : 'http://maps.google.com/mapfiles/kml/shapes/water.png'
                },
                spa:{
                    icon : 'http://maps.google.com/mapfiles/kml/shapes/swimming.png'
                },
                restaurant: {
                    icon : 'http://maps.google.com/mapfiles/kml/pal2/icon33.png'
                },
                landmark: {
                    icon : 'http://maps.google.com/mapfiles/kml/pushpin/red-pushpin.png'
                },
                glass: {
                    //Icons made Matthias Stasiak 
                    icon : 'https://drive.google.com/file/d/1Tv11K6eeXdCEUBQ9TfMDhEwP2wt5CC--/view?usp=sharing'
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
                    placeName: 'Azienda Agricola Crociani, Montepulciano',
                    LatLng: [{
                        lat: 43.090458, 
                        lng: 11.781090
                    }],
                    type: 'glass'
                },                {
                    placeName: 'Taverna del Grappolo Blu, Montalcino',
                    LatLng: [{
                        lat: 43.059136, 
                        lng: 11.489995
                    }],
                    type: 'restaurant'
                },
                {                
                    placeName: 'Cantina Castiglion del Bosco',
                    LatLng: [{
                        lat: 43.080726, 
                        lng: 11.416553
                    }],
                    type: 'glass'
                },                {
                    placeName: 'Name of a place',
                    LatLng: [{
                        lat: 22.6,
                        lng: 88.4
                    }],
                    type: 'restaurant'
                },                {
                    placeName: 'Name of a place',
                    LatLng: [{
                        lat: 22.6,
                        lng: 88.4
                    }],
                    type: 'restaurant'
                },                {
                    placeName: 'Name of a place',
                    LatLng: [{
                        lat: 22.6,
                        lng: 88.4
                    }],
                    type: 'restaurant'
                },

//-------------------------Historical Locations
                {
                    placeName: 'Name of a place',
                    LatLng: [{
                        lat: 22.6,
                        lng: 88.4
                    }],
                    type: 'landmark'
                },
                {
                    placeName: 'Name of a place',
                    LatLng: [{
                        lat: 22.6,
                        lng: 88.4
                    }],
                    type: 'landmark'
                },
            ];

