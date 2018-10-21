const request = require('request');

var geocodeAddress = (addr, callback) => {
	request({
		url: 'https://www.mapquestapi.com/geocoding/v1/address?key=5ZruUfv6AW9JTpKtAjs9mum20Wfi0X0X&inFormat=kvp&outFormat=json&location=' + addr +'&thumbMaps=false',
		json: true
	}, (error, response, body) => {
		if(error){
			callback(error);	
		}
		else if(body){
			if(body.info.statuscode === 0){
				var lat = body['results'][0]['locations'][0]['latLng'].lat;
				var lnd = body['results'][0]['locations'][0]['latLng'].lng;
				callback(undefined, {
					latitude: lat,
					langitude: lnd
				});
			}
			else{
				callback(undefined, body);
			}
		}
		else{
			callback("Invalid response from server");
		}
	});	
};

function testPrint(){
	console.log('from geocode.js');
}

module.exports = {
	geocodeAddress,
	testPrint
};
