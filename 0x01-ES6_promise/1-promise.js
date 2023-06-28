export default getFullResponseFromAPI(success){
	return new promise ((resolve, reject) => {
		if (resolve) {
			const res = {
				status : 200,
				body : 'success',
			}
		}
		resolve(res);
		else (reject) {
			const rej = {
				msg: 'The fake API is not working currently'
			}
		}
	}
}
