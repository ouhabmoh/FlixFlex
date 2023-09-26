// controllers/movieController.js

import movieService from "../services/movies-service.js";

// Get a batch of movies
const getMovies = async (req, res) => {
	try {
		const page = req.query.page || 1; // Get the page query parameter (default to 1)
		const batchSize = req.query.batchSize || 10; // Get the batchSize query parameter (default to 10)

		const movies = await movieService.getMovies(page, batchSize);

		res.status(200).json(movies);
	} catch (error) {
		res.status(500).json({
			error: "An error occurred while fetching movies.",
		});
	}
};

export default {
	getMovies,
};
