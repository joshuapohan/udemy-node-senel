
const request = require('request');

geocodeAddress = (address) => {
	return new Promise( (resolve, reject) => {
		request({
			url: 'https://www.mapquestapi.com/geocoding/v1/address?key=5ZruUfv6AW9JTpKtAjs9mum20Wfi0X0X&inFormat=kvp&outFormat=json&location=' + address +'&thumbMaps=false',
			json: true
		}, (error, response, body) => {
			if(error){
				reject(error);	
			}
			else if(body){
				if(body.info.statuscode === 0){
					var lat = body['results'][0]['locations'][0]['latLng'].lat;
					var lnd = body['results'][0]['locations'][0]['latLng'].lng;
					resolve({
						latitude:lat,
						langitude:lnd
					});
				}
				else{
					reject(undefined, body);
				}
			}
			else{
				reject("Invalid response from server");
			}
		});	
	});
};

geocodeAddress('19146').then( (location) =>{
	console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
	console.log(errorMessage);
});
console.log('tset');