import express from "express";
import authRouter from "./auth-routes.js";
import usersRouter from "./user-routes.js";
const router = express.Router();

// Mount the authentication router
router.use("/auth", authRouter);

// Mount the users router
router.use("/users", usersRouter);

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
