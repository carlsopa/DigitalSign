$(function(){
  $(".button").click(function(){
    LatLonCall();
  })

});
function LatLonCall(){
  var address = $("input#address").val();
  var city = $("input#city").val();
  var state = $("input#state").val();
  var DataString = 'address'+address+'city'+city+'state'+state;
  var FullAddress = address+", "+city+", "+state;
  FullAddress = FullAddress.replace(/ /g,"+");
  alert("https://maps.googleapis.com/maps/api/geocode/json?" + "address="+FullAddress+"&key=AIzaSyAGt3oFrXSziqC7au4sGmMTadhBbqfjstY");

  var params = {"address":FullAddress,"key":"AIzaSyAGt3oFrXSziqC7au4sGmMTadhBbqfjstY"}
  //$.ajax({url: "https://maps.googleapis.com/maps/api/geocode/json?" + "address="+FullAddress+"&key=AIzaSyAGt3oFrXSziqC7au4sGmMTadhBbqfjstY",type: "GET",})
  $.ajax({url: "https://api.wmata.com/Bus.svc/json/jStopSchedule?StopID=3002578&api_key=f9a8294236b6475990ef9d0085bc3826",type: "POST",})

  .done(function(data){
    console.log("FINALLY");
    //lat = data.results[0].geometry.location.lat;
    //lon = data.results[0].geometry.location.lng;
    //console.log(lat);
    //console.log(lon);
    //StationCall(lat,lon);
  })
  .fail(function(data){
    console.log(data);
    alert("LatLonCall Failure!")
  });
}
function StationCall(lat,lon){
  var Latitude = lat;
  var Longitude = lon;
  var Radius = 300;
  var api_key = "f9a8294236b6475990ef9d0085bc3826";
  var params = {
            "api_key": "f9a8294236b6475990ef9d0085bc3826",
            "Lat": Latitude,"Lon": Longitude,"Radius": "300",};
  //alert(api_key);
  //alert(Latitude);
  //alert(Longitude);
  console.log("https://api.wmata.com/Bus.svc/json/jStops?Lat="+Latitude+"&Lon="+Longitude+"&Radius="+Radius+"&api_key="+api_key);
  //$.ajax({url: "https://api.wmata.com/Bus.svc/json/jStops?Lat="+Latitude+"&Lon="+Longitude+"&Radius="+Radius+"&api_key="+api_key,type: "GET",})
  //$.ajax({url: "https://api.wmata.com/Bus.svc/json/jStops?Lat="+$.param(params),type: "GET",})
  $.ajax({url: "https://api.wmata.com/Bus.svc/json/jStops?Lat=38.9200763&Lon=-77.0387962&Radius=300&api_key=f9a8294236b6475990ef9d0085bc3826",type: "GET"})
  .done(function(result){
    console.log("PAUL IS AWESOME!");
    alert("FINALLY WORKING!!");
    var id= result.Stops[0].StopID;
    BusSchedule(id);
  })
  
  .fail(function(result,response,text){
    console.log("Failure of StatioNCall");
    console.log(result);
    console.log(response);
    console.log(text);
    console.log("StationCall Failure!");
  });
}
function BusSchedule(response){
var api_key = "f9a8294236b6475990ef9d0085bc3826";
var StopID = response.Stops[0].StopID;
$.ajax({url: "https://api.wmata.com/NextBusService.svc/json/jPredictions?StopID="+StopID+"&api_key="+api_key,type: "GET",})
.done(function(data){

})
.fail(function(data){
  alert("BusSchedule Failure!");
})
}