var api = "https://fcc-weather-api.glitch.me/api/current?";
var lat, lon;
var tempUnit = 'C';
var currentTempInCelsius;
var windSpeed;



$( document ).ready(function(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = "lat=" + position.coords.latitude;
      var lon = "lon=" + position.coords.longitude;
      getWeather(lat, lon);
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }

  $(".switch").click(function () {
    var currentTempUnit = $("#unit").text();
    var newTempUnit = currentTempUnit == "C" ? "F" : "C";
    $("#unit").text(newTempUnit);
    if (newTempUnit == "F") {
      var fahTemp = Math.round(parseInt($("#temp").text()) * 9 / 5 + 32);
      $("#temp").text(fahTemp + " " + String.fromCharCode(176));
    } else {
      $("#temp").text(currentTempInCelsius + " " + String.fromCharCode(176));
    }
  });
  
})

function getWeather(lat, lon) {


  var urlString = api + lat + "&" + lon;
  $.ajax({
    url: urlString, success: function (result) {
      $("#city").text(result.name + ", ");
      $("#country").text(result.sys.country);
      currentTempInCelsius = Math.round(result.main.temp * 10) / 10;
      $("#temp").text(currentTempInCelsius + " " + String.fromCharCode(176));
      $("#unit").text(tempUnit);
      $("#status").text(result.weather[0].description);
      $("#wind").text(Math.floor((result.wind.speed)*18/5 ));
      $("#humidity").text(result.main.humidity);
      $("#pressure").text(result.main.pressure);
     
     var image=result.weather[0].description;
     // $("#iconwell").html("<img src='"+image+"'>");
      console.log(image);
        
          var image=result.weather[0].description;
         if(image==="smoke"){
           $("#iconwell").html("<img class='images'src=' https://proxy-sauce.glitch.me/https://image.flaticon.com/icons/svg/577/577621.svg'>");
         } 
      else if(image==="haze"){
           $("#iconwell").html("<img class='images'src=' https://proxy-sauce.glitch.me/https://image.flaticon.com/icons/svg/577/577621.svg'>"); 
         } 
      else if(image==="cloudy"){
           $("#iconwell").html("<img class='images'src=' https://proxy-sauce.glitch.me/https://image.flaticon.com/icons/svg/577/577579.svg'>");
         }
      else if(image==="scattered clouds"){
           $("#iconwell").html("<img class='images'src=' https://proxy-sauce.glitch.me/https://image.flaticon.com/icons/svg/577/577579.svg'>");
         }
       else if(image==="broken clouds"){
           $("#iconwell").html("<img class='images'src=' https://proxy-sauce.glitch.me/https://image.flaticon.com/icons/svg/577/577579.svg'>");
         }
      else if(image==="clear sky"){
           $("#iconwell").html("<img class='images'src=' https://proxy-sauce.glitch.me/https://image.flaticon.com/icons/svg/577/577597.svg'>");
         }
      else if(image==="rain"){
           $("#iconwell").html("<img class='images'src=' https://proxy-sauce.glitch.me/https://image.flaticon.com/icons/svg/577/577589.svg'>");
         }
      else if(image==="mist"){
           $("#iconwell").html("<img class='images'src=' https://proxy-sauce.glitch.me/https://image.flaticon.com/icons/svg/577/577598.svg'>");
         }
      else if(image==="sunny"){
           $("#iconwell").html("<img class='images'src=' https://proxy-sauce.glitch.me/https://image.flaticon.com/icons/svg/577/577599.svg'>");
         }
      else if(image==="snow"){
           $("#iconwell").html("<img class='images'src=' https://proxy-sauce.glitch.me/https://image.flaticon.com/icons/svg/577/577585.svg'>");
         }
      else if(image==="fog"){
           $("#iconwell").html("<img class='images'src=' https://proxy-sauce.glitch.me/https://image.flaticon.com/icons/svg/577/577621.svg'>");
         }
    }
  });
}
