const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
	// Solution 1
	// fs.readFile("./test-fil1e.txt", (err, data) => {
	// 	if (err) console.log(err);
	// 	res.write(data);
	// });
	// Solution 2
	// const readable = fs.createReadStream("./test-fil1e.txt");
	// readable.on("data", (chunk) => {
	// 	res.write(chunk);
	// });
	// readable.on("end", () => {
	// 	res.end();
	// });
	// readable.on("error", (err) => {
	// 	console.log(err);
	// 	res.statusCode = 500;
	// 	res.end("File not found!");
	// });
	// Solution 3
	// const readable = fs.createReadStream("./test-file.txt");
	// readable.pipe(res);
});

server.listen(8800, () => {
	console.log("Listening port 8800");
});
