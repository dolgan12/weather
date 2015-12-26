var appID = '6cd3ac112dce0606bce5cbdf400330a0';
var weatherObj = {};

function getLocation() {
  $.getJSON('http://ipinfo.io', function(location){
  $('#location').html(location.city + ', ' + location.country);
  getWeather(location.city, location.country);
    }, "jsonp");
}

function getWeather(city, country){
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + country + '&APPID=' + appID + '&units=metric';
  $.getJSON(url, function(openWeather) {
    weatherObj = openWeather;
    // set the weather image
    var weatherImage = 'http://openweathermap.org/img/w/' + weatherObj.weather[0].icon + '.png';
    $('#weatherImg').attr("src", weatherImage);

    updateHtmlMetric();
  }, "jsonp");
}

function updateHtmlMetric() {
  // Set description field
  $('#description').html(weatherObj.weather[0].description);
  // set the temp
  $('#temp').html(Math.round(weatherObj.main.temp) + ' &#8451;');
  // set wind
  $('#wind').html(weatherObj.wind.speed + ' m/s');
  // Set wind direction image
  setWindArrow();
  //console.log(weatherObj.wind.deg);
}

function setWindArrow() {
  var deg = weatherObj.wind.deg;
  console.log(deg);
  var windImage = "./images/west.png";
  if (deg <= 112.5 && deg >= 67.5){
    // west
    windImage = "./images/west.png";
  }else if(deg < 67.5 && deg > 22.5){
    //SouthWest
    windImage = "./images/southwest.png";
  }else if ((deg <= 22.5 && deg >= 0) || (deg <= 360 && deg >= 337.5)) {
    // south
    windImage = "./images/south.png";
  }else if (deg < 337.5 && deg > 292.5) {
    // southeast
    windImage = "./images/southeast.png";
  }else if (deg <= 292.5 && deg >= 247.5) {
    // east
    windImage = "./images/east.png";
  }else if (deg < 247.5 && deg > 202.5) {
    //Northeast
    windImage = "./images/northeast.png";
  }else if (deg <= 202.5 && deg >= 157.5) {
    // north
    windImage = "./images/north.png";
  }else if (deg < 157.5 && deg > 112.5) {
    // northwest
    windImage = "./images/northwest.png";
  }
    $('#windDir').attr("src", windImage);
}

$(document).ready(function(){
  // Get location data from ip-adress information.
 getLocation();
});
