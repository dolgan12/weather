$(document).ready(function(){
  var appID = '6cd3ac112dce0606bce5cbdf400330a0';

  // Get location data from ip-adress information.
  $.getJSON('http://ipinfo.io', function(location){
  console.log(location.city);



    }, "jsonp");

});
