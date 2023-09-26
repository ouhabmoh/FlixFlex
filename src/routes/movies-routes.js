// routes/movieRoutes.js

import express from "express";
import moviesController from "../controllers/movies-controller.js";

const router = express.Router();

// Define routes for movies
router.get("/", moviesController.getMovies);

// Define routes for movies
router.get("/top", moviesController.getTopMovies);

// Define routes for movie trailer
router.get("/trailer/:id", moviesController.getMovieTrailer);

// Define routes for movie detail
router.get("/:id", moviesController.getMovieDetails);

export default router;
