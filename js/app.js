$(document).ready(function() {
  $('.mainScreen').delay('3000').fadeIn('slow')
});

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {lat: -23.561751, lng: -46.658998}
  });

  // Marcadores no mapa
  var lat;
  var lng;
  var image;
  var type;
  var description;
  var name;

  for(var i = 0; i < restaurantes.length; i++){
    lat = restaurantes[i]['latitude'];
    lng = restaurantes[i]['longitude'];
    image = restaurantes[i]['image'];
    description = restaurantes[i]['description'];
    type = restaurantes[i]['type'];
    name = restaurantes[i]['name'];

      var marker = new google.maps.Marker({
      map: map,
      draggable: false,
      animation: google.maps.Animation.DROP,
      position: {lat, lng}
      });
  }
  foodSelector();
}

function foodSelector(){
  var Menu = document.getElementById("menu");
  menu.innerHTML = "";
  var types = document.createElement("option");
  types.value = "none";
  types.innerHTML = "Escolha o restaurante";
  menu.appendChild(types);
  for (i = 0; i < restaurantes.length; i++){
    name = restaurantes[i]['name'];
    var foodOption = document.createElement("option");
    foodOption.value = name;
    foodOption.innerHTML = name;
    Menu.appendChild(foodOption);
  }
}
menu.addEventListener("change", imagesRest);
function imagesRest(){
  var rest = document.getElementById("rest");
  rest.innerHTML = "";
  for (i = 0; i < restaurantes.length; i++){
    // console.log(restaurantes[i]);
    if(menu.value == restaurantes[i]["name"]) {
      console.log("lll");
      image = restaurantes[i]['image'];
      var img = document.createElement("img");
      img.src = restaurantes[i]['image'];
      rest.appendChild(img);
      // img.setAttribute(class, valor)
      // img.setAttribute(data-toggle, valor)
      // img.setAttribute(data-target, valor)
      // conteudo do modal
    }
  }
}




// $('.filter').click(function () {
 //   var inputValue = $('textImput').val();
 //   $.each(names, function(index, val) {
 //     if(value !== inputValue) {
 //       $(this).fadeOut('slow');
 //     }
 //   });
 // })
  // marker.addListener('click', toggleBounce);

// function toggleBounce() {
//   if (marker.getAnimation() !== null) {
//     marker.setAnimation(null);
//   } else {
//     marker.setAnimation(google.maps.Animation.BOUNCE);
//   }
// }

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
