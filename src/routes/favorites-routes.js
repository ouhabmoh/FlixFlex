// routes/favoritesRoutes.js
import express from "express";
import * as FavoritesController from "../controllers/favorites-controller.js";
import { isLoggedIn } from "../middlewares/authentication-middleware.js";
const router = express.Router();

// Add a favorite
router.post("/", isLoggedIn, FavoritesController.addFavorite);

// Remove a favorite
router.delete("/", isLoggedIn, FavoritesController.removeFavorite);

// Get favorites
router.get("/", isLoggedIn, FavoritesController.getFavorites);

export default router;
