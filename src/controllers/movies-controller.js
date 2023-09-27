import movieService from "../services/movies-service.js";

// Get movie detail
const getMovieDetails = async (req, res) => {
	try {
		const movie_id = req.params.id;

		const movie = await movieService.getMovieDetails(movie_id);

		res.status(200).json(movie);
	} catch (error) {
		res.status(500).json({
			error: "An error occurred while fetching movies.",
		});
	}
};

// Get a batch of movies
const getMovies = async (req, res) => {
	try {
		const page = req.query.page || 1; // Get the page query parameter (default to 1)

		const movies = await movieService.getMovies(page);

		res.status(200).json(movies);
	} catch (error) {
		res.status(500).json({
			error: "An error occurred while fetching movies.",
		});
	}
};

// Get a batch of movies
const getTopMovies = async (req, res) => {
	try {
		const page = req.query.page || 1; // Get the page query parameter (default to 1)

		const movies = await movieService.getTopMovies(page);

		res.status(200).json(movies);
	} catch (error) {
		res.status(500).json({
			error: "An error occurred while fetching movies.",
		});
	}
};

// Get movie detail
const getMovieTrailer = async (req, res) => {
	try {
		const movie_id = req.params.id;

		const trailers = await movieService.getMovieTrailer(movie_id);

		res.status(200).json(trailers);
	} catch (error) {
		res.status(500).json({
			error: "An error occurred while fetching movies.",
		});
	}
};
export default {
	getMovies,
	getTopMovies,
	getMovieDetails,
	getMovieTrailer,
};
