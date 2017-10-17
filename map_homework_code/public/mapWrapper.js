var MapWrapper = function(container, coords, zoom) {
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  })
  this.markers = []
  this.bounceMarkers = this.bounceMarkers.bind(this)
}

MapWrapper.prototype.addMarker = function (coords) {
  var marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap
  })
  // console.log(coords)
  // console.log(this)
  var infoWindow = this.createInfoWindow(coords)
    marker.addListener('click', function() {

    infoWindow.open(this.googleMap, marker);
  })
  this.markers.push(marker);
};

MapWrapper.prototype.addClickEvent = function () {
  var context = this
  google.maps.event.addListener(this.googleMap, 'click', function (event) {
    var position = {lat: event.latLng.lat(), lng: event.latLng.lng()}
    context.addMarker(position)
  }.bind(this))
}

MapWrapper.prototype.bounceMarkers = function () {
  this.markers.forEach(function(marker){
    marker.setAnimation(google.maps.Animation.BOUNCE)
  })
}

MapWrapper.prototype.createInfoWindow = function (coords) {
  console.log(coords)
  var infoWindow = new google.maps.InfoWindow({
    content: "Latitude: " + coords.lat + " Longitude: " + coords.lng
    })
  return infoWindow
}

MapWrapper.prototype.goToChicago = function () {
  var position = {lat: 41.878114, lng: -87.629798}
  this.googleMap.setCenter(position)
}

MapWrapper.prototype.whereAmI = function () {

  navigator.geolocation.getCurrentPosition(function(position){
    // console.log(position)
    // console.log("Latitude: " + position.coords.latitude)
    var gotPosition = {lat: position.coords.latitude, lng: position.coords.longitude}
    this.googleMap.setCenter(gotPosition)
    this.addMarker(gotPosition)
  }.bind(this))
}
