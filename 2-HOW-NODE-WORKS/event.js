const EventEmitter = require("events");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
	console.log("Request received!");
	res.end("Request received");
});

server.on("request", (req, res) => {
	console.log("Another request");
});

server.on("close", () => {
	console.log("Server closed");
});

server.listen(8800, () => {
	console.log(`Waiting for requests...`);
});

const myEmitter = new EventEmitter();

myEmitter.on("newSale", () => {
	console.log("There was a new sale!");
});

myEmitter.on("newSale", () => {
	console.log("Costumer name: Jonas");
});

myEmitter.on("newSale", (stock) => {
	console.log(`There are now ${stock} items left in stock.`);
});

myEmitter.emit("newSale", 9);
