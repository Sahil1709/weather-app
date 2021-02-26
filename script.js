const appid = '2fc7f2a0800958ccdd66788bde858aa5';
$(document).ready(function (){
    
    $('button').click(function (){
        $('.card').toggle();
        var a = $('#search-input').val();
        var url = `https://api.openweathermap.org/data/2.5/weather?q=${a}&units=metric&appid=${appid}`
        $.getJSON(url, function (data){
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
        });
        
    });
});