$("#search").on("click", function(event) {
  event.preventDefault();
  var search = $("#city").val();
  console.log(search);
  weather(search);
  pastSearches.push(search);
  //renderButtons();
});

function weather(search) {
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    search +
    "&units=imperial" +
    "&APPID=4785a78b216636ca439247db2c4751b1";
  var forcastURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    search +
    "&units=imperial" +
    "&APPID=4785a78b216636ca439247db2c4751b1";
  var uvURL =
    "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=37.75&lon=-122.37" +
    "&APPID=4785a78b216636ca439247db2c4751b1";
  //var iconURL = "http://openweathermap.org/img/w/" + iconcode + ".png";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    var city = $(".city");
    var temp = $(".temp");
    var humid = $(".humid");
    var wind = $(".wind");

    city.html("<h3>" + response.name + moment().format("L") + "</h3>");
    temp.text("Tempurature:" + response.main.temp + "°F");
    humid.text("Humidity:" + response.main.humidity + "%");
    wind.text("Wind Speed:" + response.wind.speed + "MPH");
  });

  $.ajax({
    url: uvURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    var uv = $(".uv-index");

    uv.text("UV Index:" + response[0].value);
  });

  $.ajax({
    url: forcastURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    var cardOneDate = $(".date-1");
    var cardOneIcon = $(".icon-1");
    var cardOneTemp = $(".temp-1");
    var cardOneHumid = $(".humidity-1");

    cardOneDate.text(
      moment()
        .add(1, "days")
        .format("L")
    );
    cardOneTemp.text("Temp:" + response.list[0].main.temp + "°F");
    cardOneHumid.text("Humidity:" + response.list[0].main.humidity + "%");
  });

  $.ajax({
    url: forcastURL,
    method: "GET"
  }).then(function(response) {
    var cardTwoDate = $(".date-2");
    var cardTwoIcon = $(".icon-2");
    var cardTwoTemp = $(".temp-2");
    var cardTwoHumid = $(".humidity-2");

    cardTwoDate.text(
      moment()
        .add(2, "days")
        .format("L")
    );
    cardTwoTemp.text("Temp:" + response.list[2].main.temp + "°F");
    cardTwoHumid.text("Humidity:" + response.list[2].main.humidity + "%");
  });

  $.ajax({
    url: forcastURL,
    method: "GET"
  }).then(function(response) {
    var cardThreeDate = $(".date-3");
    var cardThreeIcon = $(".icon-3");
    var cardThreeTemp = $(".temp-3");
    var cardThreeHumid = $(".humidity-3");

    cardThreeDate.text(
      moment()
        .add(3, "days")
        .format("L")
    );
    cardThreeTemp.text("Temp:" + response.list[10].main.temp + "°F");
    cardThreeHumid.text("Humidity:" + response.list[10].main.humidity + "%");
  });

  $.ajax({
    url: forcastURL,
    method: "GET"
  }).then(function(response) {
    var cardFourDate = $(".date-4");
    var cardFourIcon = $(".icon-4");
    var cardFourTemp = $(".temp-4");
    var cardFourHumid = $(".humidity-4");

    cardFourDate.text(
      moment()
        .add(4, "days")
        .format("L")
    );
    cardFourTemp.text("Temp:" + response.list[18].main.temp + "°F");
    cardFourHumid.text("Humidity:" + response.list[18].main.humidity + "%");
  });

  $.ajax({
    url: forcastURL,
    method: "GET"
  }).then(function(response) {
    var cardFiveDate = $(".date-5");
    var cardFiveIcon = $(".icon-5");
    var cardFiveTemp = $(".temp-5");
    var cardFiveHumid = $(".humidity-5");

    cardFiveDate.text(
      moment()
        .add(5, "days")
        .format("L")
    );
    cardFiveTemp.text("Temp:" + response.list[26].main.temp + "°F");
    cardFiveHumid.text("Humidity:" + response.list[26].main.humidity + "%");
  });

  var pastSearches = "";

  function renderButtons() {
    $("#past-searches").empty();
    for (var i = 0; i < pastSearches.length; i++);
    var cityButton = $("<button>");
    cityButton.addClass("cities");
    cityButton.attr("data-name", pastSearches[i]);
    cityButton.text(pastSearches[i]);
    $("#past-searches").prepend(cityButton);
  }
  renderButtons();
}

/*$.ajax({
    url: iconURL,
    method: "GET"
}).then(function(response) {
   console.log(response);
})*/
