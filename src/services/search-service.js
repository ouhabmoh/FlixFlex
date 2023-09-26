import moviedb from "./movieDB-service.js"; // Import the MovieDB service

// Search for movies and series by query
const searchMoviesAndSeries = async (query, page) => {
	const { pageToFetch, startIndex, endIndex } = calculatePaginationIndexes(
		page,
		limit
	);
	try {
		const response = await moviedb.searchMovie({
			query,
			page: pageToFetch,
			include_adult: false,
			language: "en-US",
		});

		return response.results.slice(startIndex, endIndex);
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
