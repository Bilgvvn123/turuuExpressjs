try {
	console.log("123");
	throw new Error("aaa");
	console.log("321");
} catch (err) {
	console.log(err);
}
