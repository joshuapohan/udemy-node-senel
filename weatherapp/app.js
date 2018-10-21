const request = require('request');
const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const forecast = require('./forecast/forecast');

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address to fetch weather for',
			string: true
		}
	})
	.help()
	.alias('help', 'h')
	.argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
	if(errorMessage){
		console.log(errorMessage);
	}else{
		console.log(JSON.stringify(results, undefined, 2));
		forecast.weatherForecast(results.latitude, results.langitude);
	}
});

//'https://www.mapquestapi.com/geocoding/v1/address?key=5ZruUfv6AW9JTpKtAjs9mum20Wfi0X0X&inFormat=kvp&outFormat=json&location=grogol%2C+jakarta&thumbMaps=false'
