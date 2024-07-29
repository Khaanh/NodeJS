const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = 8800;
const toursRouter = require("./routes/tourRoutes");
const usersRouter = require("./routes/userRoutes");

// Middleware transform client data(POST) to JSON;
app.use(express.json());
app.use(morgan("dev"));
app.use((req, res, next) => {
	req.requestTime = new Date().toISOString();
	console.log("Hello from Middleware function");
	next();
});

app.use("/api/v1/tours", toursRouter);
app.use("/api/v1/users", usersRouter);

app.listen(PORT, () => {
	console.log(`App running on ${PORT}...`);
});
