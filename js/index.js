 if (navigator.geolocation) {
   navigator.geolocation.getCurrentPosition(function(position) {
     $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
 //console.log('https://api.wunderground.com/api/aa718ba5596db9f8/conditions/q/' + position.coords.latitude + ',' + position.coords.longitude + '.json');
     $.ajax({
         url: 'https://api.wunderground.com/api/aa718ba5596db9f8/conditions/q/' + position.coords.latitude + ',' + position.coords.longitude + '.json',
         type: 'GET',
         data: {},
         dataType: 'json',
         success: function(data) {
           document.getElementById("city").innerHTML = data.current_observation.display_location.full;
           var cel = data.current_observation.temp_c;
           var far = data.current_observation.temp_f;
           $(".farenheit").append(far + 'ºF <br>');
           $(".celsius").append(cel + 'ºC <br>');
           $("button").click(function(){
             $(".celsius , .farenheit").toggleClass("hidden");
             var current = document.getElementsByTagName("button")[0].innerHTML;
             current == "Display temperature in Farenheit" ? 
                document.getElementsByTagName("button")[0].innerHTML = "Display temperature in Celsius" : 
                document.getElementsByTagName("button")[0].innerHTML = "Display temperature in Farenheit";
           });
           document.getElementById("main").innerHTML = data.current_observation.weather;
           var conditions = data.current_observation.weather;
    
      switch(conditions){
        case "Overcast":
        case "Mostly Cloudy": 
          $('body').css("background", "url(https://unsplash.it/1920/800?image=1064) no-repeat");
          break;
        case "Scattered Clouds":
        case "Partly Cloudy": 
          $('body').css("background", "url(https://unsplash.it/1920/800?image=1056) no-repeat");
          break;
        case "Partial Fog":
        case "Shallow Fog":
        case "Patches of Fog": 
        case "Light Fog":
        case "Heavy Fog":
        case "Fog":
        case "Fog Patches":
        case "Light Fog Patches":
        case "Heavy Fog Patches":
              $('body').css("background", "url(https://unsplash.it/1920/800?image=1021) no-repeat");
              break;
        case "Clear":
              $('body').css("background", "url(https://unsplash.it/1920/800?image=979) no-repeat");
              break;
        case "Light Mist":
        case "Heavy Mist":
        case "Mist":
              $('body').css("background", "url(https://unsplash.it/1920/800?image=933) no-repeat");
              break;
        case "Light Snow":
        case "Heavy Snow":
        case "Snow":
        case "Light Snow Grains":
        case "Heavy Snow Grains":
        case "Snow Grains":
        case "Light Snow Showers":
        case "Heavy Snow Showers":
        case "Snow Showers":
        case "Light Snow Blowing Snow Mist":
        case "Heavy Snow Blowing Snow Mist":
        case "Snow Blowing Snow Mist":
        case "Light Blowing Snow":
        case "Heavy Blowing Snow":
        case "Blowing Snow":
        case "Light Low Drifting Snow":
        case "Heavy Low Drifting Snow":
        case "Low Drifting Snow":
              $('body').css("background", "url(https://unsplash.it/1920/800?image=726) no-repeat");
              break;
        case "Light Rain":
        case "Heavy Rain":
        case "Rain":
        case "Light Rain Mist":
        case "Heavy Rain Mist":
        case "Rain Mist":
        case "Light Rain Showers":
        case "Heavy Rain Showers":
        case "Rain Showers":
        case "Light Small Hail Showers":
        case "Heavy Small Hail Showers":
        case "Small Hail Showers":
        case "Light Hail Showers":
        case "Heavy Hail Showers":
        case "Hail Showers":
        case "Light Freezing Drizzle":
        case "Heavy Freezing Drizzle":
        case "Freezing Drizzle":
        case "Light Freezing Rain":
        case "Heavy Freezing Rain":
        case "Freezing Rain":
        case "Small Hail":
        case "Light Drizzle":
        case "Heavy Drizzle":
        case "Drizzle":
        case "Light Hail":
        case "Heavy Hail":
        case "Hail":
          $('body').css("background", "url(https://unsplash.it/1920/800?image=232) no-repeat");
          break;
        case "Light Sandstorm":
        case "Heavy Sandstorm":
        case "Sandstorm":
        case "Light Blowing Sand":
        case "Heavy Blowing Sand":
        case "Blowing Sand":
        case "Light Sand":
        case "Heavy Sand":
        case "Sand":
        case "Light Low Drifting Sand":
        case "Heavy Low Drifting Sand":
        case "Low Drifting Sand":
          $('body').css("background", "url(https://unsplash.it/1920/800?image=196) no-repeat");
          break;
           }
         }
     });
   })
 };