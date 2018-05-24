var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('tours_map'), {
    center: {lat: 41.2999988, lng: 69.2666656},
    zoom: 12
  });
}