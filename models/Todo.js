const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
	title: String,
	completed: {
		type: Boolean,
		default: false,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("todos", TodoSchema);
