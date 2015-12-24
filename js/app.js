var appID = '6cd3ac112dce0606bce5cbdf400330a0';


function getLocation() {
  $.getJSON('http://ipinfo.io', function(location){
  $('#location').html(location.city + ', ' + location.country);
  getWeather(location.city, location.country);
    }, "jsonp");
}

function getWeather(city, country){
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + country + '&APPID=' + appID;
  $.getJSON(url, function(openWeather) {
    var weather = openWeather.weather[0];
    $('#description').html(weather.description);
  }, "jsonp");
}



$(document).ready(function(){
  // Get location data from ip-adress information.
 getLocation();
});
