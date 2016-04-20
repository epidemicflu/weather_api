window.onload = function() { 
	var formElement = document.getElementById('form');
	var inputElement = document.getElementById('input');

	formElement.onsubmit = function(e){
		e.preventDefault();
		var cityName = inputElement.value;
		getWeather(cityName);
	};
	};

function printWeather(event) {
	var response = JSON.parse(event.target.responseText);
	document.write(response.main.temp);
}

function getWeather(cityName) {
  var url = 'http://api.openweathermap.org/data/2.5/weather' +
  '?appid=c2f2d170f6f6fc336058e9851edb828c' +
  '&q=' + cityName +
  '&units=imperial';

  var xhrObject = new XMLHttpRequest();
  xhrObject.open('GET', url, true);
  xhrObject.onload = printWeather;
  xhrObject.send();
}
