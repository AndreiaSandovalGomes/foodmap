$(document).ready(function() {
  $('.mainScreen').delay('5000').fadeIn('slow')
});
var marker;

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {lat: -25.344, lng: 131.036}
  });

  marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: -25.344, lng: 131.036}
  });
  marker.addListener('click', toggleBounce);
}
function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

// function drop() {
//   clearMarkers();
//   for (var i = 0; i < neighborhoods.length; i++) {
//           addMarkerWithTimeout(neighborhoods[i], i * 200);
//         }
//       }
//
//       function addMarkerWithTimeout(position, timeout) {
//         window.setTimeout(function() {
//           markers.push(new google.maps.Marker({
//             position: position,
//             map: map,
//             animation: google.maps.Animation.DROP
//           }));
//         }, timeout);
//       }
//
//       function clearMarkers() {
//         for (var i = 0; i < markers.length; i++) {
//           markers[i].setMap(null);
//         }
//         markers = [];
//       }
