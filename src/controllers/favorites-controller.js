import FavoriteService from "../services/favorites-service.js";

// Add a favorite for the authenticated user
export const addFavorite = async (req, res, next) => {
	try {
		const { mediaId, mediaType } = req.body;
		const userId = req.user._id; // User ID is extracted from the JWT token
		console.log(userId);
		const favorite = await FavoriteService.addFavorite(
			userId,
			mediaId,
			mediaType
		);

		res.status(201).json({ favorite });
	} catch (error) {
		res.status(500).json({
			error: "An error occurred while adding favorites.",
		});
	}
};

// Remove a favorite for the authenticated user
export const removeFavorite = async (req, res, next) => {
	try {
		const { mediaId, mediaType } = req.body;
		const userId = req.user._id; // User ID is extracted from the JWT token

		const favorite = await FavoriteService.removeFavorite(
			userId,
			mediaId,
			mediaType
		);
		if (favorite)
			res.status(204).send({
				message: "Favorite removed successfully",
			});
		else res.status(404).send({ message: "Favorite not found" });
	} catch (error) {
		res.status(500).json({
			error: "An error occurred while removing favorites.",
		});
	}
};

// Get favorites for the authenticated user
export const getFavorites = async (req, res, next) => {
	try {
		const userId = req.user._id; // User ID is extracted from the JWT token

		const favorites = await FavoriteService.getFavorites(userId);

		res.status(200).json({ favorites });
	} catch (error) {
		res.status(500).json({
			error: "An error occurred while getting favorites.",
		});
	}
};
