import movieDB from "./movieDB-service.js"; // Import the serieDB service
import calculatePaginationIndexes from "../utils/pagination.js"; // Import the utility function

class SeriesService {
	// Fetch serie details
	async getSerieDetails(serie_id) {
		try {
			const response = await movieDB.tvInfo({
				id: serie_id,
				language: "en-US",
			});

			return response;
		} catch (error) {
			console.log(error);
			throw new Error("An error occurred while fetching serie data.");
		}
	}

	// Fetch a batch of Series
	async getSeries(page, limit) {
		const { pageToFetch, startIndex, endIndex } =
			calculatePaginationIndexes(page, limit);
		try {
			const response = await movieDB.discoverTv({
				page: pageToFetch,
				include_adult: false,
				language: "en-US",
			});

			const Series = response.results.slice(startIndex, endIndex);
			console.log(Series.length);
			return Series;
		} catch (error) {
			console.log(error);
			throw new Error("An error occurred while fetching serie data.");
		}
	}

	// Fetch the top 5 Series
	async getTopSeries(page, limit) {
		const { pageToFetch, startIndex, endIndex } =
			calculatePaginationIndexes(page, limit);
		try {
			const response = await movieDB.tvTopRated({
				page: pageToFetch,
				include_adult: false,
				language: "en-US",
			});

			const Series = response.results.slice(startIndex, endIndex);
			return Series;
		} catch (error) {
			throw new Error(
				"An error occurred while fetching the top Series."
			);
		}
	}

	// Fetch serie Trailer
	async getSerieTrailer(serie_id) {
		try {
			const response = await movieDB.tvVideos({
				id: serie_id,
				language: "en-US",
			});

			// Filter results to include only trailers
			const trailers = response.results.filter(
				(result) => result.type === "Trailer"
			);

			return trailers;
		} catch (error) {
			console.log(error);
			throw new Error("An error occurred while fetching serie data.");
		}
	}
}

export default new SeriesService();
