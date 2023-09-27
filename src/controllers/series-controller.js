import serieService from "../services/series-service.js";

// Get serie detail
const getSerieDetails = async (req, res) => {
	try {
		const serie_id = req.params.id;

		const serie = await serieService.getSerieDetails(serie_id);

		res.status(200).json(serie);
	} catch (error) {
		res.status(500).json({
			error: "An error occurred while fetching series.",
		});
	}
};

// Get a batch of series
const getSeries = async (req, res) => {
	try {
		const page = req.query.page || 1; // Get the page query parameter (default to 1)

		const series = await serieService.getSeries(page);

		res.status(200).json(series);
	} catch (error) {
		res.status(500).json({
			error: "An error occurred while fetching series.",
		});
	}
};

// Get a batch of series
const getTopSeries = async (req, res) => {
	try {
		const page = req.query.page || 1; // Get the page query parameter (default to 1)

		const series = await serieService.getTopSeries(page);

		res.status(200).json(series);
	} catch (error) {
		res.status(500).json({
			error: "An error occurred while fetching series.",
		});
	}
};

// Get serie detail
const getSerieTrailer = async (req, res) => {
	try {
		const serie_id = req.params.id;

		const trailers = await serieService.getSerieTrailer(serie_id);

		res.status(200).json(trailers);
	} catch (error) {
		res.status(500).json({
			error: "An error occurred while fetching series.",
		});
	}
};
export default {
	getSeries,
	getTopSeries,
	getSerieDetails,
	getSerieTrailer,
};
