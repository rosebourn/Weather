var search = document.querySelector("input-group");
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=4785a78b216636ca439247db2c4751b1";





$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
  console.log(queryURL);
  console.log(response);
})

/*var cityDiv = $("<div class='city'>");
  var */