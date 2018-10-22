const request = require('request');

// https://api.darksky.net/forecast/1434f382592eb203ea932d2d80a3cf76/37.8267,-122.4233

var weatherForecast = (lat, lnd) =>{
	request({
		url: 'https://api.darksky.net/forecast/1434f382592eb203ea932d2d80a3cf76/'+lat+','+lnd,
		json: true
	}, (error, response, body) => {
		if(error){
			console.log(error);
		}else if(response.statusCode === 200){
			console.log(body.timezone);
			console.log(body.latitude);
			console.log(body.longitude);
			console.log(body.currently.icon);
			console.log(body.currently.temperature);
			//console.log(JSON.stringify(body, undefined, 2));
		}
	});
}

module.exports = {
	weatherForecast
};