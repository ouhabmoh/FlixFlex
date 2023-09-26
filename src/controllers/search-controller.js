// controllers/searchController.js

import searchService from "../services/search-service.js"; // Import the search service

// Search for movies and series by query
const searchMoviesAndSeries = async (req, res) => {
	try {
		console.log(req.query);
		const query = req.query.query;

		if (!query) {
			return res
				.status(400)
				.json({ error: "Query parameter is required." });
		}

		const results = await searchService.searchMoviesAndSeries(query);

		res.status(200).json(results);
	} catch (error) {
		res.status(500).json({
			error: "An error occurred while searching for movies and series.",
		});
	}
};

export default {
	searchMoviesAndSeries, // The dedicated search controller method
	// Add more search-related methods here if needed
};
