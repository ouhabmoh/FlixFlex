import moviedb from "./movieDB-service.js"; // Import the MovieDB service
import {
	calculatePaginationIndexes,
	calculateTotalResults,
} from "../utils/pagination.js"; // Import the utility function
// Search for movies and series by query
const searchMoviesAndSeries = async (query, page) => {
	const { pageToFetch, startIndex, endIndex } =
		calculatePaginationIndexes(page);
	console.log(startIndex, endIndex);
	try {
		const response = await moviedb.searchMovie({
			query,
			page: pageToFetch,
			include_adult: false,
			language: "en-US",
		});
		const totalResults = response.total_results;
		return {
			page,
			results: response.results.slice(startIndex, endIndex),
			totalPages: calculateTotalResults(
				totalResults,
				response.total_pages,
				page
			),

			totalResults,
		};
	} catch (error) {
		console.log(error);
		throw new Error(
			"An error occurred while searching for movies and series."
		);
	}
};

export default {
	searchMoviesAndSeries,
};
