export default getFullResponseFromAPI(success){
	return new Promise ((resolve, reject) => {
		if (true) {
			const res = {
				status : 200,
				body : 'success',
			}
			resolve(res);
		}
		else {
			const rej = {
				msg: 'The fake API is not working currently',
			}
			reject(rej);
		}
	}
});
