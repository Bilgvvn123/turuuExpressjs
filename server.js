const express = require("express");
const colors = require("colors");
const cors = require("cors");

// database
const connectDb = require("./config/connectDb");

//routes
const todoRoutes = require("./routes/todos");

connectDb();

const app = express();

var whitelist = ["http://localhost:5173"];
var corsOptions = {
	origin: "*",
	// origin: function (origin, callback) {
	// 	if (whitelist.indexOf(origin) !== -1) {
	// 		callback(null, true);
	// 	} else {
	// 		callback(new Error("Not allowed by CORS"));
	// 	}
	// },
};

app.use(express.json());
app.use(cors(corsOptions));

app.use("/api/v1", todoRoutes);

app.listen(2030, () => {
	console.log("2030 port ma server aslaa".rainbow.bold);
});
