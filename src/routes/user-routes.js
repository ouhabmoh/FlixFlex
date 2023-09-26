import express from "express";
import * as userController from "../controllers/user-controller.js";
import { isAdmin } from "../middlewares/authorization-middleware.js";
import { isLoggedIn } from "../middlewares/authentication-middleware.js";
import { registerValidationRules } from "../validations/auth-validation.js";
import { validate } from "../middlewares/validation-middleware.js";
const router = express.Router();

// Define a route for getting all users (accessible to admins only)
router.get("/", isAdmin, userController.getUsers);

// Define a route for getting a user by ID (accessible to logged-in users)
router.get("/:id", isLoggedIn, userController.getUser);

// Define a route for creating a new user (accessible to admins, with registration validation)
router.post(
	"/",
	isAdmin,
	registerValidationRules(),
	validate,
	userController.createUser
);

// Define a route for updating a user (accessible to admins)
router.put("/:id", isAdmin, userController.updateUser);

// Define a route for deleting a user (accessible to admins)
router.delete("/:id", isAdmin, userController.deleteUser);

export default router; // Export the router for use in other parts of the application
