
$("#search").on("click", function(event) {
    event.preventDefault();
    var search = $("#city").val();
    console.log(search);
weather(search);
  
})

function weather(search) {
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + search + "&APPID=4785a78b216636ca439247db2c4751b1";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
      console.log(response);


    })
}




