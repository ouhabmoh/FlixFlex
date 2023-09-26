import moviedb from "./movieDB-service.js"; // Import the MovieDB service

class MoviesService {
	// Fetch a batch of movies and series
	async getMovies(page = 1, batchSize = 10) {
		try {
			const response = await moviedb.discoverMovie({
				page,
				include_adult: false,
				language: "en-US",
			});

			const movies = response.results.slice(batchSize);

			return movies;
		} catch (error) {
			console.log(error);
			throw new Error("An error occurred while fetching movie data.");
		}
	}
}

export default new MoviesService();
