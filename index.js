// window.onload = function() { 
// 	var formElement = document.getElementById('form');
// 	var inputElement = document.getElementById('input');

// 	formElement.onsubmit = function(e){
// 		e.preventDefault();
// 		var cityName = inputElement.value;
// 		getWeather(cityName);
// 	};
// 	};
$(function() {
	

	$('form').on('submit', function(event) {
		event.preventDefault();
		
		var userInput = $('input').val();
		var cities = userInput.split(',');

    for(var i = 0; i < cities.length; i++){
    	var cityName = cities[i];
    	getWeather(cityName);
    	
    }
	});
});


function printWeather(response) {
	
	var element = $('<p>', {text: response.main.temp })
	$('body').append(element);
	
}

function getWeather(cityName) {
  var url = 'https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather' +
  '?appid=c2f2d170f6f6fc336058e9851edb828c' +
  '&q=' + cityName +
  '&units=imperial';
  
	$.get(url, printWeather);

}
