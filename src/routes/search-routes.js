// routes/searchRoutes.js

import express from "express";
import searchController from "../controllers/search-controller.js";

const router = express.Router();

// Define a route to search for movies and series
router.get("/", searchController.searchMoviesAndSeries);

export default router;
