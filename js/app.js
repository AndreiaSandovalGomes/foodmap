$(document).ready(function() {
  $('.mainScreen').delay('3000').fadeIn('slow')
});
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: {lat: -23.561751, lng: -46.658998}
  });
  var lat;
  var lng;
  var image;
  var type;
  var description;
  var name;
  for(var i = 0; i < restaurantes.length; i++){
    lat = restaurantes[i]['latitude'];
    lng = restaurantes[i]['longitude'];
    name = restaurantes[i]['name'];
    type = restaurantes[i]['type'];
    description = restaurantes[i]['description'];
    var contentString = type;
    var infowindow = new google.maps.InfoWindow({
    content: contentString
    });
    var marker = new google.maps.Marker({
    map: map,
    draggable: false,
    animation: google.maps.Animation.DROP,
    position: {lat, lng},
    label: name
    });
    marker.addListener('click', function() {
          infowindow.open(map, marker);
    })
  }
}
$('.filter').click (function (){
  $("input").focus(function(){
        $("span").css("display", "inline").fadeOut(2000);
  });
  alert("Por favor, clique na imagem para ver o menu e escolher seu prato.")
  var rest = document.getElementById('showRest');
  showRest.innerHTML = "";
  for (i = 0; i < restaurantes.length; i++){
    if(menu.value == restaurantes[i]['type']) {
      var img = document.createElement("img");
      img.src = restaurantes[i]['image'];
      showRest.appendChild(img);
    }
    $(img).click (function(e){
    $('#myModal').modal();
        var foto = e.target;
        for (i = 0; i < restaurantes.length; i++){
          if($(foto).attr('src') === restaurantes[i]['image']){
            var option = restaurantes[i]['name'];
            var titleModal = document.getElementsByClassName('title-modal')[0];
            var title = document.createElement('h3');
            title.innerHTML = "";
            title.value = option;
            title.innerHTML = option;
            titleModal.appendChild(title);
            break;
          }
        }
          for (i = 0; i < restaurantes.length; i++){
            if($(img).attr('src') === restaurantes[i]['image']){
              var description = restaurantes[i]['description'];
              var modalBody = document.getElementsByClassName('modal-body')[0];
              var info = document.createElement('h5');
              info.innerHTML = "";
              var description = restaurantes[i]['description'];
              info.value = description;
              info.innerHTML = description;
              modalBody.appendChild(info);
              break;
            }
          }
          $('#btnClose').click(function(){
            $("h3").remove(),
            $("h5").remove()
          })
          $('#order').click(function(){
            $("h3").remove(),
            $("h5").remove()
          })
        })
      }
    })
