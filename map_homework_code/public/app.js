var initialize = function () {
  var mapDiv= document.getElementById('main-map')
  var center = {lat: 55.9441, lng: -3.1618}
  var mainMap = new MapWrapper(mapDiv, center, 10)
  mainMap.addMarker(center)
  mainMap.addClickEvent()
  // mainMap.addMarker()
  var bounceButton = document.querySelector("#button-bounce-markers")
  bounceButton.addEventListener('click', mainMap.bounceMarkers)

  var chicagoButton = document.querySelector("#button-chicago")
  chicagoButton.addEventListener('click', mainMap.goToChicago.bind(mainMap))

  var whereAmIButton = document.querySelector("#button-where-am-i")
  whereAmIButton.addEventListener('click', mainMap.whereAmI.bind(mainMap))
}

window.addEventListener('load', initialize)
