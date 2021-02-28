
const API_KEY = config.API_KEY ;
$(document).ready(function (){
    $('#mainLoader').fadeOut(1000);
    $('#spinner').hide();
    $('button').click(function (){
      $('#spinner').show();
        var a = $('#search-input').val();
        var url = `https://api.openweathermap.org/data/2.5/weather?q=${a}&units=metric&appid=${API_KEY}`
        $.getJSON(url, function (data){
            $('#spinner').hide();
            $('.card').show();
            $('.alert').hide();
            console.log(data);
            var iconcode = data.weather[0].icon;
            var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
            $('#wicon').attr('src', iconurl);
            $('#name').html(data.name);
            $('#temp').html(data.main.temp);
            $('#feels').html(data.main.feels_like);
            $('#humidity').html(data.main.humidity);
            $('#pressure').html(data.main.pressure);
            $('#desc').html(data.weather[0].main);
        }).done(function() {
            $('input').val("");
            console.log( " success" );
          })
          .fail(function() {
            $('.alert').show();
            $('.card').hide();
            $('#spinner').hide();
          });
        
    });
});