import express from "express";
import * as AuthController from "../controllers/auth-controller.js";
import {
	loginValidationRules,
	registerValidationRules,
} from "../validations/auth-validation.js";
import { validate } from "../middlewares/validation-middleware.js";
import { isNotLoggedIn } from "../middlewares/authentication-middleware.js";
const router = express.Router();

router.post(
	"/login",
	isNotLoggedIn,
	loginValidationRules(),
	validate,
	AuthController.login
);
router.post(
	"/register",
	isNotLoggedIn,
	registerValidationRules(),
	validate,
	AuthController.register
);

export default router;
