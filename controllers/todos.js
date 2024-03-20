const Todo = require("../models/Todo");

exports.getTodos = async (req, res) => {
	try {
		const todos = await Todo.find();

		if (!todos)
			return res.status(400).json({
				success: false,
				message: "No data",
			});

		res.status(200).json({
			success: true,
			todos,
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			message: err.message,
		});
	}
};

exports.getTodo = async (req, res) => {
	try {
		const todo = await Todo.findOne({ _id: req.params.todoId });

		if (!todo)
			return res.status(400).json({
				success: false,
				message: "ta id-gaa shalgana uu!",
			});

		return res.json({
			success: true,
			todo,
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			message: err.message,
		});
	}
};

exports.deleteTodo = async (req, res) => {
	try {
		const deleteTodo = await Todo.deleteOne({ _id: req.params.todoId });

		return res.json({
			deleteTodo,
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			message: err.message,
		});
	}
};

exports.createTodo = async (req, res) => {
	try {
		if (!req.body.title)
			return res.status(400).json({
				success: false,
				message: "Talbaruudaa bvren buglunu vv!",
			});

		const newTodo = await Todo.create(req.body);

		if (!newTodo)
			return res.status(400).json({
				success: false,
				message: "Data nemegdsengvi",
			});

		return res.json({
			success: true,
			newTodo,
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			message: err.message,
		});
	}
};

exports.completeTodo = async (req, res) => {
	try {
		const todo = await Todo.findOne({ _id: req.params.todoId });
		console.log(todo);

		if (todo.completed) {
			await Todo.updateOne(
				{ _id: req.params.todoId },
				{ $set: { completed: false } }
			);
		} else {
			await Todo.updateOne(
				{ _id: req.params.todoId },
				{ $set: { completed: true } }
			);
		}

		return res.json({
			todo,
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			message: err.message,
		});
	}
};
