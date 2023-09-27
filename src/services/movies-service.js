import moviedb from "./movieDB-service.js"; // Import the MovieDB service
import {
	calculatePaginationIndexes,
	calculateTotalResults,
} from "../utils/pagination.js"; // Import the utility function
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
	async getMovies(page) {
		const { pageToFetch, startIndex, endIndex } =
			calculatePaginationIndexes(page);
		try {
			const response = await moviedb.discoverMovie({
				page: pageToFetch,
				include_adult: false,
				language: "en-US",
			});

			const movies = response.results.slice(startIndex, endIndex);
			const totalResults = response.total_results;
			const totalPages = calculateTotalResults(
				totalResults,
				response.total_pages,
				page
			);
			return {
				page,
				movies,
				totalPages,

				totalResults,
			};
		} catch (error) {
			console.log(error);
			throw new Error("An error occurred while fetching movie data.");
		}
	}

	// Fetch the top 5 movies
	async getTopMovies(page) {
		const { pageToFetch, startIndex, endIndex } =
			calculatePaginationIndexes(page);
		try {
			const response = await moviedb.movieTopRated({
				page: pageToFetch,
				include_adult: false,
				language: "en-US",
			});

			const movies = response.results.slice(startIndex, endIndex);
			const totalResults = response.total_results;
			const totalPages = calculateTotalResults(
				totalResults,
				response.total_pages,
				page
			);
			return {
				page,
				movies,
				totalPages,

				totalResults,
			};
		} catch (error) {
			throw new Error(
				"An error occurred while fetching the top movies."
			);
		}
	}

	// Fetch movie Trailer
	async getMovieTrailer(movie_id) {
		try {
			const response = await moviedb.movieVideos({
				id: movie_id,
				language: "en-US",
			});

			// Filter results to include only trailers
			const trailers = response.results.filter(
				(result) => result.type === "Trailer"
			);

			return trailers;
		} catch (error) {
			console.log(error);
			throw new Error("An error occurred while fetching movie data.");
		}
	}
}

export default new MoviesService();
