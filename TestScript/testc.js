$(document).ready(function(){
  $(".button").click(function(event){
    LatLonCall();
    event.preventDefault();
  })

  $('form input:text').click(function(e){
    e.target.value=""
  })

});
function LatLonCall(){
  var address = $("input#address").val();
  //var address = "1801 Belmont St NW";
  var city = $("input#city").val();
  //var city = "Washington";
  var state = $("input#state").val();
 // var state = "DC";
  var DataString = 'address'+address+'city'+city+'state'+state;
  var FullAddress = address+", "+city+", "+state;
  FullAddress = FullAddress.replace(/ /g,"+");
  console.log("https://maps.googleapis.com/maps/api/geocode/json?" + "address="+FullAddress+"&key=AIzaSyAGt3oFrXSziqC7au4sGmMTadhBbqfjstY");

  var params = {"address":FullAddress,"key":"AIzaSyAGt3oFrXSziqC7au4sGmMTadhBbqfjstY"}
  $.ajax({url: "https://maps.googleapis.com/maps/api/geocode/json?" + "address="+FullAddress+"&key=AIzaSyAGt3oFrXSziqC7au4sGmMTadhBbqfjstY",type: "GET",})

  //$.ajax({url: "https://api.wmata.com/Bus.svc/json/jStopSchedule?StopID=3002578&api_key=f9a8294236b6475990ef9d0085bc3826",type: "POST",})

  .done(function(data){
    console.log("FINALLY");
    lat = data.results[0].geometry.location.lat;
    lon = data.results[0].geometry.location.lng;
    console.log(lat);
    console.log(lon);
    StationCall(lat,lon);
    WeatherCall(lat,lon);
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
  console.log("https://api.wmata.com/Bus.svc/json/jStops?Lat="+Latitude+"&Lon="+Longitude+"&Radius="+Radius+"&api_key="+api_key);
  $.ajax({url: "https://api.wmata.com/Bus.svc/json/jStops?"+$.param(params),type: "GET"})
  alert(api_key);
  alert(Latitude);
  alert(Longitude);
  console.log("https://api.wmata.com/Bus.svc/json/jStops?Lat="+Latitude+"&Lon="+Longitude+"&Radius="+Radius+"&api_key="+api_key);
  //$.ajax({url: "https://api.wmata.com/Bus.svc/json/jStops?Lat="+Latitude+"&Lon="+Longitude+"&Radius="+Radius+"&api_key="+api_key,type: "GET",})
  $.ajax({url: "https://api.wmata.com/Bus.svc/json/jStops?"+$.param(params),type: "GET"})
  //$.ajax({url: "https://api.wmata.com/Bus.svc/json/jStops?Lat=38.9200763&Lon=-77.0387962&Radius=300&api_key=f9a8294236b6475990ef9d0085bc3826",type: "GET"})
  .done(function(result){
    console.log("PAUL IS AWESOME!");
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
var StopID = response;
$.ajax({url: "https://api.wmata.com/NextBusService.svc/json/jPredictions?StopID="+StopID+"&api_key="+api_key,type: "GET",})
.done(function(data){
  console.log("https://api.wmata.com/NextBusService.svc/json/jPredictions?StopID="+StopID+"&api_key="+api_key)
  console.log(data);
  BusTable(data);
  $('#BusWidget').append(
    $.map(data.Predictions, function(ignore, index){
      return 'Route ID: '+data.Predictions[index].RouteID+', Direction: '+data.Predictions[index].DirectionText+', time till arrival: '+data.Predictions[index].Minutes+'<br>';
    }).join()
  );
})
.fail(function(data){
  alert("BusSchedule Failure!");
})
}
function WeatherCall(lat,lon){
  var Latitude = lat;
  var Longitude = lon;
  var api_key = "ba8b7446125d48c50976f35f68653f07";
  var params = {
    "appid": "ba8b7446125d48c50976f35f68653f07",
    "lat": Latitude, "lon": Longitude,"units":"imperial",};
  $.ajax({url: "http://api.openweathermap.org/data/2.5/weather?"+$.param(params),type: "GET"})
  .done(function(WeatherData){
    console.log("Weather works");
    console.log(WeatherData.main.temp);
    $('#WeatherWidget').html('<p>Current Temperature: <br>'+WeatherData.main.temp);
  })
  .fail(function(WeatherData){
    console.log("Weather failure");
  });
}
function BusTable(bus){
  var $table = $('<table/>');
  $table.html("<th>Route ID</th><th>Direction</th><th>Minutes till arrival</th>");
  //$('#BusWidget').html(
    $.map(bus.Predictions, function(ignore,index){
      $table.append(
      '<tr><td id="Route">'+bus.Predictions[index].RouteID+'</td>'+
      '<td>'+bus.Predictions[index].DirectionText+'</td>'+
      '<td id="time">'+bus.Predictions[index].Minutes+'</td></tr>'
      );
      $('#BusWidget').html($table);
    })
    AlertBus();
}
function AlertBus(){
  $("tr").each(function(){
    var col_val = $(this).find("td:eq(2)").text();
    if (col_val < 10){
      $(this).addClass('LastChance');
    }
    else if (col_val < 20){
      $(this).addClass('GetReady');
    }
    
  });
}