const Tour = require("./../models/tourModel");

// Now we use DB instead JSON
// const tours = JSON.parse(
// 	fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
// );

exports.checkBody = (req, res, next) => {
	if (!req.body.price || !req.body.name) {
		return res.status(400).json({
			status: "Fail",
			message: "Missing name or price",
		});
	}
	next();
};

exports.getAllTours = (req, res) => {
	return res.status(200).json({
		status: "success",
		requestedAt: req.requestTime,
		// results: tours.length,
		// data: {
		// 	tours: tours,
		// },
	});
};

exports.getTour = (req, res) => {
	const id = req.params.id * 1;
	// const tour = tours.find((el) => el.id === id);
	// console.log(req.requestTime);

	// res.status(200).json({
	// 	status: "success",
	// 	data: {
	// 		tour,
	// 	},
	// });
};

exports.createTour = (req, res) => {
	res.status(201).json({
		status: "success",
		// data: {
		// 	tour: newTour,
		// },
	});
};

exports.updateTour = (req, res) => {
	res.status(200).json({
		status: "Success",
		data: {
			tour: "<Update file here...>",
		},
	});
};

exports.deleteTour = (req, res) => {
	res.status(204).json({
		status: "Success",
		data: null,
	});
};
