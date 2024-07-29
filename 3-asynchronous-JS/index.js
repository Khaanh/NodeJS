async () => {
	try {
		console.log("1");
		let data = await fetch("");
		let obj = await data.json();
		console.log("2");
	} catch (error) {
		console.log(error);
	}
};
