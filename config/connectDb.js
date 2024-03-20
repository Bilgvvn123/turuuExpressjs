const mongoose = require("mongoose");

const connectDb = async () => {
	if (mongoose.connection.readyState >= 1) return;

	await mongoose.connect(
		"mongodb+srv://ttsogtsaikhan82:SV3BpUqLisqg305Q@cluster0.zitilau.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
	);

	console.log(mongoose.connection.host);
};

module.exports = connectDb;
