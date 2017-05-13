var display=new google.maps.LatLng(55.674112, 37.752970);

function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(55.6720605, 37.758100),
    zoom: 14,
    disableDefaultUI:false,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };


  // var map = new google.maps.Map(document.getElementById("map"), mapProp);
  // var marker = new google.maps.Marker({
  //     position: display,
  //     // icon: '../images/marker.png'
  // });

  marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);


function initialize() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap',
        styles: [{
            "featureType":"administrative",
            "elementType":"labels.text.fill",
            "stylers":[{"color":"#4a4a4a"},
            {
                "visibility":"off"}
                ]},
                {"featureType":"administrative",
                "elementType":"labels.text.stroke",
                "stylers":[{"visibility":"off"}]},
                {"featureType":"landscape",
                "elementType":"all",
                "stylers":[{
                    "color":"#317295"
                }
                ]},
                {"featureType":"landscape",
                "elementType":"labels.text.fill",
                "stylers":[{
                    "visibility":"off"
                }
                ]},
                {
                    "featureType":"landscape",
                    "elementType":"labels.text.stroke",
                    "stylers":[{
                        "visibility":"off"
                    }]},
                    {"featureType":"poi",
                    "elementType":"all",
                    "stylers":[{
                        "visibility":"on"
                    },
                    {"color":"#4f89a5"}]},
                    {"featureType":"poi",
                    "elementType":"labels.text.fill",
                    "stylers":[{"visibility":"off"}]},
                    {"featureType":"poi",
                    "elementType":"labels.text.stroke",
                    "stylers":[{"visibility":"off"},
                    {"color":"#bad9ff"}]},
                    {"featureType":"road","elementType":"all",
                    "stylers":[{"saturation":-100},
                    {"lightness":45},
                    {"color":"#86cfff"}]},
                    {"featureType":"road",
                    "elementType":"geometry.fill",
                    "stylers":[{"visibility":"on"}]},
                    {"featureType":"road",
                    "elementType":"geometry.stroke",
                    "stylers":[{"visibility":"off"}]},
                    {"featureType":"road",
                    "elementType":"labels.text",
                    "stylers":[{"visibility":"off"},
                    {"hue":"#ff0000"}]},{"featureType":"road",
                    "elementType":"labels.text.fill",
                    "stylers":[{"visibility":"on"},
                    {"color":"#a9ccdb"}]},
                    {"featureType":"road",
                    "elementType":"labels.text.stroke",
                    "stylers":[{"visibility":"on"},
                    // {"color":"#124467"},{"weight":"3.26"}]},
                    {"color":"#000000"},{"weight":"2.26"}]},
                    {"featureType":"road",
                    "elementType":"labels.icon",
                    "stylers":[{"visibility":"off"}]},
                    {"featureType":"road.highway",
                    "elementType":"all",
                    "stylers":[{"visibility":"simplified"}]},
                    {"featureType":"road.arterial",
                    "elementType":"labels.icon",
                    "stylers":[{"visibility":"off"}]},
                    {"featureType":"transit",
                    "elementType":"all",
                    "stylers":[{"visibility":"off"}]},
                    {"featureType":"transit",
                    "elementType":"geometry",
                    "stylers":[{"visibility":"on"}]},
                    {"featureType":"water",
                    "elementType":"all",
                    "stylers":[{"color":"#1f5070"},
                    {"visibility":"on"}]}]
                };

    // Display a map on the page
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    map.setTilt(45);

    // Multiple Markers
    var markers = [
        ['', 55.674112, 37.752970],
        ['', 55.6720605, 37.758100],
        ['', 55.672254, 37.768486],
    ];

    // Info Window Content
    var infoWindowContent = [
        ['<div class="info_content">' +
        '<h3>Армавирская ул., 6, Москва, Россия, 109382</h3>' +  '</div>'],
        ['<div class="info_content">' +
        '<h3>Армавирская ул., 6, Москва, Россия, 109382</h3>' +  '</div>'],
        ['<div class="info_content">' +
        '<h3>Армавирская ул., 6, Москва, Россия, 109382</h3>' +  '</div>'],

    ];

    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;

    // Loop through our array of markers & place each one on the map
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        var image = "../images/marker.png";
        marker = new google.maps.Marker({
            position: position,
            map: map,
            icon: image,
            title: markers[i][0]
        });

        // Allow each marker to have an info window
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
    }

    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(14);
        google.maps.event.removeListener(boundsListener);
    });

}
