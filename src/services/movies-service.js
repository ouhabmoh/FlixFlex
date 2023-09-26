import moviedb from "./movieDB-service.js"; // Import the MovieDB service
import calculatePaginationIndexes from "../utils/pagination.js"; // Import the utility function

class MoviesService {
	// Fetch movie details
	async getMovieDetails(movie_id) {
		try {
			const response = await moviedb.movieInfo({
				id: movie_id,
				language: "en-US",
			});

			return response;
		} catch (error) {
			console.log(error);
			throw new Error("An error occurred while fetching movie data.");
		}
	}

	// Fetch a batch of movies
	async getMovies(page, limit) {
		const { pageToFetch, startIndex, endIndex } =
			calculatePaginationIndexes(page, limit);
		try {
			const response = await moviedb.discoverMovie({
				page: pageToFetch,
				include_adult: false,
				language: "en-US",
			});

			const movies = response.results.slice(startIndex, endIndex);
			console.log(movies.length);
			return movies;
		} catch (error) {
			console.log(error);
			throw new Error("An error occurred while fetching movie data.");
		}
	}

	// Fetch the top 5 movies
	async getTopMovies(page, limit) {
		const { pageToFetch, startIndex, endIndex } =
			calculatePaginationIndexes(page, limit);
		try {
			const response = await moviedb.movieTopRated({
				page: pageToFetch,
				include_adult: false,
				language: "en-US",
			});

			const movies = response.results.slice(startIndex, endIndex);
			return movies;
		} catch (error) {
			throw new Error(
				"An error occurred while fetching the top movies."
			);
		}
	}
}

export default new MoviesService();
