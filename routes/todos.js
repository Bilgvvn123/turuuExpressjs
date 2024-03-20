const express = require("express");

const {
	getTodos,
	getTodo,
	createTodo,
	deleteTodo,
	completeTodo,
} = require("../controllers/todos");

const router = express.Router();

// http://localhost:2030/todos
router.route("/todos").get(getTodos).post(createTodo);

// http://localhost:2030/todos/:todoId
router.route("/todos/:todoId").get(getTodo).delete(deleteTodo);

// http://localhost:2030/todos/:todoId/complete
router.route("/todos/:todoId/complete").put(completeTodo);

module.exports = router;
