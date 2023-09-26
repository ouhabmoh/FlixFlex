import express from "express";
import seriesController from "../controllers/series-controller.js";

const router = express.Router();

// Define routes for series
router.get("/", seriesController.getSeries);

// Define routes for series
router.get("/top", seriesController.getTopSeries);

// Define routes for serie trailer
router.get("/trailer/:id", seriesController.getSerieTrailer);

// Define routes for serie detail
router.get("/:id", seriesController.getSerieDetails);

export default router;
