import moviedb from "./movieDB-service.js"; // Import the MovieDB service
import calculatePaginationIndexes from "../utils/pagination.js"; // Import the utility function

class MoviesService {
	// Fetch a batch of movies and series
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
}

export default new MoviesService();
