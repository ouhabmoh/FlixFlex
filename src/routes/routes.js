import express from "express";
import authRouter from "./auth-routes.js";
import usersRouter from "./user-routes.js";
import moviesRouter from "./movies-routes.js";
import seriesRouter from "./series-routes.js";
import searchRouter from "./search-routes.js";
import favoritesRouter from "./favorites-routes.js";

const router = express.Router();

// Mount the authentication router
router.use("/auth", authRouter);

// Mount the users router
router.use("/users", usersRouter);

// Mount the movies router
router.use("/movies", moviesRouter);

// Mount the movies router
router.use("/series", seriesRouter);

// Mount the search router
router.use("/search", searchRouter);

// Mount the favorites router
router.use("/favorites", favoritesRouter);

// Define a default route (catch-all route)
router.use((req, res) => {
	res.status(404).json({ message: "Page not found" });
});

// Error handling middleware
router.use((error, req, res, next) => {
	console.error("Error:", error);
	res.status(500).json({ error: "Internal server error" });
});

export default router;
