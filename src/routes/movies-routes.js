// routes/movieRoutes.js

import express from "express";
import moviesController from "../controllers/movies-controller.js";

const router = express.Router();

// Define routes for movies
router.get("/", moviesController.getMovies);

export default router;
