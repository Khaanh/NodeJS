const express = require("express");
const morgan = require("morgan");
const app = express();
const toursRouter = require("./routes/tourRoutes");
const usersRouter = require("./routes/userRoutes");

if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
	req.requestTime = new Date().toISOString();
	next();
});

app.use("/api/v1/tours", toursRouter);
app.use("/api/v1/users", usersRouter);

module.exports = app;
