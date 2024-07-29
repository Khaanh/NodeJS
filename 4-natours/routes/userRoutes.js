const express = require("express");

const router = express.Router();

const getAllUsers = (req, res) => {
	res.status(500).json({
		status: "error",
		message: "This route is not yet defined",
	});
};

const getUsers = (req, res) => {
	res.status(500).json({
		status: "error",
		message: "This route is not yet defined",
	});
};

const createUsers = (req, res) => {
	res.status(500).json({
		status: "error",
		message: "This route is not yet defined",
	});
};

const updateUsers = (req, res) => {
	res.status(500).json({
		status: "error",
		message: "This route is not yet defined",
	});
};

const deleteUsers = (req, res) => {
	res.status(500).json({
		status: "error",
		message: "This route is not yet defined",
	});
};

router.route("/").get(getAllUsers).post(createUsers);
router.route("/:id").get(getUsers).patch(updateUsers).delete(deleteUsers);

module.exports = router;
