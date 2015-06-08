


$(document).ready(function() {

	var map;
	function initialize() {
		var myLatlng = new google.maps.LatLng(46.200517, 6.145845);
		var mapOptions = {
			zoom: 13,
			center: myLatlng
		};

		map = new google.maps.Map(document.getElementById('gMap'), mapOptions);

		var infoString = "Reformation wall"+"\n Geneva, Switzerland";

		var infowindow = new google.maps.InfoWindow({
			content: infoString
		});

		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: 'Reformation Wall'
		});

		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map, marker);
		});
	}

	google.maps.event.addDomListener(window, 'load', initialize);

});