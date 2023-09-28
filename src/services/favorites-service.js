import Favorite from "../models/Favorite.js";
import MoviesService from "./movies-service.js";
import SeriesService from "./series-service.js";

class FavoritesService {
	constructor() {
		this.movieService = MoviesService;
		this.seriesService = SeriesService;
	}

	// Add a favorite for a user
	async addFavorite(userId, mediaId, mediaType) {
		try {
			const favorite = new Favorite({
				userId,
				mediaId,
				mediaType,
			});

			await favorite.save();
			return favorite;
		} catch (error) {
			console.error(error);
			throw new Error("Unable to add favorite.");
		}
	}

	// Remove a favorite for a user
	async removeFavorite(userId, mediaId, mediaType) {
		try {
			const favorite = await Favorite.findOneAndRemove({
				userId,
				mediaId,
				mediaType,
			});

			if (!favorite) {
				null;
			}

			return favorite;
		} catch (error) {
			throw new Error("Unable to remove favorite.");
		}
	}

	// Get favorites for a user
	async getFavorites(userId) {
		try {
			const favorites = await Favorite.find({ userId });
			// Fetch details for each favorite using the MovieService or SeriesService
			const favoriteDetails = [];

			for (const favorite of favorites) {
				try {
					let mediaDetails = null;

					if (favorite.mediaType === "movie") {
						mediaDetails =
							await this.movieService.getMovieDetails(
								favorite.mediaId
							);
					} else if (favorite.mediaType === "serie") {
						mediaDetails =
							await this.seriesService.getSerieDetails(
								favorite.mediaId
							);
					}

					if (mediaDetails) {
						// Combine favorite details with media details
						favoriteDetails.push({
							...favorite.toObject(),
							mediaDetails,
						});
					}
				} catch (error) {
					// Handle the error, log it if needed, and continue processing other favorites
					console.error(
						`Error fetching media details for favorite: ${error.message}`
					);
				}
			}

			return favoriteDetails;
		} catch (error) {
			throw new Error("Unable to get favorites.");
		}
	}
}

export default new FavoritesService();
