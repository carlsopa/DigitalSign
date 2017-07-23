$(function(){
  $(".button").click(function(){
    var address = $("input#address").val();
    var city = $("input#city").val();
    var state = $("input#state").val();
    var DataString = 'address'+address+'city'+city+'state'+state;
    var FullAddress = address+", "+city+", "+state;
    var lat = "";
    var lon = "";
    FullAddress = FullAddress.replace(/ /g,"+");
    var params = {"address":FullAddress,"key":"AIzaSyAGt3oFrXSziqC7au4sGmMTadhBbqfjstY"}
    $.ajax({url: "https://maps.googleapis.com/maps/api/geocode/json?" + "address="+FullAddress+"&key=AIzaSyAGt3oFrXSziqC7au4sGmMTadhBbqfjstY",type: "GET",})
    .done(function(data) {
      document.getElementById("Googlie").innerHTML = data.results[0].formatted_address;
      lat = data.results[0].geometry.location.lat;
      lon = data.results[0].geometry.location.lng;
      document.getElementById("lat").innerHTML = lat;
      document.getElementById("lon").innerHTML = lon;
      LatLonAlert(lat, lon);
    })
    .fail(function(data) {
      alert("you failed");
      console.log("address="+FullAddress+"&key=AIzaSyAGt3oFrXSziqC7au4sGmMTadhBbqfjstY");
    });
    document.getElementById("data").innerHTML = "Good morning, Paul!";
    return false;
  });
});
function LatLonAlert(lt, lg){
  alert("inside function");
  $(function() {
        var params = {
            "api_key": "f9a8294236b6475990ef9d0085bc3826",
            // Request parameters
            "Lat": lt,
            "Lon": lg,
            "Radius": "400",
        };
      
        $.ajax({
            url: "https://api.wmata.com/Bus.svc/json/jStops?" + $.param(params),
            type: "GET",
        })
        .done(function(data) {
            alert("function success");
            var tr;
            tbl = document.createElement('table');
            alert(data.Stops.length);
            $.each(data.Stops[0].Routes, function(i, item){
              //alert(item);
              var tr = tbl.insertRow();
              var td = tr.insertCell();
              td.appendChild(document.createTextNode(item));
            })
            document.body.appendChild(tbl);
        })
        .fail(function() {
            alert("function error");
        });
    });
}
function StationName(){

}