
$("#search").on("click", function(event) {
    event.preventDefault();
    var search = $("#city").val();
    console.log(search);
    weather(search);
  
})

function weather(search) {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + search + "&units=imperial" + "&APPID=4785a78b216636ca439247db2c4751b1";
    var forcastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + search + "&units=imperial" + "&APPID=4785a78b216636ca439247db2c4751b1";
    var uvURL = "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=37.75&lon=-122.37" + "&APPID=4785a78b216636ca439247db2c4751b1";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
      console.log(response);
      var city = $(".city");
      var temp = $(".temp");
      var humid = $(".humid");
      var wind = $(".wind");
      

      city.html("<h2>" + response.name + "</h2>");
      temp.text("Tempurature:" + response.main.temp + "°F");
      humid.text("Humidity:" + response.main.humidity + "%");
      wind.text("Wind Speed:" + response.wind.speed + "MPH");
    })

    $.ajax({
        url: uvURL,
        method: "GET"
    }).then(function(response) {
      console.log(response);
      var uv = $(".uv-index");

      uv.text("UV Index:" + response[0].value);

    })

    $.ajax({
        url: forcastURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        var cardOneDate = $(".date");
        var cardOneTemp = $(".temp-1");
        var cardOneHumid = $(".humidity-1");

        cardOneDate.text(response.list[0].dt_txt);
        cardOneTemp.text("Temp:" + response.list[0].main.temp + "°F");
        cardOneHumid.text("Humidity:" + response.list[0].main.humidity + "%");
    })

}
