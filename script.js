$(document).ready(function () {
    var typed = new Typed('.typed', {
        strings: ['Hello! ', 'You can find the weather of any place.'],
        smartBackspace: true,
        loop:true,
        typeSpeed: 80
      });
    $("#searchInput").on("keyup", function (e) {
        var cityName = e.target.value;
        const APIKEY = "e029558325c147cc14072ba632ba6fc4";

        // making request to server to get weather data...
        $.ajax({
            url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}&units=metric`,


        }).done(function (weatherdata) {
            console.log(weatherdata)

            $("#profile").html(`
            <div class = "container">
            <div class="row">
                  <div class="card" style="width: 18rem;">
                        <img src="http://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png" class="card-img-top" alt="...">
                         <div class="card-body">
                             <h5 class="card-title">weather : ${weatherdata.weather[0].description}</h5>
                            <p class="card-text">The temperature at ${cityName} is : ${weatherdata.main.temp} &#8451; and it feels like it is ${weatherdata.main.feels_like} &#8451 , the humidity is ${weatherdata.main.humidity}.</p>
                             <a href="https://www.google.com/search?q=${cityName}" class="btn btn-primary">Learn more</a>
                         </div>
                  </div>
            
                     </div>

              </div>`);
        });
    })


})