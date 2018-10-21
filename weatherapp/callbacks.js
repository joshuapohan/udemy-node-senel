var getUser = (id, callback) => {
	let user = {
		id: id,
		name: 'Vikram'
	};
	setTimeout(() =>{
		callback(user);
	}, 3000);
};

getUser(32, (user) => {
	console.log(user);
});