var map;
var infoObj = [];


// Function implementing the map, markers, infowindow behavior built through Google Docs and the tutorial of Pradip Debnath, link in README
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

	//----------------------- Search Box from Google Docs and the Develop Mindfully Tutorial and Michelle Clement ms2
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

		markersSearched.forEach((m) => {
			m.setMap(null);
			var markersSearched = [];

		});


		const bounds = new google.maps.LatLngBounds();

		places.forEach((p) => {
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
	if (infoObj.length > 0) {
		infoObj[0].set("marker", null);
		infoObj[0].close();
		infoObj[0].length = 0;
	}

}


// ------------------------------------------------ Resizing Markers from Google docs and Traversy Media tutorial, link in README


function setMarkers(map) {
	var icons = {
		pool: {
			icon: {
				url: 'assets/images/icons/spring-icon.png',
				scaledSize: new google.maps.Size(30, 30),
				anchor: new google.maps.Point(10, 20),
			}
		},
		spa: {
			icon: {
				url: 'assets/images/icons/pool-icon.png',
				scaledSize: new google.maps.Size(27, 27),
				anchor: new google.maps.Point(10, 20),
			}
		},
		restaurant: {
			icon: {
				url: 'assets/images/icons/dining-icon.png',
				scaledSize: new google.maps.Size(27, 27),
				anchor: new google.maps.Point(20, 20),
			}
		},
		landmark: {
			icon: {
				url: 'assets/images/icons/red-pushpin.png',
				scaledSize: new google.maps.Size(27, 27),
				anchor: new google.maps.Point(10, 20),
			}
		},

	};


	for (let i = 0; i < markersOnMap.length; i++) {
		let contentString = markersOnMap[i].placeName;

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
		placeName: "<img src='assets/images/150px/rapolano-150px-pexels-vincent-rivaud.jpg'><h4>Terme di Rapolano</h4><a target='_blank' href='https://www.termesangiovanni.it/it/home'>Click here for the Official Website</a>",
		LatLng: [{
			lat: 42.660515,
			lng: 11.720263
		}],
		type: 'spa'
	},
	{
		placeName: "<img src='assets/images/150px/Saturnia-Mulino-150pxpexels-matheus-bertelli.jpg'><h4>Cascate del Mulino, Saturnia</h4><a target='_blank' href='https://www.cascate-del-mulino.info/'>Click here for the Official Website</a>",
		LatLng: [{
			lat: 42.648306,
			lng: 11.512613,
		}],
		type: 'pool'
	},
	{
		placeName: "<img src='assets/images/150px/SaturniaSpa150px-pexels-barbara-ribeiro.jpg'><h4> SPA & Golf Resort of Saturnia</h4><a target='_blank' href='https://www.termedisaturnia.it/it'>Click here for the Official Website</a>",
		LatLng: [{
			lat: 42.657329,
			lng: 11.516620
		}],
		type: 'spa'
	},
	{
		placeName: "<img src='assets/images/150px/Bagnifilippo150pxpexels-eberhard-grossgasteiger.jpg'><h4> Bagni San Filippo</h4><a target='_blank' href='http://www.bagnisanfilippoterme.it/bagni%20san%20filippo.html'>Click here for the Official Website</a>",
		LatLng: [{
			lat: 42.927768,
			lng: 11.702583
		}],
		type: 'pool'
	},
	{
		placeName: "<img src='assets/images/150px/bagnifilippospa-150px-pexels-barbara-ribeiro-5731220.jpg'><h4> Terme San Filippo</h4><a target='_blank' href='http://www.termesanfilippo.com/index.html'>Click here for the Official Website</a>",
		LatLng: [{
			lat: 42.929539,
			lng: 11.701996
		}],
		type: 'spa'
	},
	{
		placeName: "<img src='assets/images/150px/bagnifilippospa-150px-pexels-barbara-ribeiro-5731220.jpg'><h4>Fonteverde Spa & Hotel</h4><a target='_blank' href='https://www.fonteverdespa.com/it/resort-spa-toscana/1-0.html'>Click here for the Official Website</a>",
		LatLng: [{
			lat: 42.861133,
			lng: 11.876253
		}],
		type: 'spa'
	},
	{
		placeName: "<img src='assets/images/150px/Theiachianciano-150px-pexels-snapwire-9422 (1).jpg'><h4>Piscine Termali Theia, Chianciano</h4><a target='_blank' href='https://www.piscinetermalitheia.it/'>Click here for the Official Website</a>",
		LatLng: [{
			lat: 43.043209,
			lng: 11.809026
		}],
		type: 'spa'
	},
	{
		placeName: "<img src='assets/images/150px/sensorialiChianciano-150px-pexels-barbara-ribeiro.jpg'><h4>Terme Sensoriali di Chianciano</h4><a target='_blank' href='https://www.termesensoriali.it/'>Click here for the Official Website</a>",
		LatLng: [{
			lat: 43.042778,
			lng: 11.816051
		}],
		type: 'spa'
	},
	{
		placeName: "<img src='assets/images/150px/rapolano-150px-pexels-vincent-rivaud.jpg'><h4>Terme San Giovanni, Rapolano</h4><a target='_blank' href='https://www.termesangiovanni.it/it/home'>Click here for the Official Website</a>",
		LatLng: [{
			lat: 43.280160,
			lng: 11.590819
		}],
		type: 'spa'
	},
	{
		placeName: "<img src='assets/images/150px/petriolo-150px-pexels-camila-cordeiro.jpg'><h4>Terme di Petriolo</h4><a target='_blank' href='http://www.termepetriolo.it/'>Click here for the Official Website</a>",
		LatLng: [{
			lat: 43.080681,
			lng: 11.300203
		}],
		type: 'pool'
	},
	{
		placeName: "<img src='assets/images/150px/Mercure-150px-pexels-pixabay-221457 (1).jpg'><h4>Mercure Spa Hotel, Petriolo</h4><a target='_blank' href='https://mercurepetriolosienatermespa.it/'>Click here for the Official Website</a>",
		LatLng: [{
			lat: 43.075044,
			lng: 11.297955
		}],
		type: 'spa'
	},
	{
		placeName: "<img src='assets/images/150px/tettuccio-150px-pexels-eberhard-grossgasteiger-449461 (1).jpg'><h4>Terme Tettuccio, Montecatini</h4><a target='_blank' href='https://www.termemontecatini.it/le-terme/terme-tettuccio/'>Click here for the Official Website</a>",
		LatLng: [{
			lat: 43.888284,
			lng: 10.776945
		}],
		type: 'spa'
	},
	{
		placeName: "<img src='assets/images/150px/grotta-150px-pexels-viviana-camacho-2432208.jpg'><h4>Grotta Giusti</h4><a target='_blank' href='https://www.grottagiustispa.com/it/spa-toscana/1-0.html'>Click here for the Official Website</a>",
		LatLng: [{
			lat: 43.866606,
			lng: 10.831799
		}],
		type: 'spa'
	},
	{
		placeName: "<img src='assets/images/150px/Caldane150pxpexels-pixabay-261088 (2).jpg'><h4>Le Caldane, Terme Etrusco-Romane</h4><a target='_blank' href='https://commons.wikimedia.org/wiki/Category:Le_Caldane'>Click here for the Official Website</a>",
		LatLng: [{
			lat: 43.390897,
			lng: 11.134595
		}],
		type: 'pool'
	},
	{
		placeName: "<img src='assets/images/150px/adler150px-pexels-breakingpic.jpg'><h4>ADLER Spa Resort, Bagno Vignoni</h4><a target='_blank' href='https://www.adler-resorts.com/en/adler-spa-resort-thermae/25-0.html'>Click here for the Official Website</a>",
		LatLng: [{
			lat: 43.030192,
			lng: 11.622628
		}],
		type: 'spa'
	},

	//----------------------------------- Restaurant Locations

	{
		placeName: "<img src='assets/images/150px/vecchioforno-150px-pexels-pixabay.jpg'><h4>Al Vecchio Forno, San Quirico D Orcia</h4><a target='_blank' href='https://www.palazzodelcapitano.com/tuscany/trattoria-toscana/'>Click here for the Official Website</a>",
		LatLng: [{
			lat: 43.059829,
			lng: 11.604703
		}],
		type: 'restaurant'
	},
	{
		placeName: "<img src='assets/images/150px/settevino-150px-pexels-kaboompics-com.jpg'><h4>Sette di Vino, Pienza</h4><a target='_blank' href='http://www.portalepienza.it/Siti_commerciali/ristoranti_e_trattorie/Sette_di_Vino/sette_di_vino.html'>Click here for the Official Website</a>",
		LatLng: [{
			lat: 43.077013,
			lng: 11.679258
		}],
		type: 'restaurant'
	}, {
		placeName: "<img src='assets/images/150px/osteacquacheta-150px-pexels-life-of-pix.jpg'><h4>Osteria Acquacheta, Montepulciano</h4><a target='_blank' href='https://www.acquacheta.eu/'>Click here for the Official Website</a>",
		LatLng: [{
			lat: 43.091404,
			lng: 11.781265
		}],
		type: 'restaurant'
	}, {
		placeName: "<img src='assets/images/150px/osteborgomontepul-150px-pexels-elevate.jpg'><h4>Osteria del Borgo, Montepulciano</h4><a target='_blank' href='https://www.osteriadelborgo.it/'>Click here for the Official Website</a>",
		LatLng: [{
			lat: 43.093151,
			lng: 11.780736
		}],
		type: 'restaurant'
	},
	{
		placeName: "<img src='assets/images/150px/ostespugnone-150px-pexels-creative-vix.jpg'><h4>Osteria lo Spugnone, Bagni San Filippo</h4><a target='_blank' href='http://www.lospugnone.it/'>Click here for the Official Website</a>",
		LatLng: [{
			lat: 42.929044,
			lng: 11.701614
		}],
		type: 'restaurant'
	},
	{
		placeName: "<img src='assets/images/150px/travagliomonterig-150px-pexels-andrea-piacquadio.jpg'><h4>Osteria Antico Travaglio, Monteriggioni</h4><a target='_blank' href='https://www.anticotravaglio-monteriggioni.com/osteria-gelateria/it/'>Click here for the Official Website</a>",
		LatLng: [{
			lat: 43.389716,
			lng: 11.223747
		}],
		type: 'restaurant'
	},
	{
		placeName: "<img src='assets/images/150px/Daniela-150px-pexels-chan-walrus.jpg'><h4>Ristorante Daniela, San Casciano dei Bagni</h4><a target='_blank' href='https://tuscanhouse.com/ristorante-daniela/'>Click here for the Official Website</a>",
		LatLng: [{
			lat: 42.870937,
			lng: 11.875331
		}],
		type: 'restaurant'
	},
	{
		placeName: "<img src='assets/images/150px/ceccottino-150px-pexels-skitterphoto.jpg'><h4>Hostaria del Ceccottino, Pitigliano</h4><a target='_blank' href='https://ceccottino.com/'>Click here for the Official Website</a>",
		LatLng: [{
			lat: 42.633603,
			lng: 11.665421
		}],
		type: 'restaurant'
	},
	{
		placeName: "<img src='assets/images/150px/ischieto-150px-pexels-snapwire.jpg'><h4>Agriturismo ischieto, Serre di Rapolano</h4><a target='_blank' href='https://www.ischieto.it/'>Click here for the Official Website</a>",
		LatLng: [{
			lat: 43.263415,
			lng: 11.624864
		}],
		type: 'restaurant'
	},
	{
		placeName: "<img src='assets/images/150px/vecchiemura-150px-pexels-adrienn.jpg'><h4>Le Vecchie Mura, San Gimignano</h4><a target='_blank' href='https://www.vecchiemura.it/'>Click here for the Official Website</a>",
		LatLng: [{
			lat: 43.466861,
			lng: 11.044928
		}],
		type: 'restaurant'
	},
	{
		placeName: "<img src='assets/images/150px/cecche-150px-pexels-lawrence-suzara.jpg'><h4>Ristorante le Due Cecche, Pari</h4><a target='_blank' href='https://pari-toscana.catalogo-online.it/ristorante/bar-ristorante-le-due-cecche-pari/'>Click here for the Official Website</a>",
		LatLng: [{
			lat: 43.063332,
			lng: 11.321183
		}],
		type: 'restaurant'
	},
	{
		placeName: "<img src='assets/images/150px/gala-150px-pexels-terje-sollie.jpg'><h4>Casa di Gala, Montecatini</h4><a target='_blank' href='https://it-it.facebook.com/casadigala/'>Click here for the Official Website</a>",
		LatLng: [{
			lat: 43.896139,
			lng: 10.789609
		}],
		type: 'restaurant'
	},

	//----------------------------------- Historical Locations
	{
		placeName: "<img src='assets/images/150px/pienza-150px-pexels-oleg-magni.jpg'><h4>Pienza</h4><a target='_blank' href='https://www.comune.pienza.si.it/'>Click here for the Official Website</a>",
		LatLng: [{
			lat: 43.076597,
			lng: 11.678809
		}],
		type: 'landmark'
	},
	{
		placeName: "<img src='assets/images/150px/monteriggioni-150px-pexels-lisa-fotios.jpg'><h4>Mura a Nord, Monteriggioni</h4><a target='_blank' href='http://www.monteriggioniturismo.it/it/'>Click here for the Official Website</a>",
		LatLng: [{
			lat: 43.390599,
			lng: 11.222120
		}],
		type: 'landmark'
	},
	{
		placeName: "<img src='assets/images/150px/pitigliano-150px-pexels-nicolas-postiglioni.jpg'><h4>Pitigliano</h4><a target='_blank' href='https://www.pitigliano.org/'>Click here for the Official Website</a>",
		LatLng: [{
			lat: 42.634929,
			lng: 11.670008
		}],
		type: 'landmark'
	},
	{
		placeName: "<img src='assets/images/150px/siena-150px-pexels-Foto di David Mark da Pixabay.jpg'><h4>Piazza del Campo, Siena</h4><a target='_blank' href='https://www.comune.siena.it/'>Click here for the Official Website</a>",
		LatLng: [{
			lat: 43.318421,
			lng: 11.331696
		}],
		type: 'landmark'
	},
	{
		placeName: "<img src='assets/images/150px/Gimignano-150px-pexels-lisa-fotios.jpg'><h4>San Gimignano</h4><a target='_blank' href='https://www.sangimignano.com/'>Click here for the Official Website</a>",
		LatLng: [{
			lat: 43.467450,
			lng: 11.043789
		}],
		type: 'landmark'
	},
	{
		placeName: "<img src='assets/images/150px/lucca-150px-pexels-michael-gane.jpg'><h4>Torre Guinigi, Lucca</h4><a target='_blank' href='http://www.comune.lucca.it/home'>Click here for the Official Website</a>",
		LatLng: [{
			lat: 43.843695,
			lng: 10.506984
		}],
		type: 'landmark'
	},
	{
		placeName: "<img src='assets/images/150px/firenze-150px-pexels-fede-roveda-4179480.jpg'><h4>Cattedrale Santa Maria del Fiore</h4><a target='_blank' href='https://www.comune.fi.it/'>Click here for the Official Website</a>",
		LatLng: [{
			lat: 43.773142,
			lng: 11.255968
		}],
		type: 'landmark'
	},
	{
		placeName: "<img src='assets/images/150px/porsenna-150px-pexels-peter-de-vink.jpg'><h4>Labirinto di Porsenna</h4><a target='_blank' href='http://www.prolocochiusi.it/museo-della-cattedrale/'>Click here for the Official Website</a>",
		LatLng: [{
			lat: 43.015510,
			lng: 11.948979
		}],
		type: 'landmark'
	},
	{
		placeName: "<img src='assets/images/150px/pisa-150px-pexels-hitesh-choudhary.jpg'><h4>Pisa</h4><a target='_blank' href='https://www.comune.pisa.it/'>Click here for the Official Website</a>",
		LatLng: [{
			lat: 43.722955,
			lng: 10.396598
		}],
		type: 'landmark'
	},
	{
		placeName: "<img src='assets/images/150px/radicofani-150px-pexels-selim-çetin.jpg'><h4>Radicofani</h4><a target='_blank' href='https://www.comune.radicofani.siena.it/home.html'>Click here for the Official Website</a>",
		LatLng: [{
			lat: 42.898582,
			lng: 11.768798
		}],
		type: 'landmark'
	},

]