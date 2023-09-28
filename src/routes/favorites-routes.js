// routes/favoritesRoutes.js
import express from "express";
import * as FavoritesController from "../controllers/favorites-controller.js";
import { isLoggedIn } from "../middlewares/authentication-middleware.js";
import { favoriteValidationRules } from "../validations/favortie-validation.js";
import { validate } from "../middlewares/validation-middleware.js";
const router = express.Router();

// Add a favorite
router.post(
	"/",
	isLoggedIn,
	favoriteValidationRules(),
	validate,
	FavoritesController.addFavorite
);

// Remove a favorite
router.delete(
	"/",
	isLoggedIn,
	favoriteValidationRules(),
	validate,
	FavoritesController.removeFavorite
);

// Get favorites
router.get("/", isLoggedIn, FavoritesController.getFavorites);

export default router;
