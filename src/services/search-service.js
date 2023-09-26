import moviedb from "./movieDB-service.js"; // Import the MovieDB service

// Search for movies and series by query
const searchMoviesAndSeries = async (query) => {
	try {
		const response = await moviedb.searchMovie({
			query,
			include_adult: false,
			language: "en-US",
		});

		return response.results;
	} catch (error) {
		throw new Error(
			"An error occurred while searching for movies and series."
		);
	}
};

export default {
	searchMoviesAndSeries,
};
