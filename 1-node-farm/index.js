const fs = require("fs");
const http = require("http");
const url = require("url");
const slugify = require("slugify");
const replaceTemplate = require("./starter/modules/replaceTemplate");

const tempOverview = fs.readFileSync(
	`${__dirname}/starter/templates/template-overview.html`,
	"utf-8"
);
const tempCard = fs.readFileSync(
	`${__dirname}/starter/templates/template-card.html`,
	"utf-8"
);
const tempProduct = fs.readFileSync(
	`${__dirname}/starter/templates/template-product.html`,
	"utf-8"
);

const data = fs.readFileSync(
	`${__dirname}/starter/dev-data/data.json`,
	"utf-8"
);
const dataObj = JSON.parse(data);
const slug = dataObj.map((el) => slugify(el.productName, { lower: true }));
console.log(slug);

// console.log(slugify("Fresh Avocados", { lower: true }));

const server = http.createServer((req, res) => {
	const { query, pathname } = url.parse(req.url, true);

	// Overview page
	if (pathname === "/" || pathname === "/overview") {
		res.writeHead(200, { "Content-type": "text/html" });

		const cardsHtml = dataObj
			.map((el) => replaceTemplate(tempCard, el))
			.join(" ");
		console.log(cardsHtml);
		const outPut = tempOverview.replace("{%PRODUCT_CARDS%}", cardsHtml);

		res.end(outPut);

		// Product page
	} else if (pathname === "/product") {
		res.writeHead(200, { "Content-type": "text/html" });
		const product = dataObj[query.id];
		const output = replaceTemplate(tempProduct, product);
		res.end(output);

		// API
	} else if (pathname === "/api") {
		res.writeHead(200, { "Content-type": "application/json" });
		res.end(data);

		// Not found
	} else {
		res.writeHead(404, {
			"Content-type": "text/html",
		});

		res.end("<h1>Page not FOUND!</h1>");
	}
});

server.listen("8100", () => {
	console.log("Server is running on port 8100");
});
