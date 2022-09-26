function determineCityAndUnit(el) {
  var city = el.val();
  var inactiveUnit = $('button.hidden')[0].id;
  var activeUnit;
  if (inactiveUnit == 'metric') {
    activeUnit = 'imperial'
  } else {
    activeUnit = 'metric'
  }
  if (city) { getWeather(city, activeUnit) }
  else { getWeather('Berlin', activeUnit) }
}

function getWeather(city, unit) {
     $.ajax({
         url: 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&units='+unit+'&appid=7fc837143b359611d96b81379e7cb0f6',
         type: 'GET',
         data: {},
         dataType: 'json',
         success: function(data) {
           console.log('success');
         document.getElementById("city").innerHTML = city;
           $("#temperature").empty().append(data.main.temp);
           document.getElementById("main").innerHTML = data.weather[0].main;
           var conditions = data.weather[0].description.toLowerCase();

      switch(conditions){
        case "overcast":
        case "mostly cloudy":
        case "overcast clouds":
          $('body').css("background", "url(https://unsplash.it/1920/800?image=1064) no-repeat");
          break;
        case "scattered clouds":
        case "partly cloudy": 
        case "broken clouds":
        case "few clouds":
          $('body').css("background", "url(https://unsplash.it/1920/800?image=1056) no-repeat");
          break;
        case "partial fog":
        case "shallow fog":
        case "patches of fog": 
        case "light fog":
        case "heavy fog":
        case "haze":
        case "fog":
        case "fog patches":
        case "light fog patches":
        case "heavy fog patches":
              $('body').css("background", "url(https://unsplash.it/1920/800?image=1021) no-repeat");
              break;
        case "clear":
        case "clear sky":
              $('body').css("background", "url(https://unsplash.it/1920/800?image=979) no-repeat");
              break;
        case "light mist":
        case "heavy mist":
        case "mist":
              $('body').css("background", "url(https://unsplash.it/1920/800?image=933) no-repeat");
              break;
        case "light snow":
        case "heavy snow":
        case "snow":
        case "light snow grains":
        case "heavy snow grains":
        case "snow grains":
        case "light snow showers":
        case "heavy snow showers":
        case "snow showers":
        case "light snow blowing snow mist":
        case "heavy snow blowing snow mist":
        case "snow blowing snow mist":
        case "light blowing snow":
        case "heavy blowing snow":
        case "blowing snow":
        case "light low drifting snow":
        case "heavy low drifting snow":
        case "low drifting snow":
              $('body').css("background", "url(https://unsplash.it/1920/800?image=726) no-repeat");
              break;
        case "light rain":
        case "heavy rain":
        case "moderate rain":
        case "rain":
        case "light rain mist":
        case "heavy rain mist":
        case "rain mist":
        case "light rain showers":
        case "heavy rain showers":
        case "rain showers":
        case "light small hail showers":
        case "heavy small hail showers":
        case "small hail showers":
        case "light hail showers":
        case "heavy hail showers":
        case "light intensity shower rain":
        case "hail showers":
        case "light freezing drizzle":
        case "light intensity drizzle":
        case "Heavy freezing drizzle":
        case "freezing drizzle":
        case "light freezing rain":
        case "heavy freezing rain":
        case "freezing rain":
        case "small hail":
        case "light drizzle":
        case "heavy drizzle":
        case "drizzle":
        case "light hail":
        case "heavy hail":
        case "hail":
          $('body').css("background", "url(https://unsplash.it/1920/800?image=232) no-repeat");
          break;
        case "light sandstorm":
        case "heavy sandstorm":
        case "sandstorm":
        case "light blowing sand":
        case "heavy blowing sand":
        case "blowing sand":
        case "light sand":
        case "heavy sand":
        case "sand":
        case "light low drifting sand":
        case "heavy low drifting sand":
        case "low drifting sand":
          $('body').css("background", "url(https://unsplash.it/1920/800?image=196) no-repeat");
          break;
        case "dust":
          $('body').css("background", "url(https://unsplash.it/1920/800?image=137) no-repeat");
          break;
          }
         }
     });
   }

getWeather('Berlin', 'metric');

$(document).ready(function() {
 $('#city-input').on('change', function() {
    determineCityAndUnit($(this));
 })

  $("button").on("click", function(){
    $("button").toggleClass("hidden");
    determineCityAndUnit($('#city-input'));
  });
});