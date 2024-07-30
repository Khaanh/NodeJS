const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = require("./app");

const PORT = process.env.PORT || 88800;
app.listen(PORT, () => {
	console.log(`App running on ${PORT}...`);
});
