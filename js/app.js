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
    setBackground();
    var weatherImage = 'http://openweathermap.org/img/w/' + weatherObj.weather[0].icon + '.png';
    $('#weatherImg').attr("src", weatherImage);

    updateHtmlMetric();
  }, "jsonp");
}

function updateHtmlMetric() {
  // Set description field
  $('#description').html(weatherObj.weather[0].description);
  // set the temp
  $('#temp').html(Math.round(weatherObj.main.temp * 10) / 10 + ' &#8451;');
  // set wind
  $('#wind').html(weatherObj.wind.speed + ' m/s');
  // Set wind direction image
  setWindArrow();
  //console.log(weatherObj.wind.deg);
}

function setWindArrow() {
  var deg = weatherObj.wind.deg;
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

function setBackground() {
  var temp = weatherObj.main.temp;
  var curWeather = weatherObj.weather[0].icon;
  console.log(curWeather);
  var bgImg;
  if (curWeather === "01d" || curWeather === "01n") {
    bgImg = 'http://s2.postimg.org/m7pnkmdzd/sunny_warm.jpg';
  }else if (curWeather === "02n" || curWeather ===  "02d") {
    bgImg = 'http://s30.postimg.org/evflcmh9t/few_clouds_sky1280x720.jpg';
  }else if (curWeather === "03n" || curWeather ===  "03d"){
    bgImg = 'http://s22.postimg.org/jo3dfe49t/scattered_clouds.jpg';
  }else if (curWeather === "04n" || curWeather ===  "04d"){
    bgImg = 'http://s24.postimg.org/4zenbs04l/broken_clouds.jpg';
  }else if (curWeather === "09n" || curWeather ===  "09d"){
    bgImg = 'http://s21.postimg.org/niejvvnjr/montana_shower1.jpg';
  }else if (curWeather === "10n" || curWeather ===  "10d"){
    bgImg = 'http://s3.postimg.org/oukza11xv/rain.jpg';
  }else if (curWeather === "11n" || curWeather ===  "11d"){
    bgImg = 'http://s18.postimg.org/nmg07586x/Fantastic_Thunderstorm.jpg';
  }else if (curWeather === "13n" || curWeather ===  "13d"){
    bgImg = 'http://s8.postimg.org/ecyumf82d/snow.jpg';
  }else if (curWeather === "50n" || curWeather ===  "50d"){
    bgImg = 'http://s28.postimg.org/o8ttt328d/Mist.jpg';
  }else{
    bgImg = 'http://s29.postimg.org/qf2vdd5nr/Snow_storm.jpg';
  }

  $('.container-float').css('background-image', 'url(' + bgImg + ')');
  // http://s2.postimg.org/m7pnkmdzd/sunny_warm.jpg

}

$(document).ready(function(){
  // Get location data from ip-adress information.
 getLocation();
});
