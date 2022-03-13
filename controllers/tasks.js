const Task = require("../models/Task");

/*
 * @GET api/tasks
 * @ - Get All Tasks
 */

const getAllTasks = (req, res) => {
	res.send("All Tasks");
};

/*
 * @POST api/tasks
 * @ - Create Task
 */

const createTask = (req, res) => {
	res.json(req.body);
};

/*
 * @Get api/tasks/:id
 * @ - Get Task
 */

const getTask = (req, res) => {
	res.json({ id: req.params.id });
};

/*
 * @PUT/PATCH api/tasks/:id
 * @ - Update Task
 */

const updateTask = (req, res) => {
	res.send("Update Task");
};

/*
 * @DELETE api/tasks/:id
 * @ - Delete Task
 */

const deleteTask = (req, res) => {
	res.send("Delete Task");
};

module.exports = {
	getAllTasks,
	createTask,
	getTask,
	updateTask,
	deleteTask,
};
