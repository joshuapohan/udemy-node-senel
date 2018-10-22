var asyncAdd = (a,b) =>{
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if(typeof(a) === 'number' && typeof(b) === 'number'){
				resolve(a+b);
			}
			else{

				reject('Not a number');
			}
		}, 1500);
	});
};

asyncAdd(1,2).then( (res) => {
	console.log(res);
	return asyncAdd(res, 5);
}).then((res) => {
	console.log('result should be 8 : ' + res);
}).catch((errorMessage) => {
	console.log(errorMessage);
});
//asyncAdd('a','b');

// var somePromise = new Promise((resolve, reject) =>{
// 	setTimeout(() => {
// 		//resolve('Hey. It worked!');
// 		reject('Unable to fullfill promise');
// 	}, 2500);
// });


// somePromise.then( (message) => {
// 	console.log('Success: ' + message);
// }, (errorMessage) =>{
// 	console.log('Error: ' + errorMessage);
// });
