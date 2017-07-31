window.onload = function main(){
  initMap();
}



var map;
var infowindow;

function initMap() {
    var pyrmont = { lat: 37.3838772, lng: -122.0132521 };
console.log("HEY");
    map = new google.maps.Map(document.getElementById('map'), {
        center: pyrmont,
        zoom: 16
    });
    createMarker();
}

function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
        }
    }
}

function createMarker() {
    
    var marker = new google.maps.Marker({
        map: map,
        position: { lat: 37.3838772, lng: -122.0132521 }
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
    });
}